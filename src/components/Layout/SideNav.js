import { useLocation } from 'react-router-dom';

import { Box, VStack, Flex, Text } from '@chakra-ui/react';
import MenuItem from './MenuItem';

import { menuRoutes } from 'config/routes';

const SideNav = () => {
	const location = useLocation();
	const isActive = (path) => location.pathname === path;

	return (
		<Box
			bg="white"
			h="100vh"
			w="15%"
		>
			<VStack spacing={3} align="stretch">
			{
				menuRoutes.map(menu => (
					<MenuItem
						to={menu.path}
						key={menu.name}
						active={isActive(menu.path) ? "active" : ""}
						className={isActive(menu.path) ? "active" : ""}
					>
						<Flex ml={3} px={2} py={3} align="end">
							{menu.icon}
							<Text
								fontSize="1em"
								ml={1}
							>
								{menu.name}
							</Text>
						</Flex>
					</MenuItem>
				))
			}
			</VStack>
		</Box>
	)
}

export default SideNav;