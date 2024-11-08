import { useGeolocation } from './useGeolocation';

export default function GeolocationComponent() {
	const { loading, error, data } = useGeolocation();

	return (
		<>
			<div>Loading: {loading.toString()}</div>
			<div>Error: {error?.message}</div>
			{data && (
				<div>
					{data.latitude} x {data.longitude}
				</div>
			)}
		</>
	);
}
