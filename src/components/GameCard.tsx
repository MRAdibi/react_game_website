import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import GameIconsList from "./GameIconsList";
import MetacriticScore from "./MetacriticScore";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <GameIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetacriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}>{game.name}</Link>{" "}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
