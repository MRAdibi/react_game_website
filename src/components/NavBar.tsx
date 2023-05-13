import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize={16} borderRadius={15} m={2} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
