import { Operation } from '@app/types'

export const INITIAL_OPERATION_VALUE: Operation = ''

export const REDUCE_OPERATORS_MAP: Record<string, string> = {
	FR: '.',
	EQ: '=',
	DIV: '/',
	MUL: '*',
	DIF: '-',
	SUM: '+',
}
