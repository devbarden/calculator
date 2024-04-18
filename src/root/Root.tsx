import { memo } from 'react'

import { Calculator } from '@app/components'

import { Wrapper } from './Root.styles'

export const Root = memo(() => (
	<Wrapper>
		<Calculator />
	</Wrapper>
))
