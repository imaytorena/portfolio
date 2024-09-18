import React from 'react';
import { Me } from '@/components/views/me';
import { ResumePreview } from '@/components/views/resume/preview';
import { cn } from '@/lib/utils';

const Sections = ({ children }: { children?: React.ReactNode[] }) => children.map(x => {
	return (<section className={cn('container pb-8 pt-6 md:py-10 relative',
		'after:content-[""] after:bg-teal-400 after:absolute after:bottom-0 after:left-0 after:w-[70%] after:h-[1px] after:mx-[15%]')}>
		{x}
	</section>);
});

interface PageProps {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page({ params, searchParams }: PageProps) {
	return (<>
			<Sections>
				<Me />
				<ResumePreview />
			</Sections>

		</>

	);
}