<?php
    include_once 'db_connection.php';

    $sql = "SELECT * FROM info;";

    foreach ($conn->query($sql) as $row) {
        echo "<div class='record'>" . "<ul>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-user'></i></div>" . $row['Customer'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-mobile-alt'></i></div>" . $row['TelNo'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-map-marker-alt'></i></div>" .$row['LivingPlace'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-wine-glass-alt'></i></div>" .$row['EventType'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-users'></i></div>" .$row['GuestAmount'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='far fa-calendar-alt'></i></div>" .$row['EventStart'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='far fa-calendar-alt'></i></div>" .$row['EventEnd'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-user-clock'></i></div>" . $row['Arrival'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-exclamation'></i></div>" .$row['Notes'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-utensils'></i></div>" .$row['Food'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-bed'></i></div>" .$row['Acco'] . "</li>" .
                "<li>" . "<div class='record-icon'><i class='fas fa-hot-tub'></i></div>" .$row['BathTube'] . "</li>" . "</ul>" .
            "</div>";
    }
    $conn = null;
?>