import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { time } from '@app/store'
import { IconName } from '@app/enums'
import { Icon } from '@app/components'

import { Wrapper, Time, Indicators } from './Header.styles'

export const Header = observer(() => {
	useEffect(() => {
		const intervalId = setInterval(() => time.setTime(), 1000)

		return () => {
			clearInterval(intervalId)
		}
	}, [])

	return (
		<Wrapper>
			<Time>{time.value}</Time>
			<Indicators>
				<Icon name={IconName.wifi} />
				<Icon name={IconName.charge} />
				<Icon name={IconName.bar} />
			</Indicators>
		</Wrapper>
	)
})
