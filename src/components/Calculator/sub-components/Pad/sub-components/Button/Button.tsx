import { FC, useCallback } from 'react'
import { observer } from 'mobx-react-lite'

import { calculator } from '@app/store'

import { Wrapper } from './Button.styles'

interface Props {
	value: string
	handler?: () => void
}

export const Button: FC<Props> = observer(({ value, handler }) => {
	const addOperationHandler = useCallback(() => {
		if (handler) {
			handler()

			return
		}

		calculator.addOperation(value)
	}, [value, handler])

	return <Wrapper onClick={handler ?? addOperationHandler}>{value}</Wrapper>
})
