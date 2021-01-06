import { Box, Grid, Flex, useMediaQuery } from '@chakra-ui/react';
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
			
			{/* <Grid
				templateColumns={{ sm: "repeat(1,1fr)", md:"250px repeat(5, 1fr)"}}
				templateRows="repeat(2, 1fr)"
			>
				{!isMobile && (
					<SideNav/>
				)}
				<Box bg="#f7f7f7" height="100vh" p={6}>
					{children}
				</Box>
			</Grid> */}
		</div>
	)
}

export default Layout;