<?php

// $_POST = json_decode(file_get_contents("php://input"), true);

if (!$_POST) {
	die('No Post Variables');
}

$data = $_POST['dataURL'];

list($type, $data) = explode(';', $data);
list(, $data)      = explode(',', $data);

$data = str_replace('data:image/jpeg;base64,', '', $data);
$data = str_replace(' ', '+', $data);
$data = base64_decode($data);

// mkdir($_SERVER['DOCUMENT_ROOT'] . "/photos");

if (!is_dir('./img')) { // если img не сущ. создаём
	mkdir('./img');
}

// file_put_contents($_SERVER['DOCUMENT_ROOT'] . "./img/" . time() . '.jpeg', $data);
$fileName = file_put_contents('./img/' . uniqid() . '.jpeg', $data);


/* Другие функции */

// header("Content-Type: image/jpeg");
/* $image = imagecreatefromstring($blob);

ob_start(); //You could also just output the $image via header() and bypass this buffer capture.
imagejpeg($image, null, 80);
$data = ob_get_contents();
ob_end_clean();
echo '<img src="data:image/jpeg;base64,' .  base64_encode($data)  . '" />';
 */
// if ((isset($_POST['image'])) && (!empty($_POST["image"]))) {
// 	// присвоить $result['name'] значение $_POST['name']
// 	$result['image'] = $_POST['image'];
// 	echo $result;
// } else {
// 	// иначе, $result['name'] присвоить указанную строку
// 	$result['image'] = 'Вы не ввели поле image!';
// }


/* $img = $_POST['dataURL'];
$img = str_replace('data:image/jpeg;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);
//saving
// $filePhoto = 'photo.jpeg';
// $fileExt = explode('/', $fileData); // превращ. массив в строку
$fileName = uniqid() . '.' . $fileData; // генерация нового имени

if (!is_dir('./img')) { // если img не сущ. создаём
	mkdir('./img');
}

move_uploaded_file($fileName, './img/' . $fileData);
file_put_contents($fileName, './img/' . $fileData); */


// file_put_contents($filePhoto, $fileData);


//echo "Данные получены:\n"; */
// print_r($_POST);
// echo $_POST['dataURL'];
// die;


/* код с админки */
// $uploadFile = $_FILES[$filePhoto][$fileData];

/* if (file_exists($uploadFile) && (is_uploaded_file($uploadFile))) { // если файл есть
	$fileExt = explode('/', $_FILES['image']['type'])[1]; // превращ. массив в строку
	$fileName = uniqid() . '.' . $fileExt; // генерация нового имени

	if (!is_dir('../../img')) { // если img не сущ. создаём
		mkdir('../../img');
	}

	move_uploaded_file($uploadFile, '../../img/' . $fileName);
	// копирование загруж. файлов ($_FILES['images']) в директорию

	echo json_encode(array('src' => $fileName)); // отправл. клиенту для подмены параметра src у img, он будет указыв. на новый img

} */


/* end другие функции */
