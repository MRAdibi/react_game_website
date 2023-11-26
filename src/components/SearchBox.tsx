import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

function SearchBox() {
  const formRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (formRef.current !== null) setSearchText(formRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={formRef}
          borderRadius={15}
          placeholder="Search Game ..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}

export default SearchBox;
