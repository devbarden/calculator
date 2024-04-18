import { FC, useCallback } from 'react'
import { observer } from 'mobx-react-lite'

import { calculator } from '@app/store'

import { Wrapper } from './Button.styles'

interface Props {
	value: string
	isDisabled?: boolean
	handler?: () => void
}

export const Button: FC<Props> = observer(
	({ value, handler, isDisabled = false }) => {
		const addOperationHandler = useCallback(() => {
			if (isDisabled) {
				return
			}

			if (handler) {
				handler()

				return
			}

			calculator.addOperation(value)
		}, [value, handler, isDisabled])

		return (
			<Wrapper disabled={isDisabled} onClick={handler ?? addOperationHandler}>
				{value}
			</Wrapper>
		)
	},
)
