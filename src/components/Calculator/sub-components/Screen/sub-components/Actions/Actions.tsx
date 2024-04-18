import { useCallback } from 'react'
import { observer } from 'mobx-react-lite'

import { IconName } from '@app/enums'
import { Icon } from '@app/components'
import { calculator } from '@app/store'

import { Wrapper, Action } from './Actions.styles'

export const Actions = observer(() => {
	const openHistoryHandler = useCallback(() => {
		calculator.openHistory()
	}, [])

	const clearOperationHandler = useCallback(() => {
		calculator.removeOperation()
	}, [])

	return (
		<Wrapper>
			<Action onClick={openHistoryHandler}>
				<Icon name={IconName.history} size={24} />
			</Action>
			<Action onClick={clearOperationHandler}>
				<Icon name={IconName.remove} size={24} />
			</Action>
		</Wrapper>
	)
})
