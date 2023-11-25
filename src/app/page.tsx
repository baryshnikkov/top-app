import { Button } from '@/shared/ui/Button';
import { Title } from '@/shared/ui/Title';
import { Text } from '@/shared/ui/Text';

export default function Home(): JSX.Element {
	return (
		<main>
			<Title variant='h1'>Text</Title>
			<Button>Primary</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button arrow={'right'}>PrimaryArrow</Button>
			<Button variant='secondary' arrow={'down'}>
				SecondaryArrow
			</Button>

			<Text size='large'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatibus repellendus aliquid quidem,
				expedita pariatur aperiam incidunt veritatis dolores perferendis labore dignissimos omnis hic deleniti
				repudiandae architecto beatae sunt vitae?
			</Text>
			<Text size='medium'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatibus repellendus aliquid quidem,
				expedita pariatur aperiam incidunt veritatis dolores perferendis labore dignissimos omnis hic deleniti
				repudiandae architecto beatae sunt vitae?
			</Text>
			<Text size='small'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatibus repellendus aliquid quidem,
				expedita pariatur aperiam incidunt veritatis dolores perferendis labore dignissimos omnis hic deleniti
				repudiandae architecto beatae sunt vitae?
			</Text>
		</main>
	);
}
