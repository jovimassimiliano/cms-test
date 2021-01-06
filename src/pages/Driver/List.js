import { useState, useEffect } from 'react';
import { Stack, Button, Heading } from '@chakra-ui/react';

import CardDriver from './Card';

const ListDriver = ({ drivers }) => {
	const [page, setPage] = useState(1);
	const [result, setResult] = useState([]);
	const [renderItem, setRenderItem] = useState([]);
	const limitPerPage = 5;
	const totalCount = result?.length;
	const totalPage = (totalCount / limitPerPage);

	useEffect(() => {
		setResult(drivers)
	}, [drivers])

	useEffect(() => {
		if(result) {
			const parseItem = result?.slice((page * 5) - limitPerPage, page * limitPerPage);
			setRenderItem(parseItem)
		}
	} ,[page, result]);

	const handlePrev = () => {
		setPage(page - 1);
		window.scrollTo(0,0);
	}

	const handleNext = () => {
		setPage(page + 1);
		window.scrollTo(0,0);
	}

	return (
		<Stack direction="column" spacing="1em">
			<Stack direction={["column", "row"]} spacing="1em">
				{
					renderItem.length > 0 ? (
						renderItem?.map(item => (
							<CardDriver key={item.email} data={item} />
						))
					) : (
						<Heading>Driver not found...</Heading>
					)
					
				}
			</Stack>
			{
				renderItem.length > 0 && (
					<Stack direction="row" justify="center" spacing="1em">
						<Button
							variant="link"
							onClick={handlePrev}
							color="black"
							isDisabled={page === 1}
						>
							{`< Previous Page`}
						</Button>
						<Button
							variant="link"
							onClick={handleNext}
							color="black"
							isDisabled={page === totalPage}
						>
							{`Next Page >`}
						</Button>
					</Stack>
				)
			}
		</Stack>
	)
}

export default ListDriver;