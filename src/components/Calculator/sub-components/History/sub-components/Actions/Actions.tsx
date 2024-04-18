import { useCallback } from 'react'
import { observer } from 'mobx-react-lite'
import { FaTrash } from 'react-icons/fa'
import { FaCalculator } from 'react-icons/fa6'

import { calculator } from '@app/store'

import { Wrapper } from './Actions.styles'

export const Actions = observer(() => {
	const openCalculationHandler = useCallback(() => {
		calculator.openCalculation()
	}, [])

	const removeAllCalculationsHandler = useCallback(() => {
		calculator.removeAllCalculations()
	}, [])

	return (
		<Wrapper>
			<FaCalculator onClick={openCalculationHandler} size={24} color="white" />
			<FaTrash onClick={removeAllCalculationsHandler} size={24} color="white" />
		</Wrapper>
	)
})
