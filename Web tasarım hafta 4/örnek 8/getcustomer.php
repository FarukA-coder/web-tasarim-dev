<?php
// Müşteri verilerini dizi olarak tanımlıyoruz
$customers = array(
    "ALFKI" => array(
        "name" => "Alfreds Futterkiste",
        "contact" => "Maria Anders",
        "city" => "Berlin"
    ),
    "NORTS" => array(
        "name" => "North/South",
        "contact" => "Simon Crowther",
        "city" => "London"
    ),
    "WOLZA" => array(
        "name" => "Wolski Zajazd",
        "contact" => "Zbyszek Piestrzeniewicz",
        "city" => "Warsaw"
    )
);

// GET ile gelen müşteri kodunu al
$q = $_GET['q'];

// Eğer müşteri varsa tablo olarak göster
if(isset($customers[$q])) {
    echo "<table>
    <tr><th>Name</th><th>Contact</th><th>City</th></tr>
    <tr>
        <td>".$customers[$q]['name']."</td>
        <td>".$customers[$q]['contact']."</td>
        <td>".$customers[$q]['city']."</td>
    </tr>
    </table>";
} else {
    echo "Müşteri bulunamadı!";
}
?>
