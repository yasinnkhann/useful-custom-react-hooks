import { useAsync } from '../useAsync/useAsync';

const DEFAULT_OPTIONS: RequestInit = {
	headers: { 'Content-Type': 'application/json' },
};

export function useFetch<T>(
	url: string,
	options: RequestInit = {},
	dependencies: any[] = []
) {
	return useAsync<T>(async () => {
		const res = await fetch(url, { ...DEFAULT_OPTIONS, ...options });
		if (res.ok) return res.json();
		const json = await res.json();
		return Promise.reject(new Error(JSON.stringify(json)));
	}, dependencies);
}
