'use client';

import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { FileDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Document, Page, pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';

export const MainView: () => React.ReactNode = () => {
	const { formatMessage } = useIntl();


	return <div className={cn('relative', 'bg-gradient-to-r from-[hsl(var(--background))] from-[75%] to-transparent')}>
		Proyectis
	</div>
		;
};