import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

interface Props {
  onSearchText: (searchText: string) => void
}

function NavBar({ onSearchText }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={16} borderRadius={15} m={2} />
      <SearchBox onSearchText={searchText => onSearchText(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
