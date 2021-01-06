import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import SideNav from './SideNav';
import HeaderNav from './HeaderNav';

const Layout = ({ children }) => {
	const [isMobile] = useMediaQuery("(max-width:767px)");
	return (
		<div>
			<HeaderNav />
			<Flex width="100%">
				{
					!isMobile && (
						<SideNav/>
					)
				}
				<Box bg="#f7f7f7" width={["100%","85%"]} p={6}>
					{children}
				</Box>
			</Flex>
		</div>
	)
}

export default Layout;