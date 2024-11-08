import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';

type UseCookieReturn = [
	string,
	(newValue: string, options?: Cookies.CookieAttributes) => void,
	() => void
];

export const useCookie = (
	name: string,
	defaultValue: string
): UseCookieReturn => {
	const [value, setValue] = useState<string>(() => {
		const cookie = Cookies.get(name);
		if (cookie) return cookie;
		Cookies.set(name, defaultValue);
		return defaultValue;
	});

	const updateCookie = useCallback(
		(newValue: string, options?: Cookies.CookieAttributes) => {
			Cookies.set(name, newValue, options);
			setValue(newValue);
		},
		[name]
	);

	const deleteCookie = useCallback(() => {
		Cookies.remove(name);
		setValue('');
	}, [name]);

	return [value, updateCookie, deleteCookie];
};
