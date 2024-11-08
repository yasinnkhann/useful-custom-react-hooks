import { RefObject } from 'react';
import { useEventListener } from '../useEventListener/useEventListener';

export const useClickOutside = (
	ref: RefObject<HTMLElement>,
	cb: (e: MouseEvent) => void
) => {
	useEventListener(
		'click',
		(e: MouseEvent) => {
			if (ref.current == null || ref.current.contains(e.target as Node)) return;
			cb(e);
		},
		document
	);
};
