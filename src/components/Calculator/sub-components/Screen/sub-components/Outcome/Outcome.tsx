import { observer } from 'mobx-react-lite'

import { uid } from '@app/utils'
import { calculator } from '@app/store'

import { Wrapper, History, Separator, Operation } from './Outcome.styles'

export const Outcome = observer(() => (
	<Wrapper>
		<History>
			{calculator.lastCalculations.map((calculation) => (
				<Operation key={uid()}>{calculation}</Operation>
			))}
		</History>
		{calculator.lastCalculations.length > 0 && <Separator />}
		<Operation>{calculator.value}</Operation>
	</Wrapper>
))
