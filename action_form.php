<?php

if (isset($_POST["theme"]) && isset($_POST["e-mail"]) && isset($_POST["name"]) &&
    isset($_POST["phone"]) && isset($_POST["question"]))
{

    $theme = $_POST["theme"];
    $email = $_POST["e-mail"];
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $question = $_POST["question"];

    $mail_to = "resume@ooo-modern.ru";
    $mail_theme = "Questions from DreamCreditMaker: ".$theme;
    $mail_message = "<b>Email:</b> ".$email."<br>\n".
                    "<b>Name:</b>: ".$name."<br>\n".
                    "<b>Question:</b> ".$question."<br>\n".
                    "<b>Phone Number:</b> ".$phone;

    mail($mail_to, $mail_theme, $mail_message);
}

?>