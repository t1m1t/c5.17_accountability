<?php
require("mysql_connect.php");


$output = [
    'success'=> false, //we assume we will fail
    'errors'=>[]
];

$query = sprintf("INSERT INTO accounts SET first_name='%s', last_name='%s', email='%s', phone='%s'", $_POST['fname'], $_POST['lname'], $_POST['email'], $_POST['phone']);

$result = mysqli_query($conn, $query);

if(empty($result)){
    array_push($output["errors"], 'database error');
}
else{
    if(mysqli_affected_rows($conn) === 1){
        $output['success'] = true;
    }
    else{
        array_push($output["errors"], 'insert error');
    }
}

if($output['success'] === false){
    $output['errors'] = mysqli_error($conn);
}
$outputJSON = json_encode($output);
echo($outputJSON);
exit();

?>