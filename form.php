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
        
        $food = (isset($_POST["foodOption"])) ? $_POST["foodOption"] : "Maisto paslauga neužsakyta";
        $bathTube = (isset($_POST["bathtube"])) ? "Su kubilu" : "Be kubilo"; 
        $name = (!empty($_POST["fname"])) ? $_POST["fname"] : $errors['emptyName'] = "Neįvestas vardas";
        $tel = (!empty($_POST["tel"])) ? $_POST["tel"] : $errors['emptyTel'] = "Neįvestas telefono numeris";
        $place = (!empty($_POST["place"])) ? $_POST["place"] : $errors['emptyPlace'] = "Neįvesta gyvenamoji vieta";
        $event = $_POST["event"];
        $amountOfGuests = (!empty($_POST["guestAmount"])) ? $_POST["guestAmount"] : $errors['emptyGuest'] = "Neįvestas svečių skaičius";
        $eventStartDate = (!empty($_POST["dateStart"])) ? $_POST["dateStart"] : $errors['emptyStart'] = "Nenurodyta pradžios data";
        $eventEndDate = (!empty($_POST["dateEnd"])) ? $_POST["dateEnd"] : $errors['emptyEnd'] = "Nenurodyta pabaigos data";
        $timeOfArrival = (!empty($_POST["arrival"])) ? $_POST["arrival"] : $errors['arrivalTime'] = "Neįvestas atvykimo laikas";
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
            $success["saved"] = "Duomenys įrašyti į duomenų bazę.";
            echo json_encode($success);
            $conn = null;
            } else {
            echo json_encode($errors);
            }
        }  
    
        if (isset($_GET['delete'])) {
            $id = $_GET['delete'];
            $sql = "DELETE FROM info WHERE id=$id";
            $conn->exec($sql);
            header('Location: http://planuoju.lt/#records-container');    
        }
?>
