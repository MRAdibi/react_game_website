import meh from "../assets/react.svg";
import dart from "../assets/dart.png";
import positiveVote from "../assets/positive-vote.png";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: positiveVote, alt: "Good" },
    5: { src: dart, alt: "very good" },
  };

  return <Image {...emojiMap[rating]} boxSize={8}/>;
}

export default Emoji;
