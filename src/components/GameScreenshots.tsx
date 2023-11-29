import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
        {data?.results.map((screen) => (
          <Image key={screen.id} src={screen.image}></Image>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameScreenshots;
