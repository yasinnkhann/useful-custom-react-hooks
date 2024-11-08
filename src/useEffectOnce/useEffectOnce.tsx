import { useEffect, useRef } from 'react';

export const useEffectOnce = (cb: () => void | (() => void)) => {
	const cbFnRef = useRef(cb);

	cbFnRef.current = cb;

	useEffect(() => {
		cbFnRef.current = cb;
	}, [cb]);

	useEffect(() => {
		cbFnRef.current();
	}, []);
};
