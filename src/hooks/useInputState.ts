import { useState } from 'react';

export default function useInputState(initialValue: any) {
	const [state, setState] = useState(initialValue);

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setState(e.currentTarget.value);
	};

	const reset = () => {
		setState('');
	};

	return [state, handleChange, reset];
}
