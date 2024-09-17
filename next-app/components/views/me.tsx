'use client';

import Link from 'next/link';
import { useIntl } from 'react-intl';
import { siteConfig } from '@/config/site';
import { FileText, Braces } from 'lucide-react';

export const Me = () => {
	const { formatMessage } = useIntl();

	return <div className="grid items-center gap-6 grid-cols-2">
		<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div className="text-left">
				<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
					{formatMessage({ id: 'views.home.me.name' })}
				</h1>
				<p className="mt-6 text-lg leading-8 ">
					{formatMessage({ id: 'views.home.me.description' })}
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/projects"
						className="flex items-center gap-1 rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
					>
						<span aria-hidden="true"><Braces className="w-4" /></span>{formatMessage({ id: 'views.home.buttons.my_work' })}
					</Link>
					<Link href="/resume/" className="flex items-center gap-1 text-sm font-semibold leading-6">
						<span aria-hidden="true"><FileText className="w-4" /></span> {formatMessage({ id: 'views.home.buttons.resume' })} <span aria-hidden="true">→</span>
					</Link>
				</div>
			</div>
		</div>
		<div className="mx-auto max-w-2xl">
			<img
				style={{
					height: '700px',
					objectFit: 'cover'
				}}
				src={siteConfig.links.images.me}
				alt="" />
		</div>
	</div>;
};