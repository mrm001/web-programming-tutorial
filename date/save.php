<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="refresh" content="0;url=../contacte.html" />
</head>

<body>
    <?php
        function getNextId(){
            $idString = file_get_contents("last.contact.id");
            $id = intval($idString);
            $id ++;
            file_put_contents("last.contact.id", $id);
            return $id;
        }
        $contentString = file_get_contents("contacte.json");
        $contacte = json_decode($contentString, true);
        if (isset($_GET['id'])){
        $id = $_GET['id'];
            for($i = 0; $i<count($contacte); $i++){
            $contact= &$contacte[$i];
            if($contact['id'] ==$id){
                $contact['firstName']=$_GET['firstName'];
                $contact['lastName']=$_GET['lastName'];
                $contact['phone']=$_GET['phone'];
            }
            }
        } else{
            $id = getNextId();


            $newPerson = array(
                "id" => $id,
                "firstName" => $_GET["firstName"],
                "lastName" => $_GET["lastName"],
                "phone" => $_GET["phone"],
            );
            $contacte[] = $newPerson;
        }


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