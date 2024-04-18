import { makeAutoObservable } from 'mobx'
import { includes, takeRight, values } from 'lodash'

import { safeEval } from '@app/utils'
import { Operation } from '@app/types'
import { CalculatorMode } from '@app/enums'
import { REDUCE_OPERATORS_MAP, INITIAL_OPERATION_VALUE } from '@app/constants'

class Calculator {
	mode: CalculatorMode = CalculatorMode.calculation
	operation: Operation = INITIAL_OPERATION_VALUE
	calculations: Operation[] = []

	constructor() {
		makeAutoObservable(this)
	}

	addOperation(value: Operation) {
		this.operation += value
	}

	removeOperation() {
		this.operation = this.operation.slice(0, -1)
	}

	clearOperation() {
		this.operation = INITIAL_OPERATION_VALUE
	}

	wrapToBrackets() {
		this.operation = `(${this.operation})`
	}

	changeSign() {
		switch (this.operation) {
			case INITIAL_OPERATION_VALUE:
				this.operation = REDUCE_OPERATORS_MAP.DIF
				break
			case REDUCE_OPERATORS_MAP.DIF:
				this.operation = INITIAL_OPERATION_VALUE
				break
			default:
				this.operation = `${REDUCE_OPERATORS_MAP.DIF}(${this.operation})`
		}
	}

	calcPercent() {
		this.operation = `${safeEval(this.operation) / 100}`
	}

	addCalculation() {
		try {
			if (!this.operation) {
				return
			}

			const result = safeEval(this.operation)
			const calculation = `${this.operation}${REDUCE_OPERATORS_MAP.EQ}${result}`

			this.operation = INITIAL_OPERATION_VALUE
			this.calculations.push(calculation)
		} catch (err: unknown) {
			this.operation = INITIAL_OPERATION_VALUE

			alert('Wrong Expression')
		}
	}

	removeAllCalculations() {
		this.calculations = []
	}

	openHistory() {
		this.mode = CalculatorMode.history
	}

	openCalculation() {
		this.mode = CalculatorMode.calculation
	}

	get value() {
		return this.operation
	}

	get calculationsHistory() {
		return this.calculations
	}

	get lastCalculations() {
		return takeRight(this.calculations, 2)
	}

	get currentMode() {
		return this.mode
	}

	get lastCharInOperation() {
		return this.operation.slice(-1)
	}

	get isLastCharDividing() {
		return this.lastCharInOperation === REDUCE_OPERATORS_MAP.DIV
	}

	get isLastCharOpenBracket() {
		return this.lastCharInOperation === ')'
	}

	get isLastCharCloseBracket() {
		return this.lastCharInOperation === ')'
	}

	get isLastCharBracket() {
		return this.isLastCharOpenBracket || this.isLastCharCloseBracket
	}

	get isNumberDisabled() {
		return this.isLastCharCloseBracket
	}

	get isReduceDisabled() {
		return (
			!this.operation ||
			includes(values(REDUCE_OPERATORS_MAP), this.lastCharInOperation)
		)
	}

	get isFractionDisabled() {
		return this.isReduceDisabled || this.isLastCharBracket
	}

	get isZeroDisabled() {
		return this.isNumberDisabled || this.isLastCharDividing
	}
}

export const calculator = new Calculator()
