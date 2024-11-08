import { useState } from 'react';
import { useFetch } from './useFetch';

type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export default function FetchComponent() {
	const [id, setId] = useState<number>(1);
	const { loading, error, value } = useFetch<Todo>(
		`https://jsonplaceholder.typicode.com/todos/${id}`,
		{},
		[id]
	);

	return (
		<div>
			<div>ID: {id}</div>
			<button onClick={() => setId(currentId => currentId + 1)}>
				Increment ID
			</button>
			<div>Loading: {loading.toString()}</div>
			{error && <div>Error: {JSON.stringify(error, null, 2)}</div>}
			{value && <div>Data: {JSON.stringify(value, null, 2)}</div>}
		</div>
	);
}
