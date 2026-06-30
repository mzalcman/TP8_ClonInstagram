import { api } from "./api";
import { CatResponse } from "../interfaces/Cat";
import { Post } from "../interfaces/Post";

const USERNAMES = ["michi_pro", "cat_lover99", "garfield_real", "gato_con_botas", "whiskers_meow", "salem_magic", "pawsome_cat", "felix_the_one", "kitty_styles", "meow_purr"];
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

  getFeedPosts: async (limit: number = 12): Promise<Post[]> => {
    try {

        const response = await api.get<CatResponse[]>(`/images/search?limit=${limit}`);
      
      const mappedPosts: Post[] = response.data.map((cat, index) => {

        const userIndex = index % USERNAMES.length;
        const locationIndex = index % LOCATIONS.length;
        const captionIndex = index % CAPTIONS.length;

        return {
          id: cat.id,
          userId: USERNAMES[userIndex],
          avatarUrl: `https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=150&auto=format&fit=crop&q=60`,
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