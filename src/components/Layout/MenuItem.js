import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const MenuItem = styled(Link)`
	color:${props => props.active ? "#ef4941" : "#1A202C"};
	&.active {
		position: relative;
	}

	&.active::before {
		position: absolute;
		content: "";
		background-color: #ef4941;
		width: 5px;
		height: 30px;
		margin-right: 1em;
	}

	svg {
		width: 20px;
		height: 20px;
	}

	&.active > div > svg {
		fill: #ef4941;
	}
`

export default MenuItem;