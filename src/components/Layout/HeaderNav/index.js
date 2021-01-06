import { Box, Flex, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import styled from '@emotion/styled';

import Avatar from 'assets/user.svg';
import HeaderMenu from './HeaderMenu';

const RightContainer = styled(Box)`
	@media(max-width: 767px) {
		.user-info {
			display:none;
		}
	}
`
const HeaderNav = () => {
	const [isMobile] = useMediaQuery("(max-width:767px)");
	return (
		<Box
			bg="white"
			p={4}
			position="sticky"
			top="0"
			zIndex={2}
		>
			<Flex>
				{
					isMobile && (
						<HeaderMenu />
					)
				}
				<img
					width="150"
					src="https://shipper.id/bos//assets/img/shipper-logo-new.png"
					alt="shipper-logo"
				/>
				<Spacer />
				<RightContainer>
					<Flex alignItems="center">
						<span className="user-info">Hello,</span>&nbsp;
						<Text color="brand.primary" mr={1} className="user-info">Shipper User</Text>
						<img width="32" height="32" src={Avatar} alt="User Avatar" />
					</Flex>
				</RightContainer>
			</Flex>
		</Box>
	)
}

export default HeaderNav;
