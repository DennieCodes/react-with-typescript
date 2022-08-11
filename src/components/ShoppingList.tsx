// import { useContext } from 'react';
// import { ShoppingListContext } from '../context/shoppingList.context';
import Item from '../models/item';

interface ShoppingListProps {
	items: Item[];
}

export default function ShoppingList(props: ShoppingListProps): JSX.Element {
	// const shoppingContext = useContext(ShoppingListContext);

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
