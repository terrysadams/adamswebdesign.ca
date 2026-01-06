<?php
// Simple email test script
// Visit this page in your browser to test if PHP mail is working

$to = 'terry@adamswebdesign.ca';
$subject = 'Test Email from Adams Web Design';
$message = 'This is a test email sent at ' . date('Y-m-d H:i:s');
$headers = 'From: noreply@adamswebdesign.ca' . "\r\n" .
           'Reply-To: noreply@adamswebdesign.ca' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

$result = mail($to, $subject, $message, $headers);

?>
<!DOCTYPE html>
<html>
<head>
    <title>Email Test</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background: #f4f4f4;
        }
        .box {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .success { color: #22c55e; }
        .error { color: #ef4444; }
        h1 { color: #2c3e50; }
        .info { background: #f0f9ff; padding: 15px; border-radius: 5px; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="box">
        <h1>Email Test Results</h1>
        
        <?php if ($result): ?>
            <p class="success">✅ Email function returned TRUE - email may have been sent</p>
            <p>Check your inbox at: <strong><?php echo $to; ?></strong></p>
            <p><em>Note: Even if this shows success, the email might still not arrive due to server configuration, spam filters, or email provider settings.</em></p>
        <?php else: ?>
            <p class="error">❌ Email function returned FALSE - email was NOT sent</p>
            <p>This means PHP mail() function failed on your server.</p>
        <?php endif; ?>
        
        <div class="info">
            <h3>Server Information:</h3>
            <p><strong>PHP Version:</strong> <?php echo phpversion(); ?></p>
            <p><strong>Server:</strong> <?php echo $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'; ?></p>
            <p><strong>Test sent to:</strong> <?php echo $to; ?></p>
            <p><strong>Time:</strong> <?php echo date('Y-m-d H:i:s'); ?></p>
        </div>
        
        <div class="info" style="margin-top: 20px;">
            <h3>Common Issues & Solutions:</h3>
            <ol>
                <li><strong>Check Spam Folder</strong> - Test emails often go to spam</li>
                <li><strong>Server Configuration</strong> - Some hosts disable mail() or require SMTP</li>
                <li><strong>From Address</strong> - Some servers require the From address to match your domain</li>
                <li><strong>DNS Records</strong> - SPF/DKIM records may be needed</li>
            </ol>
        </div>
        
        <div class="info" style="margin-top: 20px;">
            <h3>Next Steps:</h3>
            <ul>
                <li>Wait 5-10 minutes and check your email (including spam)</li>
                <li>If no email arrives, contact your hosting provider about PHP mail configuration</li>
                <li>Alternative: I can create a version using SMTP or an email service like SendGrid</li>
            </ul>
        </div>
    </div>
</body>
</html>
