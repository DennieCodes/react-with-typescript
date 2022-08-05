import { useRef } from 'react';

interface ShoppingListFormProps {
	onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
	const textInputRef = useRef<HTMLInputElement>(null);
	const quantityInputRef = useRef<HTMLInputElement>(null);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const newProduct = textInputRef.current!.value;
		const quantity = parseInt(quantityInputRef.current!.value);
		onAddItem(newProduct, quantity);
		textInputRef.current!.value = '';
		quantityInputRef.current!.value = '1';
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Product Name" ref={textInputRef} />
			<input type="number" min={0} ref={quantityInputRef} />
			<button type="submit">Add Item</button>
		</form>
	);
}

export default ShoppingListForm;
