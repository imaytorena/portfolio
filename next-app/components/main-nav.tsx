import * as React from 'react';
import Link from 'next/link';

import { NavItem } from '@/types/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { SheetDemo } from '@/components/left-nav';

interface MainNavProps {
	items?: NavItem[];
}

const NavItems = ({ items }) => <nav className="flex gap-6">
	{items?.length ?
		items?.map(
			(item, index) =>
				item.href && (
					<Link
						key={index}
						href={item.href}
						className={cn(
							'flex items-center text-sm font-medium text-muted-foreground',
							item.disabled && 'cursor-not-allowed opacity-80'
						)}
					>
						{item.title}
					</Link>
				)
		) : null}
</nav>;

export function MainNav({ items }: MainNavProps) {
	return (
		<div className="flex gap-6 md:gap-10">
			<Link href="/" className="flex items-center space-x-2">
				{/*<Icons.logo className="h-6 w-6" />*/}
				<span className="inline-block font-bold">{siteConfig.name}</span>
			</Link>
			<div className="hidden md:block">
				<NavItems items={items} />
			</div>
		</div>
	);
}
