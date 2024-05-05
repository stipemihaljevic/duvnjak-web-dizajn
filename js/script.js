let currentImageIndex = 0; // Varijabla koja prati trenutni indeks slike u galeriji

const sliderImage = document.getElementById("sliderImage"); // Dohvaća element s ID-om "sliderImage"

const articleImageFolders = { /* Objekt koji sadrži mape slika za svaki članak */
  "1.php": { folder: "hummer-h3t-2009", count: 9 },
  "2.php": { folder: "volkswagen-golf-2015", count: 9 },
  "3.php": { folder: "jeep-cherokee-2016", count: 8 },
  "4.php": { folder: "audi-a4-2019", count: 10 },
  "5.php": { folder: "honda-accord-2019", count: 8 },
  "6.php": { folder: "bmw-5-540i-2018", count: 8 },
  "7.php": { folder: "porsche-cayenne-2024", count: 5 },
  "8.php": { folder: "toyota-4runner-2007", count: 8 }
};

const currentArticleURL = window.location.href; // Dohvaća URL trenutne stranice
const articleKey = currentArticleURL.substring(currentArticleURL.lastIndexOf("/") + 1); // Dohvaća ključ članka iz URL-a

const currentArticleFolder = articleImageFolders[articleKey].folder; // Dohvaća trenutnu mapu slika za članak
const imageCount = articleImageFolders[articleKey].count; // Dohvaća broj slika za trenutni članak
const images = []; // Inicijalizacija niza za pohranu putanja do slika
for (let i = 1; i <= imageCount; i++) { // Petlja za generiranje putanja do slika za trenutni članak
  images.push(`/css/img/artikli/${currentArticleFolder}/${i}.jpg`); // Dodaje putanju do slike u niz
}

function prevImage() { // Funkcija za prikaz prethodne slike u galeriji
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Računa indeks prethodne slike u galeriji
  updateImage(); // Ažurira prikaz slike
}

function nextImage() { // Funkcija za prikaz sljedeće slike u galeriji
  currentImageIndex = (currentImageIndex + 1) % images.length; // Računa indeks sljedeće slike u galeriji
  updateImage(); // Ažurira prikaz slike
}

function updateImage() { // Funkcija za ažuriranje prikaza slike u galeriji
  sliderImage.src = images[currentImageIndex]; // Postavlja izvor slike na trenutnu sliku u galeriji
}

updateImage(); // Poziva se funkcija za inicijalno prikazivanje slike pri učitavanju stranice
