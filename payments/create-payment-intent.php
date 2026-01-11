<?php
/**
 * Create Payment Intent - Stripe Integration
 * Adams Web Design
 */

header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Stripe Secret Key - REPLACE WITH YOUR ACTUAL SECRET KEY
$stripeSecretKey = 'sk_live_YOUR_SECRET_KEY_HERE'; // Get this from your Stripe dashboard

// Get request data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate required fields
if (empty($data['amount']) || empty($data['email']) || empty($data['firstName']) || empty($data['lastName'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

$amount = intval($data['amount']);
$service = isset($data['service']) ? $data['service'] : 'Payment';
$firstName = $data['firstName'];
$lastName = $data['lastName'];
$email = $data['email'];
$notes = isset($data['notes']) ? $data['notes'] : '';

// Validate amount
if ($amount < 100) { // Minimum $1.00
    http_response_code(400);
    echo json_encode(['error' => 'Amount must be at least $1.00']);
    exit;
}

// Create payment intent with Stripe
try {
    $curl = curl_init();
    
    $postFields = http_build_query([
        'amount' => $amount,
        'currency' => 'cad',
        'description' => $service,
        'receipt_email' => $email,
        'metadata' => [
            'customer_name' => $firstName . ' ' . $lastName,
            'service' => $service,
            'notes' => $notes
        ]
    ]);
    
    curl_setopt_array($curl, [
        CURLOPT_URL => 'https://api.stripe.com/v1/payment_intents',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $postFields,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $stripeSecretKey,
            'Content-Type: application/x-www-form-urlencoded'
        ],
    ]);
    
    $response = curl_exec($curl);
    $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    
    if ($httpCode !== 200) {
        $errorData = json_decode($response, true);
        throw new Exception($errorData['error']['message'] ?? 'Payment intent creation failed');
    }
    
    $paymentIntent = json_decode($response, true);
    
    // Log the payment for your records (optional)
    logPayment($paymentIntent['id'], $amount, $email, $service);
    
    // Return client secret
    echo json_encode([
        'clientSecret' => $paymentIntent['client_secret']
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}

/**
 * Log payment attempt (optional)
 */
function logPayment($paymentIntentId, $amount, $email, $service) {
    $logFile = sys_get_temp_dir() . '/payment_log.txt';
    $timestamp = date('Y-m-d H:i:s');
    $dollarAmount = number_format($amount / 100, 2);
    $logEntry = "[$timestamp] ID: $paymentIntentId | Amount: $$dollarAmount CAD | Email: $email | Service: $service\n";
    file_put_contents($logFile, $logEntry, FILE_APPEND);
}
?>