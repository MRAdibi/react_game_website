import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { GameGrid } from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import Sort from "./components/Sort";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearchText={searchText => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginLeft={3}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex marginBottom={5}>
            <Box paddingRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Box>
            <Sort
              sortOrder={gameQuery.sortOrder}
              onSelectedSort={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></Sort>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}
export default App;
