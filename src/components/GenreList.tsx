import { HStack, List, ListItem, Image, Button, Heading } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import GenresSkeleton from "./GenresSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenre();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  if (error) return null;

  return (
    <>
    <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List>
        {skeletons.map(
          (skeleton) => isLoading && <GenresSkeleton key={skeleton} />
        )}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="8px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
