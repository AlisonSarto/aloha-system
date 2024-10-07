<?php

	include $_SERVER['DOCUMENT_ROOT'].'/server/db/connect.php';

	if ($_SERVER['REQUEST_METHOD'] === 'POST') {

		if (isset($_POST['email']) && isset($_POST['senha'])) {
			
			$email = $_POST['email'];
			if (strpos($email, '@aloha.com') === false) {
				$email .= '@aloha.com';
				$email = strtolower($email);
			}
			$senha = $_POST['senha'];

			$sql = "SELECT * FROM usuarios";
			$res = $conn->query($sql);

			while ($db = $res->fetch_assoc()) {

				if ($email !== $db['email'] || $senha !== $db['senha']) {
					continue;
				}

				$expireTime = 604800;
				session_set_cookie_params($expireTime);
				session_start();
				session_unset();
				
				$_SESSION['id'] = $db['id'];
				$_SESSION['email'] = $db['email'];
				$_SESSION['nome'] = $db['nome'];
				$_SESSION['cargo'] = json_decode($db['cargo'], true);

				break;
			}

			if (isset($_SESSION['email'])) {
				send([
					'status' => 200,
					'message' => 'Login efetuado com sucesso'
				]);
			} else {
				send([
					'status' => 401,
					'message' => 'Email ou senha incorretos'
				]);
			}
			
		} else {
			send([
				'status' => 400,
				'message' => 'Email ou senha não informados'
			]);
		}
	} else {
		send([
			'status' => 405,
			'message' => 'Método não permitido'
		]);
	}
	
?>