import { observer } from 'mobx-react-lite'

import { uid } from '@app/utils'
import { calculator } from '@app/store'

import { Wrapper, Separator, Operation } from './Outcome.styles'

export const Outcome = observer(() => (
	<Wrapper>
		{calculator.lastCalculations.map((calculation) => (
			<Operation key={uid()}>{calculation}</Operation>
		))}
		{calculator.lastCalculations.length > 0 && <Separator />}
		<Operation>{calculator.value}</Operation>
	</Wrapper>
))
