import React, { createContext, useState } from 'react';

// interface ShoppingListContextInterface {
// 	id: string;
// 	product: string;
// 	quantity: number;
// }

// interface Props {
// 	children: JSX.Element;
// }

export const ShoppingListContext = createContext(null);
export const ShoppingListDispatchContext = createContext(null);

// createContext<ShoppingListContextInterface | null>(null);

/* export function ShoppingListProvider({children,}: {
	children: React.ReactNode;
})
*/

export function ShoppingListProvider(props) {
	// const sampleShoppingListItem: ShoppingListContextInterface = {
	const sampleShoppingListItem = {
		id: '1',
		product: 'Eggs',
		quantity: 12,
	};

	const [shoppingList, setShoppingList] = useState(sampleShoppingListItem);

	return (
		<ShoppingListContext.Provider value={shoppingList}>
			<ShoppingListDispatchContext.Provider value={setShoppingList}>
				{props.children}
			</ShoppingListDispatchContext.Provider>
		</ShoppingListContext.Provider>
	);
}
