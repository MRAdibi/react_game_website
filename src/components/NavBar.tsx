import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";



function NavBar() {
  return (
    <HStack padding="10px">
      <Link to={'/'}><Image src={logo} boxSize={16} borderRadius={15} m={2} /></Link>
      <SearchBox />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
