<?php
/**
 * SMTP Email Handler for Adams Web Design
 * 
 * This version uses SMTP instead of PHP's mail() function for better reliability
 * You'll need to configure your SMTP settings below
 */

// Set headers for JSON response
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$firstName = isset($_POST['firstName']) ? trim($_POST['firstName']) : '';
$lastName = isset($_POST['lastName']) ? trim($_POST['lastName']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$company = isset($_POST['company']) ? trim($_POST['company']) : '';
$serviceType = isset($_POST['serviceType']) ? trim($_POST['serviceType']) : '';
$budget = isset($_POST['budget']) ? trim($_POST['budget']) : '';
$timeline = isset($_POST['timeline']) ? trim($_POST['timeline']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';
$currentWebsite = isset($_POST['currentWebsite']) ? trim($_POST['currentWebsite']) : '';

// Validate required fields
if (empty($firstName) || empty($lastName) || empty($email) || empty($serviceType) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address']);
    exit;
}

// Check if PHPMailer is available
if (!file_exists('PHPMailer/PHPMailer.php')) {
    // PHPMailer not installed, fall back to basic mail()
    sendWithBasicMail($firstName, $lastName, $email, $phone, $company, $serviceType, $budget, $timeline, $message, $currentWebsite);
} else {
    // Use PHPMailer with SMTP
    sendWithSMTP($firstName, $lastName, $email, $phone, $company, $serviceType, $budget, $timeline, $message, $currentWebsite);
}

/**
 * Send email using basic mail() function
 */
function sendWithBasicMail($firstName, $lastName, $email, $phone, $company, $serviceType, $budget, $timeline, $message, $currentWebsite) {
    $to = 'terry@adamswebdesign.ca';
    $cc = 'terrysadams@hotmail.com';
    $subject = "New Contact Form Submission - Adams Web Design";
    
    $htmlBody = createEmailHTML($firstName, $lastName, $email, $phone, $company, $serviceType, $budget, $timeline, $message, $currentWebsite);
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Adams Web Design <noreply@adamswebdesign.ca>\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Cc: " . $cc . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    $mailSent = mail($to, $subject, $htmlBody, $headers);
    
    if ($mailSent) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully.'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'There was an error sending your message. Please try again or email us directly at terry@adamswebdesign.ca'
        ]);
    }
}

/**
 * Send email using PHPMailer with SMTP
 */
function sendWithSMTP($firstName, $lastName, $email, $phone, $company, $serviceType, $budget, $timeline, $message, $currentWebsite) {
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';
    
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        // SMTP Configuration - UPDATE THESE VALUES FOR YOUR HOSTING
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com';        // Your SMTP server (e.g., smtp.gmail.com, mail.yourdomain.com)
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@example.com';  // Your SMTP username
        $mail->Password = 'your-password';           // Your SMTP password
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;                          // 587 for TLS, 465 for SSL
        
        // Recipients
        $mail->setFrom('noreply@adamswebdesign.ca', 'Adams Web Design');
        $mail->addAddress('terry@adamswebdesign.ca');
        $mail->addCC('terrysadams@hotmail.com');
        $mail->addReplyTo($email, $firstName . ' ' . $lastName);
        
        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission - Adams Web Design';
        $mail->Body = createEmailHTML($firstName, $lastName, $email, $phone, $company, $serviceType, $budget, $timeline, $message, $currentWebsite);
        $mail->AltBody = createEmailText($firstName, $lastName, $email, $phone, $company, $serviceType, $budget, $timeline, $message, $currentWebsite);
        
        $mail->send();
        
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully.'
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'There was an error sending your message. Please try again or email us directly at terry@adamswebdesign.ca',
            'debug' => $mail->ErrorInfo
        ]);
    }
}

/**
 * Create HTML email body
 */
function createEmailHTML($firstName, $lastName, $email, $phone, $company, $serviceType, $budget, $timeline, $message, $currentWebsite) {
    $html = "<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
        .header p { margin: 5px 0 0 0; font-size: 14px; opacity: 0.9; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #e5e7eb; }
        .field:last-child { border-bottom: none; }
        .field-label { font-weight: 600; color: #2c3e50; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
        .field-value { color: #333; font-size: 15px; }
        .message-box { background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #74a8d4; margin-top: 5px; }
        .footer { background: #f8f9fa; padding: 20px 30px; text-align: center; font-size: 12px; color: #6b7280; }
        .timestamp { background: #74a8d4; color: white; padding: 8px 15px; border-radius: 4px; display: inline-block; font-size: 13px; margin-bottom: 20px; }
        a { color: #74a8d4; text-decoration: none; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>🎯 New Contact Form Submission</h1>
            <p>Adams Web Design</p>
        </div>
        
        <div class='content'>
            <div class='timestamp'>📅 " . date('F j, Y') . " at " . date('g:i A T') . "</div>
            
            <div class='field'>
                <div class='field-label'>Name</div>
                <div class='field-value'>" . htmlspecialchars($firstName . " " . $lastName) . "</div>
            </div>
            
            <div class='field'>
                <div class='field-label'>Email Address</div>
                <div class='field-value'><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></div>
            </div>";
    
    if (!empty($phone)) {
        $html .= "<div class='field'><div class='field-label'>Phone Number</div><div class='field-value'><a href='tel:" . htmlspecialchars($phone) . "'>" . htmlspecialchars($phone) . "</a></div></div>";
    }
    
    if (!empty($company)) {
        $html .= "<div class='field'><div class='field-label'>Company/Business</div><div class='field-value'>" . htmlspecialchars($company) . "</div></div>";
    }
    
    $html .= "<div class='field'><div class='field-label'>Service Interested In</div><div class='field-value'>" . htmlspecialchars($serviceType) . "</div></div>";
    
    if (!empty($budget)) {
        $html .= "<div class='field'><div class='field-label'>Estimated Budget</div><div class='field-value'>" . htmlspecialchars($budget) . "</div></div>";
    }
    
    if (!empty($timeline)) {
        $html .= "<div class='field'><div class='field-label'>Desired Timeline</div><div class='field-value'>" . htmlspecialchars($timeline) . "</div></div>";
    }
    
    $html .= "<div class='field'><div class='field-label'>Project Details</div><div class='message-box'>" . nl2br(htmlspecialchars($message)) . "</div></div>";
    
    if (!empty($currentWebsite)) {
        $html .= "<div class='field'><div class='field-label'>Current Website</div><div class='field-value'><a href='" . htmlspecialchars($currentWebsite) . "' target='_blank'>" . htmlspecialchars($currentWebsite) . "</a></div></div>";
    }
    
    $html .= "</div>
        <div class='footer'>
            <p><strong>Adams Web Design</strong></p>
            <p>This email was sent from the contact form on adamswebdesign.ca</p>
        </div>
    </div>
</body>
</html>";
    
    return $html;
}

/**
 * Create plain text email body
 */
function createEmailText($firstName, $lastName, $email, $phone, $company, $serviceType, $budget, $timeline, $message, $currentWebsite) {
    $text = "New Contact Form Submission - Adams Web Design\n";
    $text .= "================================================\n\n";
    $text .= "Date: " . date('F j, Y') . " at " . date('g:i A T') . "\n\n";
    $text .= "Name: " . $firstName . " " . $lastName . "\n";
    $text .= "Email: " . $email . "\n";
    if (!empty($phone)) $text .= "Phone: " . $phone . "\n";
    if (!empty($company)) $text .= "Company: " . $company . "\n";
    $text .= "Service: " . $serviceType . "\n";
    if (!empty($budget)) $text .= "Budget: " . $budget . "\n";
    if (!empty($timeline)) $text .= "Timeline: " . $timeline . "\n";
    $text .= "\nProject Details:\n" . $message . "\n";
    if (!empty($currentWebsite)) $text .= "\nCurrent Website: " . $currentWebsite . "\n";
    
    return $text;
}
?>
