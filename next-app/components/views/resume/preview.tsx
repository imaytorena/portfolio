'use client';

import Link from 'next/link';
import React from 'react';
import { useIntl } from 'react-intl';
import { Code, FileText } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';


export const ResumePreview: () => React.ReactNode = () => {
	const { formatMessage } = useIntl();

	return <div className={cn('relative', 'bg-gradient-to-r from-[hsl(var(--background))] from-[75%] to-transparent')}>
		<div
			className="z-[10] mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
			<div className="text-left">
				<p className="flex items-center gap-1 text-md font-bold">
					<Code className="h-4 w-4" />{formatMessage({ id: 'views.resume.subtitle' })}
				</p>
				<h3 className="text-1xl font-bold sm:text-4xl">
					{formatMessage({ id: 'views.resume.title' })}
				</h3>
			</div>
			<div className="mt-6 text-right text-lg leading-8">
				<p className="mt-6 text-lg leading-8">
					{formatMessage({ id: 'views.resume.description' }, { 'italic': str => <i>{str}</i>, 'br': <br/> })}
				</p>
				<div className="mt-10 flex items-center justify-end gap-x-6">
					<Link href="/resume/" className="flex items-center gap-1 text-sm font-semibold leading-6">
						<span aria-hidden="true"><FileText className="w-4" /></span>
						{formatMessage({ id: 'views.resume.buttons.full_resume' })}
						<span aria-hidden="true">→</span>
					</Link>
				</div>
			</div>
		</div>
		<div className="z-[-1] absolute right-[32px] bottom-32">
			<div
				className="z-[-1] h-[400px] w-[300px] bg-contain bg-no-repeat max-h-[400px] bg-gradient-to-r from-transparent to-white"
				style={{
					backgroundImage: `url('${siteConfig.links.images.resume_preview}')`
				}}
			></div>
		</div>
	</div>
		;
};