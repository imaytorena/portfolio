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

export default function IndexPage() {

	return (<>
			<Sections>
				<Me />
				<ResumePreview />
			</Sections>

		</>

	);
}