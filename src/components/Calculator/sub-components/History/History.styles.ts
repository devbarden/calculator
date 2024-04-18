import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	min-height: 0;
	height: 100%;
`

export const Calculations = styled.div`
	flex: 1;
	padding: 1rem;
	background-color: #61677a;
	border-radius: 0.5rem;
	overflow: auto;
`

export const Operation = styled.div`
	display: flex;
	justify-content: flex-end;
	line-break: anywhere;
	color: white;
`
