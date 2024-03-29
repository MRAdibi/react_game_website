import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  userId: number;
}

function GameTrailer({ userId }: Props) {
  const { data, error, isLoading } = useGameTrailers(userId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first?.data[480]} poster={first?.preview} controls />
  ) : null;
}

export default GameTrailer;
