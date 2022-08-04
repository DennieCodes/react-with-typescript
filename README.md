# Shopping App

Practice project for implementing Typescript into React/Next projects

## Note: Simple declaraction of functional component returning JSX element

function Greeter(): JSX.Element {

```text
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
