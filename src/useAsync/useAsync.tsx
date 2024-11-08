import { useCallback, useEffect, useState } from 'react';

export function useAsync<T>(
	callback: () => Promise<T>,
	dependencies: any[] = []
) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);
	const [value, setValue] = useState<T | null>(null);

	const callbackMemoized = useCallback(async () => {
		setLoading(true);
		setError(null);
		setValue(null);

		try {
			const result = await callback();
			setValue(result);
		} catch (err) {
			setError(err instanceof Error ? err : new Error(String(err)));
		} finally {
			setLoading(false);
		}
	}, [callback, ...dependencies]);

	useEffect(() => {
		callbackMemoized();
	}, [callbackMemoized]);

	return { loading, error, value };
}
