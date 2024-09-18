import React from 'react';
import { MainView as ProjectsMainView } from '@/components/views/projects/main';

interface PageProps {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}
export default function Page({ params, searchParams }: PageProps) {
	return <ProjectsMainView />
}