interface GreeterProps {
	person: string;
}

function Greeter(props: GreeterProps): JSX.Element {
	return <h1>Hello, {props.person}!</h1>;
}

export default Greeter;
