import { useCallback } from 'react'
import { observer } from 'mobx-react-lite'

import { IconName } from '@app/enums'
import { Icon } from '@app/components'
import { calculator } from '@app/store'

import { Wrapper, Action } from './Actions.styles'

export const Actions = observer(() => {
	const openCalculationHandler = useCallback(() => {
		calculator.openCalculation()
	}, [])

	const removeAllCalculationsHandler = useCallback(() => {
		calculator.removeAllCalculations()
	}, [])

	return (
		<Wrapper>
			<Action onClick={openCalculationHandler}>
				<Icon name={IconName.calculator} size={24} />
			</Action>
			<Action onClick={removeAllCalculationsHandler}>
				<Icon name={IconName.trash} size={24} />
			</Action>
		</Wrapper>
	)
})
