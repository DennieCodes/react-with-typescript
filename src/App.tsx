import { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';

function App() {
	const [items, setitems] = useState<Item[]>([]);

	// const items = [
	// 	{ id: 1, product: 'Pizza sauce', quantity: 1 },
	// 	{ id: 2, product: 'Mozzarella', quantity: 2 },
	// ];

	return (
		<div>
			<ShoppingList items={items} />
		</div>
	);
}

export default App;
