export const safeEval = (value: string) =>
	eval(value.replace(/[^-()\d/*+.]/g, ''))
