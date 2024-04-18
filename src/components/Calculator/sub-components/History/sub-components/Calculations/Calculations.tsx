import { observer } from 'mobx-react-lite'

import { uid } from '@app/utils'
import { calculator } from '@app/store'

import { Wrapper, Operation } from './Calculations.styles'

export const Calculations = observer(() => (
	<Wrapper>
		{calculator.calculationsHistory.map((calculation) => (
			<Operation key={uid()}>{calculation}</Operation>
		))}
	</Wrapper>
))
