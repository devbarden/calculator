import { useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import { FaHistory } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'

import { calculator } from '@app/store'

import { Wrapper } from './Actions.styles'

export const Actions = observer(() => {
	const openHistoryHandler = useCallback(() => {
		calculator.openHistory()
	}, [])

	const clearOperationHandler = useCallback(() => {
		calculator.removeOperation()
	}, [])

	return (
		<Wrapper>
			<FaHistory onClick={openHistoryHandler} size={24} color="white" />
			<FaDeleteLeft onClick={clearOperationHandler} size={24} color="white" />
		</Wrapper>
	)
})
