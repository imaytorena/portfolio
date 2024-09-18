import React from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import './scrollarea.css';
import Link from 'next/link';

const TAGS = [
	'Proyecto 1',
	'Proyecto 1',
	'Proyecto 1',
	'Proyecto 1',
	'Proyecto 1',
	'Proyecto 1',
	'Proyecto 1'
];

const listado = [
	{
		title: 'Fullstack', list: [
			{ title: 'CRUD', link: '/projects#crud', tags: ['laravel'] },
			{ title: 'Searchbar', link: '/projects#searchbar', tags: ['react'] },
			{ title: 'TODO app', link: '/projects#todo_app', tags: ['node'] },
			{ title: 'API client', link: '/projects#api_client', tags: ['python'] }
		]
	},
	{
		title: 'Frontend', list: [
			{ title: 'Flor en CSS', link: '/projects#proyecto_1', tags: ['CSS'] }
		]
	},
	{
		title: 'Backend', list: [
			{ title: 'API Documentation', link: '/projects#proyecto_1', tags: ['lumen'] }
		]
	},
	{
		title: 'En progreso', list: [
			{ title: 'Project A', link: '/projects#valorant', tags: ['web'] }
		]
	},
	{
		title: 'Fullstack', list: [
			{ title: 'CRUD', link: '/projects#crud', tags: ['laravel'] },
			{ title: 'Searchbar', link: '/projects#searchbar', tags: ['react'] },
			{ title: 'TODO app', link: '/projects#todo_app', tags: ['node'] },
			{ title: 'API client', link: '/projects#api_client', tags: ['python'] }
		]
	},
	{
		title: 'Frontend', list: [
			{ title: 'Flor en CSS', link: '/projects#proyecto_1', tags: ['CSS'] }
		]
	},
	{
		title: 'Backend', list: [
			{ title: 'API Documentation', link: '/projects#proyecto_1', tags: ['lumen'] }
		]
	},
	{
		title: 'En progreso', list: [
			{ title: 'Project A', link: '/projects#valorant', tags: ['web'] }
		]
	}
];

export const MainView = () => (
	<div className="flex">
		<ScrollArea.Root className="ScrollAreaRoot">
			<ScrollArea.Viewport className="ScrollAreaViewport">
				<div style={{ padding: '15px 15px 20px 20px' }}>
					{listado.map(({ title, list }, index) => <div key={index}>
						<div className="Text">{title}</div>
						{list.map(({ title, link }, index) => <Link href={link} className="Tag" key={index}>
								{title}
							</Link>
						)}
					</div>)}
				</div>
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
				<ScrollArea.Thumb className="ScrollAreaThumb" />
			</ScrollArea.Scrollbar>
			<ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
				<ScrollArea.Thumb className="ScrollAreaThumb" />
			</ScrollArea.Scrollbar>
			<ScrollArea.Corner className="ScrollAreaCorner" />
		</ScrollArea.Root>
		<div className="ml-[200px] p-5 pl-10">
			<div className="mb-10 h-28 bg-amber-600">{'Fullstack'}</div>
			<div className="mb-10 h-28 bg-amber-600">{'Frontend'}</div>
			<div className="mb-10 h-28 bg-amber-600">{'Backend'}</div>
			<div className="mb-10 h-28 bg-amber-600">{'En progreso'}</div>
			<div className="mb-10 h-28 bg-amber-600">{'Fullstack'}</div>
			<div className="mb-10 h-28 bg-amber-600">{'Frontend'}</div>
			<div className="mb-10 h-28 bg-amber-600">{'Backend'}</div>
			<div className="mb-10 h-28 bg-amber-300" id='searchbar'>{'En progreso'}</div>
		</div>
	</div>
);