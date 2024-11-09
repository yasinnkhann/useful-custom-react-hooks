import { useState } from 'react';

export const useInput = (validateValue: (value: string) => boolean) => {
	const [value, setValue] = useState<string>('');
	const [isTouched, setIsTouched] = useState<boolean>(false);

	const isValid = validateValue(value);

	const hasError = !isValid && isTouched;

	const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const inputBlurHandler = () => {
		setIsTouched(true);
	};

	const inputReset = () => {
		setValue('');
		setIsTouched(false);
	};

	return {
		value,
		isValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		inputReset,
	};
};
