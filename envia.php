<?php


    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $celular = addslashes($_POST['celular']);
    $texto = addslashes($_POST['texto']);


    $destinatario = "lucasreppetto010@gmail.com";
    $assunto = "portfolio";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Celular: ".$celular."\n"."Texto: ".$texto;

    $cabeca = "From: lucasreppetto100@gmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();


    if(mail($destinatario, $assunto, $corpo, $cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o E-mail!");
    }

?>