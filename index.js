const memes = [
  "https://raw.githubusercontent.com/username/repo/img/meme1.jpg",
  "https://raw.githubusercontent.com/username/repo/img/meme2.jpg",
  "https://raw.githubusercontent.com/username/repo/img/meme3.jpg",
  // ...dodaj kolejne linki do zdjęć
];

function getRandomMeme() {
  const randomIndex = Math.floor(Math.random() * memes.length);
  return memes[randomIndex];
}

const memeImg = document.getElementById("meme-img");
memeImg.src = getRandomMeme();

const API_URL = "https://raw.githubusercontent.com/username/repo/api.json";
const newData = { "meme": { "link": getRandomMeme() } };

fetch(API_URL, {
  method: "PATCH",
  body: JSON.stringify(newData),
  headers: { "Content-Type": "application/json" }
})
  .then(response => response.json())
  .then(data => {
    console.log("API updated successfully", data);
  })
  .catch(error => {
    console.error("Error updating API: ", error);
  });