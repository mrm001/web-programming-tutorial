<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="refresh" content="0;url=../contacte.html" />
</head>

<body>
    <?php
        $contentString = file_get_contents("contacte.json");
        $contacte = json_decode($contentString, true);
        $id = 5;
        $newPerson = array(
            "id" => 7,
            "firstName" => $_GET["firstName"],
            "lastName" => $_GET["lastName"],
            "phone" => $_GET["phone"],
        );
        $contacte[] = $newPerson;
        $contentString = json_encode($contacte);
        file_put_contents("contacte.json", $contentString);
        header('Location: ../contacte.html')
    ?>

    contact added .....
<!--    <script>-->
<!--        var parameters = location.search.substr(1);-->
<!--        var paramArray = parameters.split('&');-->
<!--        console.info(paramArray);-->
<!--        document.getElementById('contact-id').innerHTML = paramArray.join('; <br>') + ';'-->
<!--        //        document.getElementById('contact-id').innerHTML= paramArray.replace(/&/ig, '; <br>')-->
<!--    </script>-->
</body>

</html>