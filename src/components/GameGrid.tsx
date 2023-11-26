import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";


export const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGameCount}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          margin={15}
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
        >
          {isLoading &&
            Skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {!isLoading &&
            data?.pages.map((page, index) => (
              <Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </Fragment>
            ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};
