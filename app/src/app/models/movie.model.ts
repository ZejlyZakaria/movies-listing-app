export interface Movie {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  poster_path: string;
  liked?: boolean;
  disliked?: boolean;
}
