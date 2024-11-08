import { useEffect, useState, RefObject } from 'react';

export const useOnScreen = (
	ref: RefObject<HTMLElement>,
	rootMargin: string = '0px'
): boolean => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const currentElement = ref.current;

		if (currentElement == null) return;

		const observer = new IntersectionObserver(
			([entry]) => setIsVisible(entry.isIntersecting),
			{ rootMargin }
		);

		observer.observe(currentElement);

		return () => {
			if (currentElement == null) return;
			observer.unobserve(currentElement);
		};
	}, [ref, rootMargin]);

	return isVisible;
};
