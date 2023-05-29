const animalPhotos = [
  "camel",
  "cheetah",
  "elephant",
  "gorilla",
  "koala",
  "lion",
  "polar_bear",
  "tiger",
  "wolf"
];

const container = document.getElementById("animal-photos");

animalPhotos.forEach(animal => {
  const imageUrl = `https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/${animal}.jpg`;

  const animalPhoto = document.createElement("div");
  animalPhoto.className = "animal-photo";

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = animal;

  animalPhoto.appendChild(img);
  container.appendChild(animalPhoto);
});
