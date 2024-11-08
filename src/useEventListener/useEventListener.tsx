import { useEffect, useRef } from 'react';

type EventListener<T extends Event> = (event: T) => void;

export const useEventListener = <T extends Event>(
	eventType: string,
	callback: EventListener<T>,
	element: HTMLElement | Window | Document | MediaQueryList | null = window
) => {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		if (!element) return;

		const handler = (event: T) => callbackRef.current(event);
		element.addEventListener(eventType, handler as EventListener<Event>);

		return () => {
			element.removeEventListener(eventType, handler as EventListener<Event>);
		};
	}, [eventType, element]);
};
