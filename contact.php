<?php
	if(isset($_POST['ContactButton'])){

		$url = "https://www.google.com/recaptcha/api/siteverify";
		$privatekey = ""; //google reCaptcha private key goes here.

		$response = file_get_contents($url."?secret=".$privatekey."&response=".$_POST['g-recaptcha-response']."&remoteip=".$_SERVER['REMOTE_ADDR']);

		$data = json_decode($response);

		if(isset($data->success) AND $data->success==true){

			header('Location: thanks.html');

			$name = $_POST['name'];
			$email = $_POST['email'];
			$message = $_POST['message'];

			if($name != "" && $email != "" && $message != ""){
				$to = ''; //My email
				$subject = 'New Email';
				$body = '<html>
				 			<body>
				 				<h3>Feedback</h3>
				 				<p> Name: '.$name.'</p>
				 				<p> Email: '.$email.'</p>
				 				<br/>
				 				<p> Message:<br/>'.$message.'</p>
				 			</body>
				 		</html>';

				$headers  ="From:".$name."<".$email.">\r\n";
				$headers .="reply-To:".$email."\r\n";
				$headers .="NINE-Version: 1.0\r\n";
				$headers .="Content-type: text/html; charset=utf-8";

				//sending process
				mail($to, $subject, $body, $headers);
			}
			
		}else{

			header('Location: contact.php?CaptchaFail=True');
			
		}	
    }
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Contact</title>
	<link href="style.css" rel="stylesheet"/>
	<script type="text/javascript" src="scripts/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="scripts/contactUs.js"></script>
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>

<body>
	<div id="contactWrapper">
	<header>
		<h1 id="headerTitle">SDC DESIGNS</h1>

		<ul>
  			<li><a class="active" href="contact.php">Contact</a></li>
  			<li><a href="tuner.html">Guitar Tuner</a></li>
  			<li><a href="index.html">Home</a></li>
		</ul>

	</header>

	

	<div id="formSub" class="hidden">
		<h1 id="contactUs">Please Get In Contact!</h1>
		<?php if(isset($_GET['CaptchaFail'])){ ?>
		<div id="error">Captcha Failed - Please try again!</div>
		<?php } ?>
		<form action="" method="POST">
			<input type="text" name="name" placeholder="Your Name" autocomplete=off required><br/>
			<input type="text" name="email" placeholder="Your Email" autocomplete=off required><br/>
			<textarea id="textArea" type="text" name="message" cols="40" rows="8" placeholder="Enter Message Here" required></textarea><br/>

      		<div class="g-recaptcha" data-sitekey="6LcGQC8UAAAAANelFDKw39qWj4Wh2UGyoSQrKJgT"></div>

			<button name="ContactButton" id="subButton" type="submit">Submit</button>
		</form>

	</div>	
	</div>
</body>

</html>