<?php
    include_once 'db_connection.php';

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

    $errors = array();
    $success = array();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $food = (isset($_POST["foodOption"])) ? $_POST["foodOption"] : "Maisto paslauga neuzsakyta";
        $bathTube = (isset($_POST["bathtube"])) ? "Su kubilu" : "Be kubilo"; 
        $name = (!empty($_POST["fname"])) ? $_POST["fname"] : $errors['emptyName'] = "Neivestas vardas";
        $tel = (!empty($_POST["tel"])) ? $_POST["tel"] : $errors['emptyTel'] = "Neivestas telefono numeris";
        $place = (!empty($_POST["place"])) ? $_POST["place"] : $errors['emptyPlace'] = "Neivesta gyvenamoji vieta";
        $event = $_POST["event"];
        $amountOfGuests = (!empty($_POST["guestAmount"])) ? $_POST["guestAmount"] : $errors['emptyGuest'] = "Neivestas sveciu skaicius";
        $eventStartDate = (!empty($_POST["dateStart"])) ? $_POST["dateStart"] : $errors['emptyStart'] = "Nenurodyta pradzios datos";
        $eventEndDate = (!empty($_POST["dateEnd"])) ? $_POST["dateEnd"] : $errors['emptyEnd'] = "Nenurodyta pabaigos datos";
        $timeOfArrival = (!empty($_POST["arrival"])) ? $_POST["arrival"] : $errors['arrivalTime'] = "Neivestas atvykimo laikas";
        $notes = (!empty($_POST["notes"])) ? $_POST["notes"] : "Papildomų pastabų nėra";

        if (!isset($_POST["accommodation"])) {
            $amountOfSleepingGuests = $amountOfGuests;
        } else if (isset($_POST["accommodation"]) && !empty($_POST["sleepingGuests"])) {
            $amountOfSleepingGuests = $_POST["sleepingGuests"]; 
        } else {
            $amountOfSleepingGuests = "Neįvestas miegančių žmonių skaičius";    
        }

        if (empty($errors)) {

            $sql = "INSERT INTO info (Customer, TelNo, LivingPlace, EventType, GuestAmount, EventStart, EventEnd, Arrival, Notes, Food, Acco, BathTube)
            VALUES ('$name', '$tel', '$place', '$event', '$amountOfGuests', '$eventStartDate', '$eventEndDate', '$timeOfArrival', '$notes', '$food', '$amountOfSleepingGuests', '$bathTube')";
            $conn->exec($sql);
            $success["saved"] = "Duomenys irasyti i duomenu baze.";
            echo json_encode($success);
            $conn = null;
            } else {
            echo json_encode($errors);
            }
        }  
?>
