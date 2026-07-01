import { api } from "./api";
import { CatResponse } from "../interfaces/Cat";
import { Post } from "../interfaces/Post";

const USERNAMES = ["michi_pro", "cat_lover99", "garfield_real", "gato_con_botas", "whiskers_meow", "salem_magic", "pawsome_cat", "felix_the_one", "kitty_styles", "meow_purr", "gatito_tango", "oliver_cat", "luna_michi", "simba_paws"];
const LOCATIONS = ["Palermo, Buenos Aires", "Cat Cafe Tokyo", "Rooftop Solarium", "The Couch", "Under the Blankets", "Catlandia", "Madrid, España", "Milán, Italia"];
const CAPTIONS = [
  "Acá, casual dominando el mundo. 🐾",
  "Si me mirás así de nuevo no respondo por mis actos... 😼",
  "Esperando que me sirvan el alimento premium. 🍲",
  "Dormir 18 horas seguidas es mi verdadera pasión. 😴",
  "¿Me das un poquito de tu comida? Prometo portarme bien. 🥺",
  "Cazando fantasmas invisibles en la pared a las 3 AM. 👻",
  "Hoy me levanté con ganas de tirar cosas de la mesa.",
  "Mood de día martes... No me molesten. 🛑",
  "Elegancia pura en cuatro patas. ✨",
  "Buscando los rayos de sol por toda la casa. ☀️"
];

export const catService = {
  getFeedPosts: async (limit: number = 15): Promise<Post[]> => {
    try {
      const response = await api.get<CatResponse[]>(`/images/search?limit=${limit}`);
      const rawData = response.data;

      const mappedPosts: Post[] = rawData.map((cat, i) => {
        const userIndex = i % USERNAMES.length;
        const locationIndex = i % LOCATIONS.length;
        const captionIndex = i % CAPTIONS.length;
        const avatarId = 10 + i; 
        const avatarUrl = `https://i.pravatar.cc/150?img=${avatarId}`;

        return {
          id: cat.id,
          userId: USERNAMES[userIndex],
          avatarUrl: avatarUrl,
          location: LOCATIONS[locationIndex],
          imageUrl: cat.url,   
          caption: CAPTIONS[captionIndex],
          likesCount: Math.floor(Math.random() * 5000) + 150,
          isLiked: false,
        };
      });

      return mappedPosts;
    } catch (error) {
      console.error("Error al obtener el feed de gatos en catService:", error);
      throw error;
    }
  }
};