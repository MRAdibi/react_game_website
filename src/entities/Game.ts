import Genre from "./Genre";
import Platforms from "./Platforms";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  genres: Genre[];
  publishers: Publisher[];
  slug: string;
  description_raw: string;
  metacritic: number;
  rating_top: number;
}
