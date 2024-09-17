import '@/styles/globals.css';
import i18nConfig from '@/i18nConfig';
import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/nav/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme/theme-provider';
import React from 'react';
import IntlProvider from '@/components/intl/provider';
import getIntl from '@/components/intl/core';

export const metadata: {
	themeColor: ({ color: string; media: string })[];
	description: string;
	title: { template: string; default: string };
	icons: { apple: string; shortcut: string; icon: string }
} = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`
	},
	description: siteConfig.description,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' }
	],
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png'
	}
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: { locale: string };
}

export function generateStaticParams() {
	return i18nConfig.locales.map(locale => ({ locale }));
}
export default async function RootLayout({ children,
																		 params: { locale }}: RootLayoutProps) {
	const intl = await getIntl(locale);
	return (
		<>
			<html lang={locale} suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>

			<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
				<IntlProvider messages={intl.messages} locale={intl.locale}>
					<div className="relative flex min-h-screen flex-col">
						<SiteHeader />
						<div className="flex-1">{children}</div>
					</div>
					<TailwindIndicator />
				</IntlProvider>
			</ThemeProvider>
			</body>
			</html>
		</>
	);
}