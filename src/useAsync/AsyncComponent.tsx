import { useAsync } from './useAsync';

export default function AsyncComponent() {
	const { loading, error, value } = useAsync<string>(() => {
		return new Promise((resolve, reject) => {
			const success = false;
			setTimeout(() => {
				success ? resolve('Hi') : reject(new Error('Error occurred'));
			}, 1000);
		});
	});

	return (
		<div>
			<div>Loading: {loading.toString()}</div>
			{error ? <div>Error: {error.message}</div> : null}
			{value ? <div>Value: {value}</div> : null}
		</div>
	);
}
