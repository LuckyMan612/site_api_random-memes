const memes = [
  "https://github.com/LuckyMan612/site_api_random-memes/blob/main/memes/obraz_2023-01-24_235339359.png?raw=true",
  "https://github.com/LuckyMan612/site_api_random-memes/blob/main/memes/obraz_2023-01-24_235407494.png?raw=true",
  "https://github.com/LuckyMan612/site_api_random-memes/blob/main/memes/obraz_2023-01-24_235622269.png?raw=true",
  "https://tenor.com/view/crane-brazil-grab-poor-car-gif-17372636"
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
