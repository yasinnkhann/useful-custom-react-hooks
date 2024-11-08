import { useState } from 'react';
import { useCopyToClipboard } from './useCopyToClipboard';

export default function CopyToClipboardComponent() {
	const [copyToClipboard, { success }] = useCopyToClipboard();
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<>
			<input
				type='text'
				value={inputValue}
				onChange={handleInputChange}
				placeholder='Type something to copy'
			/>
			<button onClick={() => copyToClipboard(inputValue)}>
				{success ? 'Copied' : 'Copy Text'}
			</button>
		</>
	);
}
