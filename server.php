<?php
// header("Content-Type: image/jpg");
// $image = imagecreatefromstring($blob);

// ob_start(); //You could also just output the $image via header() and bypass this buffer capture.
// imagejpeg($image, null, 80);
// $data = ob_get_contents();
// ob_end_clean();
// echo '<img src="data:image/jpeg;base64,' .  base64_encode($data)  . '" />';

if (!$_POST) {
	die('No Post Variables');
}



/* $data = $_POST['url'];
list($type, $data) = explode(';', $data);
list(, $data)      = explode(',', $data);
$data = base64_decode($data);

mkdir($_SERVER['DOCUMENT_ROOT'] . "/photos");

file_put_contents($_SERVER['DOCUMENT_ROOT'] . "/photos/" . time() . '.jpeg', $data); */

$img = $_POST['url'];
$img = str_replace('data:image/jpeg;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);
//saving
$fileName = 'photo.jpeg';
file_put_contents($fileName, $fileData);
echo "Данные получены:\n";
//print_r($_POST);
print_r($fileName);
die;
