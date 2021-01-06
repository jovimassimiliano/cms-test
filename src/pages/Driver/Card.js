import { Box, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import IconMore from 'assets/icons/icons8-more.png';
import User from 'assets/user.svg';
import format from 'date-fns/format';

const Body = styled.div`
	.avatar {
		width: 48px;
		height: 48px;
	}


	@media(max-width: 480px) {
		.avatar {
			width: 96px;
			height: 96px;
		}

		.email {
			display: none;
		}

		.dob {
			display: none;
		}
	}
`

const CardDriver = ({ data }) => {
	return (
		<Box bg="white" w={["100%", "20%"]}>
			<Flex p={3} align="center">
				<Text fontSize="12px">
					Driver ID
				</Text>
				<Text fontSize="12px" color="brand.primary">
					281939RY
					{/* {data?.id?.value} */}
				</Text>
				<Spacer />
				<img src={IconMore} alt="more" />
			</Flex>
			<hr />
			<Body>
				<Stack direction={["row", "column"]} spacing={["2em", "1em"]} p={[6, 3]} align={["center", "flex-start"]}>
					<img src={User} alt="user" className="avatar" />
					<Stack direction="column">
						<div>
							<Text fontSize={["14px","12px"]} color="grey">Nama Driver</Text>
							<Text fontSize={["14px","12px"]} color="black">{data?.name?.first}, {data?.name?.last}</Text>
						</div>
						<div>
							<Text fontSize={["14px","12px"]} color="grey">Telepon</Text>
							<Text fontSize={["14px","12px"]} color="black">{data?.phone}</Text>
						</div>
						<div className="email">
							<Text fontSize={["14px","12px"]} color="grey">Email</Text>
							<Text fontSize={["14px","12px"]} color="black" isTruncated>{data?.email}</Text>
						</div>
						<div className="dob">
							<Text fontSize={["14px","12px"]} color="grey">Tanggal Lahir</Text>
							<Text fontSize={["14px","12px"]} color="black">{format(new Date(data?.dob?.date), 'dd-MM-yyyy')}</Text>
						</div>
					</Stack>
				</Stack>
			</Body>
		</Box>
	)
}

export default CardDriver;