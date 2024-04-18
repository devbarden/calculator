import { makeAutoObservable } from 'mobx'

class Time {
	time: string = new Date().toLocaleTimeString()

	constructor() {
		makeAutoObservable(this)
	}

	setTime() {
		this.time = new Date().toLocaleTimeString()
	}

	get value() {
		return this.time.replace(/(.*)\D\d+/, '$1')
	}
}

export const time = new Time()
