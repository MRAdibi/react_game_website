import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"

interface Props {
    onSearchText: (searchText: string) => void
}

function SearchBox({ onSearchText }: Props) {

    const formRef = useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (formRef.current !== null) onSearchText(formRef.current.value)
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={formRef} borderRadius={15} placeholder="Search Game ..." variant='filled' />
            </InputGroup>
        </form>
    )
}

export default SearchBox