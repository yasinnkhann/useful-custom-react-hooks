import { useState, useCallback } from 'react';

export function useStateWithValidation<T>(
	validationFunc: (value: T) => boolean,
	initialValue: T
) {
	const [state, setState] = useState<T>(initialValue);
	const [isValid, setIsValid] = useState<boolean>(() => validationFunc(state));

	const onChange = useCallback(
		(nextState: T | ((prevState: T) => T)) => {
			const value =
				typeof nextState === 'function'
					? (nextState as (prevState: T) => T)(state)
					: nextState;
			setState(value);
			setIsValid(validationFunc(value));
		},
		[validationFunc, state]
	);

	return [state, onChange, isValid] as const;
}
