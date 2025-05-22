import React, { createContext, useContext } from "react";

export type JuegoDetalle = {
  id: number;
  titulo: string;
  descripcion: string;
  estrellas: number;
  imagenes: string[];
  trailer: string;
  resenas: string[];
  precio: number;
};

const juegosData: JuegoDetalle[] = [
  {
    id: 1,
    titulo: "Elden Ring",
    descripcion: "Un RPG de acción en mundo abierto creado por FromSoftware y George R. R. Martin.",
    estrellas: 5,
    imagenes: [
      "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg",
      "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg",
    ],
    trailer: "https://www.youtube.com/embed/E3Huy2cdih0",
    resenas: [
      "Una obra maestra desafiante y hermosa.",
      "Exploración asombrosa, combate intenso.",
      "Uno de los mejores juegos de su generación.",
    ],
    precio: 59,
  },
  {
    id: 2,
    titulo: "God of War (2018)",
    descripcion: "Kratos viaja con su hijo Atreus en una aventura mitológica nórdica llena de acción y emoción.",
    estrellas: 4,
    imagenes: [
      "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
      "https://i.ytimg.com/vi/K0u_kAWLJOA/maxresdefault.jpg",
    ],
    trailer: "https://www.youtube.com/embed/K0u_kAWLJOA",
    resenas: [
      "Historia poderosa y emotiva.",
      "Excelente combate y presentación visual.",
      "Kratos como nunca lo habías visto.",
    ],
    precio: 49,
  },
  {
    id: 3,
    titulo: "Minecraft",
    descripcion: "Juego de construcción y supervivencia...",
    estrellas: 5,
    imagenes: [
      "/Minecraft-Logo.png"
    ],
    trailer: "https://www.youtube.com/embed/MmB9b5njVbA",
    resenas: [
      "Creatividad sin límites.",
      "Ideal para todas las edades.",
      "Un clásico moderno."
    ],
    precio: 20,
  }
];

const GameContext = createContext<{ juegos: JuegoDetalle[] }>({ juegos: [] });

export const useJuegos = () => useContext(GameContext);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <GameContext.Provider value={{ juegos: juegosData }}>
    {children}
  </GameContext.Provider>
);