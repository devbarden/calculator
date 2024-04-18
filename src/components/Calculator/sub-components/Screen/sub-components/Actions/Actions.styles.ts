import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
`

export const Action = styled.div`
	cursor: pointer;

	&:active {
		transform: scale(1.05);
	}
`
