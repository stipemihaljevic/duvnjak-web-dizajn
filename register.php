<?php include $_SERVER['DOCUMENT_ROOT'] . "/inc/header.php";?><!--ukljucivanje header.php dokumenta-->

<head>
    <title>Registracija</title>
</head><!--naslov-->

<h1>Registracija</h1>

<form action="/" method="POST"><!--forma za registraciju-->
    <input type="text" placeholder="Korisnicko ime" required>
    <input type="email" placeholder="Email Adresa" required>
    <input type="password" placeholder="Lozinka" required>
    <input type="password" placeholder="Potvrda lozinke" required>
    <input type="submit" value="Registriraj se">
</form>

<?php include $_SERVER['DOCUMENT_ROOT'] . "/inc/footer.php";?><!--ukljucivanje footer.php dokumenta-->