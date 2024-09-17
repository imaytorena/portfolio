'use client';

import { useIntl } from 'react-intl';
import * as React from 'react';
import Link from 'next/link';

import { Linkedin, Gitlab, Github } from 'lucide-react';
import { NavItem } from '@/types/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { LangSwitcher } from '@/components/intl/lang-switcher';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { SheetDemo } from '@/components/nav/left-nav';

interface Items {
	items?: NavItem[];
}

const NavItems = ({ items }) => <div className="flex items-center">
	<div className="flex gap-6">
		{items?.length ?
			items.map(
				(item, index) =>
					item.href && (
						<Link
							key={index}
							href={item.href}
							className={cn(
								'flex items-center text-sm font-medium text-muted-foreground',
								'cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
								'h-10 px-4 py-2 hover:text-accent-foreground',
								item.disabled && 'cursor-not-allowed opacity-80'
							)}
						>
							{item.title}
						</Link>
					)
			) : null}
		<div className="flex gap-2">
			<Link
				href={siteConfig.links.github}
				target="_blank"
				rel="noreferrer"
			>
				<div
					className="flex items-center gap-2 text-sm font-medium text-muted-foreground cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 hover:text-accent-foreground"
				>
					<Github className="h-4 w-4" />
					<span>GitHub</span>
				</div>
			</Link>
			<Link
				href={siteConfig.links.gitlab}
				target="_blank"
				rel="noreferrer"
			>
				<div
					className="flex items-center gap-2 text-sm font-medium text-muted-foreground cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 hover:text-accent-foreground"
				>
					<Gitlab className="h-4 w-4" />
					<span>GitLab</span>
				</div>
			</Link>
			<Link
				href={siteConfig.links.gitlab}
				target="_blank"
				rel="noreferrer"
			>
				<div
					className="flex items-center gap-2 text-sm font-medium text-muted-foreground cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 hover:text-accent-foreground"
				>
					<Linkedin className="h-4 w-4" />
					<span>LinkedIn</span>
				</div>
			</Link>
		</div>
	</div>
</div>;

export function MainNav() {
	const { formatMessage, locale } = useIntl();
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		setItems(
			siteConfig.routes.map(({ id, path }) => ({
				title: formatMessage({ id: `routes.${id}` }),
				href: path
			}))
		);
	}, []);

	return (
		<nav className="container flex h-16 items-center space-x-4">
			<div className="flex gap-6 md:gap-10">
				<Link href="/" className="flex items-center text-rose-500 space-x-2">
					{/*<Icons.logo className="h-6 w-6" />*/}
					<span className="font-bold">{formatMessage({ id: 'site.name' })}</span>
				</Link>
				<div className="hidden md:flex items-center">
					<NavItems items={items} />
				</div>
			</div>

			<div className="flex flex-1 items-center justify-end space-x-4">
				<LangSwitcher />
				<ThemeToggle />

				<div className="sm:block md:hidden">
					<SheetDemo />
				</div>
			</div>
		</nav>
	);
}