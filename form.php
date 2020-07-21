<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "uzsakymai";

    $name;
    $tel;
    $place;
    $event;
    $amountOfGuests;
    $eventStartDate;
    $eventEndDate;
    $timeOfArrival;
    $notes;
    $food;
    $amountOfSleepingGuests;
    $bathTube;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST["foodOption"])) {
            $food = $_POST["foodOption"];
        } else {
            $food = "Maisto paslauga neuzsakyta";    
        }
        if (isset($_POST["sleep"])) {
            $amountOfSleepingGuests = $_POST["sleep"];
        } else {
            $amountOfSleepingGuests = "Be nakvynes";      
        }
        if (isset($_POST["bathtube"])) {
            $bathTube = "Kubilas uzsakytas";
        } else {
            $bathTube = "Kubilo paslauga neuzsakyta";     
        }
        $name = $_POST["fname"];
        $tel = $_POST["tel"];
        $place = $_POST["place"];
        $event = $_POST["event"];
        $amountOfGuests = $_POST["guestAmount"];
        $eventStartDate = $_POST["dateStart"];
        $eventEndDate = $_POST["dateEnd"];
        $timeOfArrival = $_POST["arrival"];
        $notes = $_POST["notes"];

        try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "INSERT INTO info (Customer, TelNo, LivingPlace, EventType, GuestAmount, EventStart, EventEnd, Arrival, Notes, Food, Acco, BathTube)
            VALUES ('$name', '$tel', '$place', '$event', '$amountOfGuests', '$eventStartDate', '$eventEndDate', '$timeOfArrival', '$notes', '$food', '$amountOfSleepingGuests', '$bathTube')";
            // use exec() because no results are returned
            $conn->exec($sql);
            echo "Įrašas išsaugotas duomenų bazėje. Norėdami kurti naują įrašą, perkraukite naršyklę.";
            } catch(PDOException $e) {
            echo "Įrašas neišsaugotas! Patikrinkite, ar užpildėte visus laukelius!";
            }
            
            $conn = null;
        }  
?>
