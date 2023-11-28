import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.2s ease-in",
      }}
      sx={{ transition: "transform 0.2s ease-in" }}
      overflow="hidden"
      borderRadius={10}
    >
      {children}
    </Box>
  );
}

export default GameCardContainer;
