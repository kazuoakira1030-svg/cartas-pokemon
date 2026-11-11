<?php
/**
 * Pokémon TCG — Booster de 11 Cartas & Carta Especial Umbreon & Sylveon ex
 * Compatível com qualquer servidor PHP (Apache, Nginx, XAMPP, Laragon, php -S)
 * Você pode personalizar os valores padrão abaixo ou via URL:
 * Exemplo: index.php?para=Mariana&local=Jantar+Especial
 */
$personName    = isset($_GET['para']) ? htmlspecialchars($_GET['para'], ENT_QUOTES, 'UTF-8') : 'Você';
$questionTitle = isset($_GET['pergunta']) ? htmlspecialchars($_GET['pergunta'], ENT_QUOTES, 'UTF-8') : 'Aceitas sair comigo?';
$customMessage = isset($_GET['msg']) ? htmlspecialchars($_GET['msg'], ENT_QUOTES, 'UTF-8') : 'Assim como a Lua do Umbreon e os laços da Sylveon, a nossa combinação é lendária! Vamos viver um encontro especial juntos?';
$datePlace     = isset($_GET['local']) ? htmlspecialchars($_GET['local'], ENT_QUOTES, 'UTF-8') : 'Jantar especial + Passeio sob as estrelas ✨';
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokémon TCG • Simulador de Abertura de Booster</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Plus+Jakarta+Sans:wght@500;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script>
    window.INITIAL_INVITE_CONFIG = <?php echo json_encode([
      'personName'    => $personName,
      'questionTitle' => $questionTitle,
      'customMessage' => $customMessage,
      'datePlace'     => $datePlace,
    ], JSON_UNESCAPED_UNICODE); ?>;
  </script>
</head>
<body>
<?php
// Inclui a estrutura principal do aplicativo (compartilhada com index.html)
$htmlContent = file_get_contents(__DIR__ . '/index.html');
if ($htmlContent !== false && preg_match('/<body[^>]*>(.*)<\/body>/is', $htmlContent, $matches)) {
    echo $matches[1];
}
?>
</body>
</html>
