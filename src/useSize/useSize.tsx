import { useState, useEffect } from 'react';

interface Size {
	width: number;
	height: number;
	top: number;
	left: number;
	right: number;
	bottom: number;
	x: number;
	y: number;
}

export const useSize = (ref: React.RefObject<HTMLElement>) => {
	const [size, setSize] = useState<Size>({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		x: 0,
		y: 0,
	});

	useEffect(() => {
		if (ref.current == null) return;

		const observer = new ResizeObserver(([entry]) =>
			setSize(entry.contentRect)
		);
		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref]);

	return size;
};
