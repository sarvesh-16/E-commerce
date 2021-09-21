<?php
    $con = mysqli_connect("localhost", "root", "S@rvesh16", "ecommerce")
    or die(mysqli_error($con));
    if(!isset($_SESSION)){
      session_start();
    }
?>
