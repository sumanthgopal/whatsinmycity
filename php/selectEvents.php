<?php
$server = "localhost";
$username = "root";
$pass = "";
$dbName = "whatsinmycity";
$conn = new mysqli($server,$username,$pass,$dbName);
$data = json_decode(file_get_contents("php://input"));
$sql = "SELECT * FROM $data->searchValue WHERE upper(CITY) IN ('$data->city')";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0";
}
$conn->close();
?>
