import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 2rem;
	padding: 1rem;
	padding-top: 1rem;
	align-items: center;
`;
export const Menu = styled.div`
	grid-area: 1 / 2 / 4 / 5;
	display: flex;
	justify-content: space-around;
	@media ${(props) => props.theme.breakpoints.md} {
		grid-area: 2 / 2 / 3 / 5;
	}
`;

export const BtnProjects = styled.button`
	border: none;
	background: transparent;
	font-size: 2rem;
	line-height: 32px;
	color: rgba(255, 255, 255, 0.75);
	transition: 0.4s ease;
	&:hover {
		color: #fff;
		opacity: 1;
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 1.65rem;
		padding: 0.5rem;
	}
`;

export const MenuEffect = styled.a`
	transition: 0.5s ease;
	width: 46px;
	height: 46px;
	color: white;
	border-radius: 50px;
	padding: 5px 15px;
	& active {
		background-color: #e74c3c;
		transform: scale(1.2);
		cursor: pointer;
	}
	&:hover {
		background-color: #e74c3c;
		transform: scale(1.2);
		cursor: pointer;
	}
`;
