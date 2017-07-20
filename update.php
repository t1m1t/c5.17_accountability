<?php

require("mysql_connect.php");

$output = [
    'success'=> false, //we assume we will fail
    'errors'=>[]
];

$query =  "UPDATE `accounts` SET email='test another email', phone='test new phone' WHERE `ID` = 1";

//send the query to the database, store the result of the query into $result
$result = mysqli_query($conn,$query);

if(empty($result)){
    $output['errors']='database error';
}
else{
    $output['data']=[];

    print(mysqli_affected_rows($conn));

    if(mysqli_affected_rows($conn)>0){
        $output['success'] = true;
    }
    else{
        $output['errors']='insert error';
    }
}

