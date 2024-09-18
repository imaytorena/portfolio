import Link from 'next/link';

import { Viewport } from 'next';
import { siteConfig } from '@/config/site';
import React from 'react';
import { MainView } from '@/components/views/resume/main';

export const metadata: {
	themeColor: ({ color: string; media: string })[];
	description: string;
	title: { template: string; default: string };
	icons: { apple: string; shortcut: string; icon: string }
} = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
}

interface PageProps {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}
export default function Page({ params, searchParams }: PageProps) {
	return (
		<MainView />
	);
}