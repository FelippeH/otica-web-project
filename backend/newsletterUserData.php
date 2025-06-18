<?php
header("Access-Control-Allow-Origin: http://localhost:3000/");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

include 'config.php';

$name = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';

if (empty($name) || empty($email)) {
    echo "Nome e email são obrigatórios!";
    exit;
}

try {
$conn = new PDO("mysql:host=localhost;dbname=newsletter_aurora", "root", "");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$stmt = $conn->prepare("INSERT INTO users (nome, email) VALUES (:nome, :email)");

$stmt->bindParam(':nome', $name);
$stmt->bindParam(':email', $email);

if ($stmt->execute()) {
    echo json_encode(["status" => "ok", "mensagem" => "Cadastro feito com sucesso!"]);
} else {
    echo json_encode(["status" => "erro", "mensagem" => "Erro ao inserir: " . $stmt->errorInfo()[2] 
]);
}

} catch (PDOExcepction $e) {
    echo "Erro: " . $e->getMessage();
}
?>