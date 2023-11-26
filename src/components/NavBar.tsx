import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";



function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={16} borderRadius={15} m={2} />
      <SearchBox />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
