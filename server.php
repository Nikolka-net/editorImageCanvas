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
