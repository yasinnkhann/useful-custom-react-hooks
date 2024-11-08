import { useState } from 'react';
import copy from 'copy-to-clipboard';

type CopyOptions = Parameters<typeof copy>[1];

export const useCopyToClipboard = () => {
	const [value, setValue] = useState<string>('');
	const [success, setSuccess] = useState<boolean>(false);

	const copyToClipboard = (text: string, options?: CopyOptions) => {
		const result = copy(text, options);
		if (result) setValue(text);
		setSuccess(result);
	};

	return [copyToClipboard, { value, success }] as const;
};
