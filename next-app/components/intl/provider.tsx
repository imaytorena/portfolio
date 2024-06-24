'use client';

import { IntlProvider as Provider, MessageFormatElement } from 'react-intl';
import { ReactNode } from 'react';

export default function IntlProvider({
																			 messages, locale, children
}: {
	messages: Record<string, MessageFormatElement[]> | Record<string, string>;
	locale: string;
	children: ReactNode;
}) {
	return (
		<Provider messages={messages} locale={locale}>
			{children}
		</Provider>
	);
}
