import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { FiBarChart } from "react-icons/fi";
import { IoBatteryCharging, IoWifi } from 'react-icons/io5'

import { time } from '@app/store'

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
				<IoWifi color="white" />
				<IoBatteryCharging color="white" />
				<FiBarChart color="white" />
			</Indicators>
		</Wrapper>
	)
})
