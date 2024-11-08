import { useState, RefObject } from 'react';
import { useEventListener } from '../useEventListener/useEventListener';

export const useHover = (ref: RefObject<HTMLElement>) => {
	const [hovered, setHovered] = useState(false);

	useEventListener(
		'mouseover',
		() => setHovered(true),
		ref.current as HTMLElement
	);
	useEventListener(
		'mouseout',
		() => setHovered(false),
		ref.current as HTMLElement
	);

	return hovered;
};
