import { observer } from 'mobx-react-lite'

import { uid } from '@app/utils'
import { calculator } from '@app/store'

import { Actions } from './sub-components'
import { Wrapper, Calculations, Operation } from './History.styles'

export const History = observer(() => (
	<Wrapper>
    <Calculations>
			{calculator.calculationsHistory.map((calculation) => (
				<Operation key={uid()}>{calculation}</Operation>
			))}
		</Calculations>
		<Actions />
	</Wrapper>
))
