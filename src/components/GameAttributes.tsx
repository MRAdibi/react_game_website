import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import DefenitionItem from "./DefenitionItem";
import MetacriticScore from "./MetacriticScore";

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2}>
      <DefenitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefenitionItem>
      <DefenitionItem term="Metascore">
        <MetacriticScore score={game.metacritic} />
      </DefenitionItem>
      <DefenitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefenitionItem>
      <DefenitionItem term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefenitionItem>
    </SimpleGrid>
  );
}

export default GameAttributes;
