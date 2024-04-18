import { observer } from 'mobx-react-lite'

import { calculator } from '@app/store'
import { CalculatorMode } from '@app/enums'

import { Header, History, Screen, Pad, Separator } from './sub-components'
import { Wrapper } from './Calculator.styles'

export const Calculator = observer(() => (
	<Wrapper>
		<Header />
		{calculator.currentMode === CalculatorMode.history && <History />}
		{calculator.currentMode === CalculatorMode.calculation && (
			<>
				<Screen />
				<Pad />
			</>
		)}
		<Separator />
	</Wrapper>
))
