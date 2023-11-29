'use client';

import { Button } from '@/shared/ui/Button';
import { Title } from '@/shared/ui/Title';

interface ErrorRootProps {
	error: Error;
	reset: () => void;
}

export default function ErrorRoot(props: ErrorRootProps): JSX.Element {
	const { error, reset } = props;

	console.log(error);

	return (
		<>
			<Title variant='h1'>Что-то пошло не так</Title>
			<Button onClick={() => reset()}>reset</Button>
		</>
	);
}

// TODO сверстать компонент
