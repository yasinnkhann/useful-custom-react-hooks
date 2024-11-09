import { useForm } from './useForm';

interface IForm {
	email: string;
}

export default function FormComponent() {
	const { formData, handleChange, resetForm } = useForm<IForm>({ email: '' });

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (formData.email.trim() === '') {
			alert('Email is required');
			return;
		}

		alert('Login submitted');
		resetForm();
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						name='email'
						type='email'
						placeholder='Enter your email'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<button type='submit'>Login</button>
			</form>
		</div>
	);
}
