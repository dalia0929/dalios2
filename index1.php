<!DOCTYPE html>
<html>
<head>
	<title>LABAS php</title>
</head>
<body>
<?php


echo "labas";

$kintamasis;

$a = 5;
$b = 10;
$c = $a + $b;

echo $c;


$array = [10,20,30,40]; //masyvas
$object = [ // objektai
	'name' => 'John',
	'surname' => 'ghjk',
	'age' => 55,
];

	

?>

<div class="kvadratas">
	SKAICIAUS <?php echo $a; ?>
	kvadratas yra <?php echo $a*$a; ?>

	skaiciu suma <?= $c; ?> 

<?php
	if($a < $b){
		echo 'a yra maziau uz b';
	}

	while($a < $b){
	$a++;
	echo $a;
	}
?>

</div>

<!-- <?php

	if(isset($_POST['vardas'])){
	$vardas = $_POST['vardas'];
	$parol = $_POST ['parol'];
	var_dump($_POST);
}
?> -->

<?php

	if(isset($_POST)){
	$vardas = $_POST['vardas'];
	$parol = $_POST ['parol'];
	$amzius = $_POST ['amzius'];

} else{
	$vardas = "";
	$parol = "";	
}
?>


<h1> LABAS DAR KARTA</h1>

<?php if($vardas ==""): ?> <!-- //jeigu langelis tuscias, rodau forma -->

<form action="index.php" method="POST">

	<input type="txt" name="vardas" value="<?=$vardas; ?>">
	<input type="txt" name="parol" value="<?=$parol; ?>">
	<input type="txt" name="amzius" value="<?=$amzius; ?>">
	<input type="submit">

</form>

<?php else: ?>
	<h2> tu gimei,<?= 2016 - $amzius; ?></h2>
<?php endif; ?>	


</body>
</html>


<!-- php -S localhost:8000 -f index.php  --><!--  ivesti tik i terminala -->

