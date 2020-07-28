<?php
    include_once 'db_connection.php';

    $sql = "SELECT * FROM info;";

    foreach ($conn->query($sql) as $row) {
        echo "<tr>".
                "<td>" . $row['Customer'] . "</td>" .
                "<td>" . $row['TelNo'] . "</td>" .
                "<td>" . $row['LivingPlace'] . "</td>" .
                "<td>" . $row['EventType'] . "</td>" .
                "<td>" . $row['GuestAmount'] . "</td>" .
                "<td>" . $row['EventStart'] . "</td>" .
                "<td>" . $row['EventEnd'] . "</td>" .
                "<td>" . $row['Arrival'] . "</td>" .
                "<td>" . $row['Notes'] . "</td>" .
                "<td>" . $row['Food'] . "</td>" .
                "<td>" . $row['Acco'] . "</td>" .
                "<td>" . $row['BathTube'] . "</td>" .
            "</tr>";
    }
    $conn = null;
?>