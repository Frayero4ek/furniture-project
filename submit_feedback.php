<?php
$name = !empty($_POST['user_name']) ? $_POST['user_name'] : 'Не вказано';
$email = !empty($_POST['user_email']) ? $_POST['user_email'] : 'Не вказано';
$feedback = !empty($_POST['user_feedback']) ? $_POST['user_feedback'] : 'Не вказано';
$token = "7261858203:AAG45g1bfGD8Qi5a6-dlwQJMfwBP8Hrt4fE";
$chat_id = "-4563441241";

$arr = array(
    'Ім\'я користувача: ' => $name,
    'Email: ' => $email,
    'Відгук: ' => $feedback,
);

$txt = "";
foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
}

$url = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}";

$response = file_get_contents($url);

if ($response !== false) {
    $responseData = json_decode($response, true);
    if ($responseData && $responseData["ok"]) {
        header('Location: index.html');
    } else {
        echo "Error: " . ($responseData["description"] ?? "Unknown error");
    }
} else {
    echo "Error: Не вдалося з'єднатися з сервером Telegram.";
}
?>
