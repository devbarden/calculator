import { memo } from 'react'

import { Calculations, Actions } from './sub-components'
import { Wrapper } from './History.styles'

export const History = memo(() => (
	<Wrapper>
		<Calculations />
		<Actions />
	</Wrapper>
))
