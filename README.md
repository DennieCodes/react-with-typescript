# Shopping App

Practice project for implementing Typescript into React/Next projects

## Note: Simple declaration of functional component returning JSX element

```text
function Greeter(): JSX.Element {

Alternative: Older method with some issues outlined in documentation for returning a react functional component
const Greeter: React.FC = () => {
  return <h1>Hello!</h1>;
};
```

## Note: React Props examples with Typescript

```text
(simple)
function Greeter(props: { person: string }): JSX.Element {
  return <h1>Hello, {props.person}!</h1>;
}

(more robust props)
interface GreeterProps {
  person: string;
}

function Greeter(props: GreeterProps): JSX.Element {
  return <h1>Hello, {props.person}!</h1>;
}

(destructured interface)
function Greeter({person}: GreeterProps): JSX.Element {
  return <h1>Hello, {person}<h1>;
}
```

## Note: React Props example using interface

```text
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
{props.items}
...
}

(alternative destructured)
export default function ShoppingList({items}: ShoppingListProps): JSX.Element {
return (
{items}
...
};
```

## Note: useState with Typescript

```text
interface Item {
	id: number;
	product: string;
	quantity: number;
}
const [items, setitems] = useState<Item[]>([]);

(alternate importing interface)
export default interface Item {
  ...
}

import Item from './models/item';
```

## Note: handling events with React/Typescript

```text
function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
}
```

## Note: useRef for referencing values in input

```text
const inputRef = useRef<HTMLInputElement>(null);

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  const newProduct = inputRef.current!.value;
  ...
}

<form onSubmit={handleSubmit}>
	<input type="text" placeholder="Product Name" ref={inputRef} />
  <button type="submit">Add Item</button>
</form>
```

## Note: passing functions to child components

```text
const AddItem = (product: string) => {
  console.log(product);
};

<ShoppingListForm onAddItem={AddItem} />

interface ShoppingListFormProps {
	onAddItem: (item: string) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {
  ...
}
```

## Note: using uuid with Typescript/React

```text
npm install uuid
npm install --save-dev @types/uuid

import { v4 as uuidv4 } from 'uuid';

const NewId = uuidv4();
```

## Note: Added addition form control and associated controls set with Type

```text
const AddItem = (product: string, quantity: number) => {
  setitems([...items, { id: uuidv4(), product, quantity }]);
};

interface ShoppingListFormProps {
	onAddItem: (item: string, quantity: number) => void;
}

function ShoppingListForm({ onAddItem }: ShoppingListFormProps): JSX.Element {

function handleSubmit(e: React.FormEvent) {
  ...
  const quantity = parseInt(quantityInputRef.current!.value);
  onAddItem(newProduct, quantity);

```

## NOTE: Replaced ref with useState for controlled input components, added custom useInputState hook

```text
import { useState } from 'react';

export default function useInputState(initialValue: any) {
	const [state, setState] = useState(initialValue);

	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		setState(e.currentTarget.value);
	};

	const reset = () => {
		setState('');
	};

	return [state, handleChange, reset];
}

const [text, handleTextChange, resetText] = useInputState('');
const [quantity, handleQuantityChange, resetQuantity] = useInputState(0);

<input value={text} onChange={handleTextChange} ... />
```
