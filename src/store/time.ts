import { makeAutoObservable } from 'mobx'

import { getCurrentTime } from '@app/utils'

class Time {
	time: string = getCurrentTime()

	constructor() {
		makeAutoObservable(this)
	}

	setTime() {
		this.time = getCurrentTime()
	}

	get value() {
		return this.time.replace(/(.*)\D\d+/, '$1')
	}
}

export const time = new Time()
