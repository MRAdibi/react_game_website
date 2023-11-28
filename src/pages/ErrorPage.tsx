import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <NavBar />
      <Box padding={5}>
        <Heading>Opsss...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "The page not found"
            : "An unexpected error"}
        </Text>
      </Box>
    </div>
  );
}

export default ErrorPage;
