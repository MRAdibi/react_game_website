import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/Logo.png"
function NavBar() {
  return (
    
    <HStack>
        <Image src={logo} boxSize={16} borderRadius={15} m={2} />
        <Text fontFamily={"sans-serif"}>Game Club</Text>
    </HStack>
  )
}

export default NavBar