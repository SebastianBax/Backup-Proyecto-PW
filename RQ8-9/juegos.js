const games = {
  elden: {
    title: "Elden Ring",
    description: "Un RPG de acción en mundo abierto creado por FromSoftware y George R. R. Martin.",
    stars: 5,
    images: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1245620/ss_9f3810a9025f2fcfc57be38bb9cd64e9e13d7e7d.1920x1080.jpg",
      "https://images.cgames.de/images/gamestar/279/elden-ring-test_6196079.jpg"
    ],
    trailer: "https://www.youtube.com/embed/E3Huy2cdih0",
    reviews: [
      "Una obra maestra desafiante y hermosa.",
      "Exploración asombrosa, combate intenso.",
      "Uno de los mejores juegos de su generación."
    ]
  },
  gow: {
    title: "God of War (2018)",
    description: "Kratos viaja con su hijo Atreus en una aventura mitológica nórdica llena de acción y emoción.",
    stars: 4,
    images: [
      "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
      "https://i.ytimg.com/vi/K0u_kAWLJOA/maxresdefault.jpg"
    ],
    trailer: "https://www.youtube.com/embed/K0u_kAWLJOA",
    reviews: [
      "Historia poderosa y emotiva.",
      "Excelente combate y presentación visual.",
      "Kratos como nunca lo habías visto."
    ]
  }
};

function showGame(key) {
  const game = games[key];
  document.getElementById("game-title").textContent = game.title;
  document.getElementById("game-description").textContent = game.description;
  document.getElementById("game-stars").innerHTML = "★".repeat(game.stars);

  const images = game.images.map(img => `<img src="${img}" alt="screenshot">`).join('');
  document.getElementById("game-images").innerHTML = images;

  document.getElementById("game-trailer").innerHTML =
    `<iframe src="${game.trailer}" frameborder="0" allowfullscreen></iframe>`;

  const reviews = game.reviews.map(r => `<li>${r}</li>`).join('');
  document.getElementById("game-reviews").innerHTML = reviews;

  document.getElementById("game-detail").style.display = "block";
}
