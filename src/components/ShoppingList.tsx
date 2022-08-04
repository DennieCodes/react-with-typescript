interface Item {
	id: number;
	product: string;
	quantity: number;
}

interface ShoppingListProps {
	items: Item[];
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
	return (
		<div>
			<h1>Shopping List</h1>
			<ul>
				{props.items.map((item) => (
					<li key={item.id}>
						{item.product}, quantity: {item.quantity}
					</li>
				))}
			</ul>
		</div>
	);
}
