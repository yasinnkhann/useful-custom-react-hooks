import { RefObject } from 'react';
import { useEventListener } from '../useEventListener/useEventListener';
import { useTimeout } from '../useTimeout/useTimeout';
import { useEffectOnce } from '../useEffectOnce/useEffectOnce';

export const useLongPress = (
	ref: RefObject<HTMLElement>,
	cb: () => void,
	{ delay = 250 } = {}
) => {
	const { reset, clear } = useTimeout(cb, delay);

	useEffectOnce(clear);

	useEventListener(
		'mousedown',
		() => ref.current && reset(),
		ref.current || undefined
	);
	useEventListener(
		'touchstart',
		() => ref.current && reset(),
		ref.current || undefined
	);
	useEventListener(
		'mouseup',
		() => ref.current && clear(),
		ref.current || undefined
	);
	useEventListener(
		'mouseleave',
		() => ref.current && clear(),
		ref.current || undefined
	);
	useEventListener(
		'touchend',
		() => ref.current && clear(),
		ref.current || undefined
	);
};
