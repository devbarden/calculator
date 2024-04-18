import { memo } from 'react'

import { Outcome, Actions } from './sub-components'
import { Wrapper } from './Screen.styles'

export const Screen = memo(() => (
	<Wrapper>
		<Outcome />
		<Actions />
	</Wrapper>
))
