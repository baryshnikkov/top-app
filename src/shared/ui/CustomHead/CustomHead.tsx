import Head from 'next/head';
import { ReactNode } from 'react';

interface CustomHeadProps {
    title: string;
    description: string;
    children?: ReactNode;
}

export function CustomHead(props: CustomHeadProps) {
    const { title, description, children } = props;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            {children}
        </Head>
    );
}
