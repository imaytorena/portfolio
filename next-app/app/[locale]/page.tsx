"use client"

import Link from 'next/link';
import { useRouter } from "next/router";
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import getIntl from '@/components/intl/core';

import { useIntl } from 'react-intl';

export default  function IndexPage({ params: { locale } }: { params: { locale: string } }) {
	const { formatMessage } = useIntl();

	return (<>
			<section className="container grid grid-cols-2 items-center gap-6 pb-8 pt-6 md:py-10 border-b">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-left">
						<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
							Javier Maytorena {formatMessage({ id: 'common.title' })}
						</h1>
						<p className="mt-6 text-lg leading-8 ">
							Web Developer with 5+ Years of Full-Stack experience.
							<br />
							Having extensive experience working with frameworks, APIs, and various development architectures.
							<br />I am eager to learn new technologies and/or transition to the operational side of projects.

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

				<div className="mx-auto max-w-2xl">
					<img
						style={{
							height: '700px',
							objectFit: 'cover'
						}}
						src="https://media.gettyimages.com/id/1273541574/es/foto/retrato-de-estudio-de-un-hombre-de-25-a%C3%B1os.webp?s=2048x2048&w=gi&k=20&c=Lc-dHLn9NpJ9GglHfhsKecnQV3TOaljCBvD3bTcAMLM="
						alt="" />
				</div>
			</section>
			<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 border-b">
				<div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
					<div className="text-center">
						<h3 className="text-2xl font-bold tracking-tight sm:text-4xl">
							Resume
						</h3>
						<p className="mt-6 text-lg leading-8 ">
							Software developer 5+ years of experience
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a href="#" className="text-sm font-semibold leading-6">
								Full resume <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>

	);
}
