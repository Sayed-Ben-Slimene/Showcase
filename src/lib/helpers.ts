export const serializeNonPOJOs = (obj: object | null) => {
	return JSON.parse(JSON.stringify(obj));
};