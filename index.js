const memes = [
  "https://i.pinimg.com/originals/61/2b/ff/612bff8412e03dc3c84ea5aabe743d51.jpg",
  "https://i.pinimg.com/736x/5d/e5/c9/5de5c9e6e7fecfdca2c8a0a0a2a2f1f9.jpg",
  "https://i.pinimg.com/736x/d8/b6/c1/d8b6c1e6f8d6c3f6a3e6baafd0d8afb1.jpg"
];
const randomMeme = memes[Math.floor(Math.random() * memes.length)];

// Strona z zdjęciem mema
const memeImg = document.getElementById("meme-img");
if (memeImg) {
  memeImg.src = randomMeme;
} else {
  console.log("Element o id 'meme-img' nie został znaleziony na stronie");
}

// Strona z linkiem do mema w formacie JSON
const memeLink = document.getElementById("meme-link");
if (memeLink) {
  memeLink.innerHTML = JSON.stringify({ link: randomMeme });
} else {
  console.log("Element o id 'meme-link' nie został znaleziony na stronie");
}
