import { observer } from 'mobx-react-lite'

import { calculator } from '@app/store'

import { Button } from './sub-components'
import { Wrapper, Row } from './Pad.styles'

export const Pad = observer(() => (
	<Wrapper>
		<Row>
			<Button value="AC" />
			<Button value="%" />
			<Button value="()" />
			<Button value="/" />
		</Row>
		<Row>
			<Button value="7" />
			<Button value="8" />
			<Button value="9" />
			<Button value="*" />
		</Row>
		<Row>
			<Button value="4" />
			<Button value="5" />
			<Button value="6" />
			<Button value="-" />
		</Row>
		<Row>
			<Button value="1" />
			<Button value="2" />
			<Button value="3" />
			<Button value="+" />
		</Row>
		<Row>
			<Button value="±" />
			<Button value="0" />
			<Button value="." />
			<Button value="=" handler={() => calculator.addCalculation()} />
		</Row>
	</Wrapper>
))
