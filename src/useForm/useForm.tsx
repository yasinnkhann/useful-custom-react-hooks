import { useState } from 'react';

export const useForm = <T extends object>(initialState: T) => {
	const [formData, setFormData] = useState<T>(initialState);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		setFormData((currFormData: T) => ({
			...currFormData,
			[e.target.name]: e.target.value,
		}));
	};

	const resetForm = () => setFormData(initialState);

	return { formData, handleChange, resetForm };
};
