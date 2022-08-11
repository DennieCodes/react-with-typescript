import { useState } from 'react';
// import { ShoppingListProvider } from './context/shoppingList.context';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';

function App(): JSX.Element {
	const [items, setitems] = useState<Item[]>([]);

	const AddItem = (product: string, quantity: number) => {
		setitems([...items, { id: uuidv4(), product, quantity }]);
	};

	return (
		<div>
			{/* <ShoppingListProvider> */}
			<ShoppingList items={items} />
			<ShoppingListForm onAddItem={AddItem} />
			{/* </ShoppingListProvider> */}
		</div>
	);
}

export default App;
