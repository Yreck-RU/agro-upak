<?php


ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'utf-8';
$mail->isHTML(true);
$mail->IsSMTP();

$mail->Host       = 'ssl://smtp.yandex.ru';                     //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'seo.eremenko@yandex.ru';                     //SMTP username
$mail->Password   = 'accessisgod19890209';                               //SMTP password
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;

$name = $_POST['name'];
$phone = $_POST['phone'];
$city = $_POST['city'];
$title = $_POST['title'];

$mail->setFrom('seo.eremenko@yandex.ru', 'OPT-PLENKA');   // От кого письмо
$mail->addAddress('ktmduke350@yandex.ru');     // Add a recipient
$mail->addAddress('info@agro-upak.ru');     // Add a recipient
$mail->addAddress('vv@pr.city');     // Add a recipient


$mail->Subject = $title;

if ($title == 'большая форма') {
    $mail->Body = 'Имя: ' . $name . ' <br><br>' . 'Номер телефона:' . ' ' . $phone . ' <br>' . 'Город:' . ' ' .  $city . ' <br>Тип: '. $_POST['_type'].' <br>Ширина: '.$_POST['w']. '<br>Толщина: '. $_POST['h'].' <br>Email: '.$_POST['email'] .'<br><br>';
}

if ($title == 'большая форма') {
    $mail->Body = 'Имя: ' . $name . ' <br><br>' . 'Номер телефона:' . ' ' . $phone . ' <br>' . 'Город:' . ' ' .  $city . ' <br>Тип: '. $_POST['_type'].' <br>Ширина: '.$_POST['w']. '<br>Толщина: '. $_POST['h'].' <br>Email: '.$_POST['email'] .'<br><br>';
}




if ($title == 'Форма бесплатный образец') {
    $mail->Body = 'Имя: ' . $name . ' <br><br>' . 'Номер телефона:' . ' ' . $phone . ' <br><br>' . 'Город:' . ' ' .  $city . ' <br><br>';
}

if ($title == 'Форма продукций') {
    $mail->Body = 'Имя: ' . $name . ' <br><br>' . 'Номер телефона:' . ' ' . $phone;
}

if ($title == 'Квиз Опрос') {
    $v = '';
    $i = 0;
    $l = array('Форма собственности','Вы производитель или торговая организация?','Какую продукцию вы производите/торговую марку','Какую пленку используете','Объем используемой продукции','Присутствует ли у Вас сезонность в использовании пленки','От куда вы о нас узнали?','Форма','ФИО','Телефон','EMAIL');

    foreach ($_POST as $key => $val ){
        if($val != '' & $key != 'city'){
        if($key == 'checkbox1'){
            $v .= "Форма собственности: $val <br>\n";
        }
        if($key == 'checkbox2'){
            $v .= "Форма собственности: $val <br>\n";
        }
        if($key == 'checkbox3'){
            $v .= "Форма собственности: $val <br>\n";
        }
        if($key == 'checkbox4'){
            $v .= "Форма собственности: $val <br>\n";
        }
        if($key == 'checkbox5'){
            $v .= "Форма собственности: $val <br>\n";
        }
        if($key == 'checkbox6'){
            $v .= "Форма собственности: $val <br>\n";
        }
        if($key == 'checkbox7'){
            $v .= "Вы производитель или торговая организация?: $val <br>\n";
        }
        if($key == 'checkbox8'){
            $v .= "Вы производитель или торговая организация?: $val <br>\n";
        }
        if($key == 'inputblock2'){
            $v .= "Вы производитель или торговая организация?: $val <br>\n";
        }
        if($key == 'inputblock3'){
            $v .= "Какую продукцию вы производите/торговую марку: $val <br>\n";
        }
        if($key == 'checkbox9'){
            $v .= "Какую пленку используете: $val <br>\n";
        }
        if($key == 'checkbox10'){
            $v .= "Какую пленку используете: $val <br>\n";
        }
        if($key == 'checkbox11'){
            $v .= "Какую пленку используете: $val <br>\n";
        }
        if($key == 'checkbox12'){
            $v .= "Какую пленку используете: $val <br>\n";
        }
        if($key == 'checkbox13'){
            $v .= "Какую пленку используете: $val <br>\n";
        }
        if($key == 'checkbox14'){
            $v .= "Объем используемой продукции: $val <br>\n";
        }
        if($key == 'checkbox15'){
            $v .= "Объем используемой продукции: $val <br>\n";
        }
        if($key == 'checkbox16'){
            $v .= "Объем используемой продукции: $val <br>\n";
        }
        if($key == 'checkbox17'){
            $v .= "Объем используемой продукции: $val <br>\n";
        }
        if($key == 'checkbox18'){
            $v .= "Объем используемой продукции: $val <br>\n";
        }
        if($key == 'checkbox19'){
            $v .= "Объем используемой продукции: $val <br>\n";
        }
        if($key == 'checkbox20'){
            $v .= "Присутствует ли у Вас сезонность в использовании пленки: $val <br>\n";
        }
        if($key == 'checkbox21'){
            $v .= "Присутствует ли у Вас сезонность в использовании пленки: $val <br>\n";
        }
        if($key == 'checkbox22'){
            $v .= "Присутствует ли у Вас сезонность в использовании пленки: $val <br>\n";
        }
        if($key == 'checkbox23'){
            $v .= "Присутствует ли у Вас сезонность в использовании пленки: $val <br>\n";
        }
        if($key == 'checkbox24'){
            $v .= "Присутствует ли у Вас сезонность в использовании пленки: $val <br>\n";
        }
        if($key == 'checkbox25'){
            $v .= "Откуда вы о нас узнали: $val <br>\n";
        }
        if($key == 'checkbox26'){
            $v .= "Откуда вы о нас узнали: $val <br>\n";
        }
        if($key == 'checkbox27'){
            $v .= "Откуда вы о нас узнали: $val <br>\n";
        }
        if($key == 'checkbox28'){
            $v .= "Откуда вы о нас узнали: $val <br>\n";
        }
        if($key == 'checkbox29'){
            $v .= "Откуда вы о нас узнали: $val <br>\n";
        }
        if($key == 'checkbox30'){
            $v .= "Откуда вы о нас узнали: $val <br>\n";
        }
        if($key == 'nameq'){
            $v .= "ФИО: $val <br>\n";
        }
        if($key == 'phoneq'){
            $v .= "Телефон: $val <br>\n";
        }
        if($key == 'emailq'){
            $v .= "Почта: $val <br>\n";
        }
    }

        // if($val != '' & $key != 'city'){
        //     $v .= "Вопрос $i:  ---- $val <br>\n";
        //     $i++;
        // }
    }
    $mail->Body = $v;
}


if (!$mail->send()) {
    echo false;
} else {
    echo true;
}



