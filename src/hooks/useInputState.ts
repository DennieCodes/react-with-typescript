import { useState } from 'react';

export default function useInputState(
	initialValue: any
): [
	typeof initialValue,
	(e: React.FormEvent<HTMLInputElement>) => void,
	() => void
] {
	const [state, setState] = useState<typeof initialValue>(initialValue);

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setState(e.currentTarget.value);
	};

	const reset = () => {
		setState('');
	};

	return [state, handleChange, reset];
}
