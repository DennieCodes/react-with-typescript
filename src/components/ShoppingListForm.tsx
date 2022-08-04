function ShoppingListForm(): JSX.Element {
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		console.log('Submitted');
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Product Name" />
			<button type="submit">Add Item</button>
		</form>
	);
}

export default ShoppingListForm;
