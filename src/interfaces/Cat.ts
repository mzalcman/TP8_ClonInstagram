export interface CatBreed {
  id: string;
  name: string;
  temperament?: string;
  origin?: string;
}

export interface CatResponse {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: CatBreed[];
}