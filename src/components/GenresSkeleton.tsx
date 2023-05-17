import { ListItem, SkeletonCircle } from "@chakra-ui/react";

function GenresSkeleton() {
  return (
    <ListItem paddingY="8px">
      <SkeletonCircle />
    </ListItem>
  );
}

export default GenresSkeleton;
