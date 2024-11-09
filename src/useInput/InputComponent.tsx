import { useInput } from './useInput';

const InputComponent = () => {
	const {
		value,
		isValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		inputReset,
	} = useInput((value: string) => value.trim().length > 3);

	const formSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		if (!isValid) return;
		alert('Form submitted successfully!');
		inputReset();
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					type='text'
					value={value}
					onChange={valueChangeHandler}
					onBlur={inputBlurHandler}
				/>
				{hasError && (
					<p style={{ color: 'red' }}>
						Username must be at least 4 characters long.
					</p>
				)}
			</div>

			<div>
				<button type='button' onClick={inputReset}>
					Reset
				</button>
				<button type='submit' disabled={!isValid}>
					Submit
				</button>
			</div>
		</form>
	);
};

export default InputComponent;
