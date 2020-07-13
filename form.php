<?php
    $name = '';
    $tel = '';
    $place = '';
    $event = "";
    $amountOfGuests = '';
    $eventStartDate = '';
    $eventEndDate = '';
    $timeOfArrival = '';
    $notes = '';
    $meal = '';
    $amountOfSleepingGuests = '';
    $bathtube = '';

    $data = [];

    if (isset($_POST["submit"])) {
        $name = $_POST["fname"];
        $tel = $_POST["tel"];
        $place = $_POST["place"];
        $amountOfGuests = $_POST["guestAmount"];
        $eventStartDate = $_POST["dateStart"];
        $eventEndDate = $_POST["dateEnd"];
        $timeOfArrival = $_POST["arrival"];
        $notes = $_POST["notes"];

        if (isset($_POST["event"])) {
            $event = $_POST["event"];
        }
        if (empty($_POST["foodOption"])) {
            $meal = 'Maisto ruošimo paslauga neužsakyta';
        } else {
            $meal = "Patiekalai: " . $_POST["foodOption"];
        } 
        if (empty($_POST["sleep"])) {
            $amountOfSleepingGuests = 'Be nakvynės';
        } else {
            $amountOfSleepingGuests = "Miegančių asmenų skaičius: " . $_POST["sleep"];    
        } 
        if (isset($_POST["bathtube"])) {
            $bathtube = "Su Kubilu";
        } else {
            $bathtube = "Be Kubilo";
        }
    }

    echo $event . "<br>" . $bathtube . "<br>".  $meal . "<br>". $amountOfSleepingGuests; 
?>
