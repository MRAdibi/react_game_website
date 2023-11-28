import { Platforms } from "./Platforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms; }[];
  slug: string;
  description_raw: string;
  metacritic: number;
  rating_top: number;
}
