import styled from 'styled-components'

interface Props {
	disabled: boolean
}

export const Wrapper = styled.div<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2.5rem;
	height: 2.5rem;
	padding: 1rem;
	border-radius: 50%;
	user-select: none;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
	background-color: ${({ disabled }) => (disabled ? 'grey' : 'white')};

	&:active {
		transform: scale(1.05);
	}
`
