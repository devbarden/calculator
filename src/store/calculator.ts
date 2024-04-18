import { makeAutoObservable } from 'mobx'
import { takeRight } from 'lodash'

import { safeEval } from '@app/utils'
import { Operation } from '@app/types'
import { CalculatorMode } from '@app/enums'

class Calculator {
	mode: CalculatorMode = CalculatorMode.calculation
	operation: Operation = ''
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

	addCalculation() {
		if(!this.operation) {
			return
		}

		const result = safeEval(this.operation)
		const calculation = `${this.operation}=${result}`

		this.operation = ''
		this.calculations.push(calculation)
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
		return this.operation || '0'
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
}

export const calculator = new Calculator()
