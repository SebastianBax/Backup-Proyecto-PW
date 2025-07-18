import React, { createContext, useContext, useState } from "react";

export type Reseña = {
  texto: string;
  estrellas: number;
};

export type JuegoDetalle = {
  id: number;
  titulo: string;
  descripcion: string;
  estrellas: number;
  imagenes: string[];
  trailer: string;
  resenas: Reseña[];
  precio: number;
  oferta?: boolean;
};

type GameContextType = {
  juegos: JuegoDetalle[];
  agregarResena: (id: number, resena: Reseña) => void;
};
const juegosDataInicial: JuegoDetalle[] = [
  {
    id: 1,
    titulo: "Minecraft",
    descripcion: "Juego de construcción y supervivencia...",
    estrellas: 5,
    imagenes: ["/Minecraft-Logo.png"],
    trailer: "https://www.youtube.com/embed/Rla3FUlxJdE",
    resenas: [],
    precio: 20,
    oferta: true,
  },
  {
    id: 2,
    titulo: "Rimworld",
    descripcion: "Simulación de colonia espacial.",
    estrellas: 5,
    imagenes: ["/Rimworld_Logo.png"],
    trailer: "",
    resenas: [],
    precio: 30,
  },
  {
    id: 3,
    titulo: "God of War",
    descripcion: "Kratos viaja con su hijo Atreus en una aventura mitológica nórdica llena de acción y emoción.",
    estrellas: 4,
    imagenes: ["/GodofWar_Logo.jpg"],
    trailer: "",
    resenas: [],
    precio: 49,
  },
  {
    id: 4,
    titulo: "Farming Simulator 22",
    descripcion: "Simulación agrícola realista.",
    estrellas: 4,
    imagenes: ["/FS22_Logo.avif"],
    trailer: "",
    resenas: [],
    precio: 40,
  },
  {
    id: 5,
    titulo: "Company of Heroes 2",
    descripcion: "Estrategia en tiempo real ambientada en la Segunda Guerra Mundial.",
    estrellas: 4,
    imagenes: ["/COH2.PNG"],
    trailer: "",
    resenas: [],
    precio: 25,
  },
  {
    id: 6,
    titulo: "Helldivers 2",
    descripcion: "Acción cooperativa intensa.",
    estrellas: 4,
    imagenes: ["/HD2_Logo.png"],
    trailer: "",
    resenas: [],
    precio: 35,
  },
  {
    id: 7,
    titulo: "Kingdom Come Deliverance 2",
    descripcion: "RPG medieval realista.",
    estrellas: 5,
    imagenes: ["/KCD2_Logo.png"],
    trailer: "",
    resenas: [],
    precio: 50,
  },
  {
    id: 8,
    titulo: "Outlast",
    descripcion: "Terror en primera persona.",
    estrellas: 4,
    imagenes: ["/Outlast.avif"],
    trailer: "",
    resenas: [],
    precio: 15,
  },
  {
    id: 9,
    titulo: "Grand Theft Auto V",
    descripcion: "Acción y mundo abierto en Los Santos.",
    estrellas: 5,
    imagenes: ["/GTAV_Logo.png"],
    trailer: "",
    resenas: [],
    precio: 35,
  },
  {
    id: 10,
    titulo: "Smash Bros Melee",
    descripcion: "Peleas multijugador frenéticas.",
    estrellas: 5,
    imagenes: ["/Smashbros.png"],
    trailer: "",
    resenas: [],
    precio: 30,
  },
];

const GameContext = createContext<GameContextType>({ juegos: [], agregarResena: () => {} });

export const useJuegos = () => useContext(GameContext);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [juegos, setJuegos] = useState<JuegoDetalle[]>(juegosDataInicial);

  const agregarResena = (id: number, resena: Reseña) => {
    setJuegos((prev) =>
      prev.map((juego) => {
        if (juego.id === id) {
          const nuevasResenas = [...juego.resenas, resena];
          // Calcular nuevo promedio de estrellas
          const sumaEstrellas = nuevasResenas.reduce((acc, r) => acc + r.estrellas, 0);
          const promedio = Math.round(sumaEstrellas / nuevasResenas.length);
          return { ...juego, resenas: nuevasResenas, estrellas: promedio };
        }
        return juego;
      })
    );
  };

  return (
    <GameContext.Provider value={{ juegos, agregarResena }}>
      {children}
    </GameContext.Provider>
  );
};