import { FC, ReactElement, memo, useMemo } from 'react'

import { FiBarChart } from 'react-icons/fi'
import { FaTrash, FaHistory } from 'react-icons/fa'
import { IoBatteryCharging, IoWifi } from 'react-icons/io5'
import { FaCalculator, FaDeleteLeft } from 'react-icons/fa6'

import { IconName } from '@app/enums'

type RequiredProps = {
	name: IconName
}

type AdditionalProps = {
	color?: string
	size?: number
}

type Props = RequiredProps & AdditionalProps

const getIconByName = (name: IconName, props: AdditionalProps): ReactElement =>
	({
		[IconName.bar]: <FiBarChart {...props} />,
		[IconName.wifi]: <IoWifi {...props} />,
		[IconName.trash]: <FaTrash {...props} />,
		[IconName.charge]: <IoBatteryCharging {...props} />,
		[IconName.remove]: <FaDeleteLeft {...props} />,
		[IconName.history]: <FaHistory {...props} />,
		[IconName.calculator]: <FaCalculator {...props} />,
	})[name]

export const Icon: FC<Props> = memo(({ name, ...rest }) => {
	const icon = useMemo(
		() => getIconByName(name, { color: 'white', ...rest }),
		[name, rest],
	)

	return icon
})
