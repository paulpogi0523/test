<?php
// Receive data sent by client
$user_ip = $_POST['user_ip'];
$city = $_POST['city'];
$region = $_POST['region'];
$country = $_POST['country'];
$time = $_POST['time'];

// Construct data string
$data_string = "User IP: $user_ip\n";
$data_string .= "City: $city\n";
$data_string .= "Region: $region\n";
$data_string .= "Country: $country\n";
$data_string .= "Time: $time\n\n";

// Open or create data file for appending
$file_handle = fopen('user_data.txt', 'a');

// Write data string to file
fwrite($file_handle, $data_string);

// Close file handle
fclose($file_handle);
?>