# Shopping App

Practice project for implementing Typescript into React/Next projects

## Note: Simple declaraction of functional component returning JSX element

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
