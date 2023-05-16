import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GameIconsList from "./GameIconsList";
import MetacriticScore from "./MetacriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <GameIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetacriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
