import './App.css';
import ShoppingList from './components/ShoppingList';

function App() {
	const items = [
		{ id: 1, product: 'Pizza sauce', quantity: 1 },
		{ id: 2, product: 'Mozzarella', quantity: 2 },
	];

	return (
		<div>
			<ShoppingList items={items} />
		</div>
	);
}

export default App;
