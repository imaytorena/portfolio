'use client';

import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { FileDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
	cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
	standardFontDataUrl: '/standard_fonts/'
};

type PDFFile = string | File | null;

export const MainView: () => React.ReactNode = () => {
	const { formatMessage } = useIntl();
	const [file, setFile] = useState<PDFFile>('/files/resume.pdf');
	const [numPages, setNumPages] = useState<number>();

	function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
		setNumPages(nextNumPages);
	}

	return <div className={cn('relative', 'bg-gradient-to-r from-[hsl(var(--background))] from-[75%] to-transparent')}>
		<div className="z-[10] mx-auto max-w-2xl py-20 flex flex-col items-center">
			<h2 className="text-center text-2xl font-bold sm:text-6xl">
				{formatMessage({ id: 'views.resume.h2' })}
			</h2>
			<div className="mt-6 text-center text-lg leading-8">
				<a href="/files/resume.pdf" download="JavierMaytorenaResume.pdf"
							className="flex items-center gap-1 rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
					<span aria-hidden="true"><FileDown className="w-4" /></span>
					{formatMessage({ id: 'views.resume.buttons.download' })}
				</a>

			</div>
			<div className="mt-6 border-solid border-2 border-teal-500">
				<Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
					{Array.from(new Array(numPages), (_el, index) => (
						<Page
							key={`page_${index + 1}`}
							pageNumber={index + 1}
							width={800}
							renderTextLayer={false}
							renderAnnotationLayer={false}
						/>
					))}
				</Document>
			</div>
		</div>
	</div>
		;
};