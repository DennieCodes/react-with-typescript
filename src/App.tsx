import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';

function App() {
	const [items, setitems] = useState<Item[]>([]);

	const AddItem = (product: string, quantity: number) => {
		setitems([...items, { id: uuidv4(), product, quantity }]);
	};

	// const items = [
	// 	{ id: 1, product: 'Pizza sauce', quantity: 1 },
	// 	{ id: 2, product: 'Mozzarella', quantity: 2 },
	// ];

	return (
		<div>
			<ShoppingList items={items} />
			<ShoppingListForm onAddItem={AddItem} />
		</div>
	);
}

export default App;
