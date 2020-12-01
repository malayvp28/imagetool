<?php
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST');


$con= mysqli_connect("localhost","root","","mini_data") or die("Connection Failed");

$sql="CREATE TABLE user (
    f_name varchar(255),
    email varchar(255) PRIMARY KEY,
    password varchar(255)
);";
$result=mysqli_query($con,$sql) ;

if($result)
{
	echo "setup successful !!";
}
else
	echo "not successful";


	

?>