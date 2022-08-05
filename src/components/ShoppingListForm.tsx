import useInputState from '../hooks/useInputState';

interface ShoppingListFormProps {
	onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
	const [text, handleTextChange, resetText] = useInputState('');
	const [quantity, handleQuantityChange, resetQuantity] = useInputState(0);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		onAddItem(text, parseInt(quantity || 0));
		resetText();
		resetQuantity();
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={text}
				type="text"
				placeholder="Product Name"
				onChange={handleTextChange}
			/>
			<input
				value={quantity}
				type="number"
				min={0}
				onChange={handleQuantityChange}
			/>
			<button type="submit">Add Item</button>
		</form>
	);
}

export default ShoppingListForm;
