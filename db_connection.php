<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "uzsakymai";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch(PDOException $e) {
        echo "Kilo klaida bandant prisijungti prie duombazes.";
    }
?>