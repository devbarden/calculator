import { observer } from 'mobx-react-lite'

import { calculator } from '@app/store'

import { Button } from './sub-components'
import { Wrapper, Row } from './Pad.styles'

export const Pad = observer(() => (
	<Wrapper>
		<Row>
			<Button value="AC" handler={() => calculator.clearOperation()} />
			<Button
				value="%"
				isDisabled={calculator.isReduceDisabled}
				handler={() => calculator.calcPercent()}
			/>
			<Button
				value="()"
				isDisabled={calculator.isReduceDisabled}
				handler={() => calculator.wrapToBrackets()}
			/>
			<Button value="/" isDisabled={calculator.isReduceDisabled} />
		</Row>

		<Row>
			<Button value="7" isDisabled={calculator.isNumberDisabled} />
			<Button value="8" isDisabled={calculator.isNumberDisabled} />
			<Button value="9" isDisabled={calculator.isNumberDisabled} />
			<Button value="*" isDisabled={calculator.isReduceDisabled} />
		</Row>

		<Row>
			<Button value="4" isDisabled={calculator.isNumberDisabled} />
			<Button value="5" isDisabled={calculator.isNumberDisabled} />
			<Button value="6" isDisabled={calculator.isNumberDisabled} />
			<Button value="-" isDisabled={calculator.isReduceDisabled} />
		</Row>

		<Row>
			<Button value="1" isDisabled={calculator.isNumberDisabled} />
			<Button value="2" isDisabled={calculator.isNumberDisabled} />
			<Button value="3" isDisabled={calculator.isNumberDisabled} />
			<Button value="+" isDisabled={calculator.isReduceDisabled} />
		</Row>

		<Row>
			<Button value="±" handler={() => calculator.changeSign()} />
			<Button value="0" isDisabled={calculator.isZeroDisabled} />
			<Button value="." isDisabled={calculator.isFractionDisabled} />
			<Button
				value="="
				isDisabled={calculator.isReduceDisabled}
				handler={() => calculator.addCalculation()}
			/>
		</Row>
	</Wrapper>
))
