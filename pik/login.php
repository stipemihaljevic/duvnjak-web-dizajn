<?php include $_SERVER['DOCUMENT_ROOT'] . "/inc/header.php";?><!--ukljucivanje header.php dokumenta-->

<head>
    <title>Prijava</title>
</head><!--naslov-->

<h1>Prijava</h1>

<form action="/" method="POST"><!--forma za prijavu-->
    <input type="text" placeholder="Korisnicko ime" required>
    <input type="email" placeholder="Email Adresa" required>
    <input type="password" placeholder="Lozinka" required>
    <input type="submit" value="Prijavi se">
</form>

<?php include $_SERVER['DOCUMENT_ROOT'] . "/inc/footer.php";?><!--ukljucivanje footer.php dokumenta-->