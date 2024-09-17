import Link from 'next/link';

import { Viewport } from 'next';
import { siteConfig } from '@/config/site';
import React from 'react';
import { SheetDemo } from '@/components/nav/left-nav';

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

export default function Page({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div className="text-center">
				<p className="mt-6 text-lg leading-8 ">
					Software developer 5+ years of experience
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="#"
						className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Contact me
					</a>
					<a href="#" className="text-sm font-semibold leading-6">
						Resume <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	);
}