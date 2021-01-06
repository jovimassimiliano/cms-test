import { useState } from "react";
import { Box, Heading, Text, Button, Spacer, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import SearchIcon from 'assets/icons/icons8-search.svg';

const Header = ({ handleSearch }) => {
	const [value, setValue] = useState("")
	const handleChange = (event) => {
		setValue(event.target.value);
		handleSearch(event.target.value);
	}
	
	return (
		<Box d={{ md: "flex" }} p={4} width="100%" bg="white">
			<Box>
				<Heading color="brand.primary">DRIVER MANAGEMENT</Heading>
				<Text>
					Data driver yang bekerja dengan Anda
				</Text>
			</Box>
			<Spacer />
			<Box w={{ sm: "100%", md:"20%"}} my={[3, 0]} mr={{ md: 2 }}>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<img src={SearchIcon} width="20" height="20" alt="icon" />}
					/>
					<Input
						borderRadius="0"
						placeholder="Cari Driver"
						value={value}
						onChange={handleChange}
					/>
				</InputGroup>
			</Box>
			<Button
				size="md"
				w={["100%", "auto"]}
				background="brand.primary"
				color="white"
				borderRadius="0"
				fontSize="14px"
			>
				TAMBAH DRIVER +
			</Button>
		</Box>
	)
}

export default Header;