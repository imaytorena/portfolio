'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';
import { useIntl } from 'react-intl';
import * as React from 'react';

import {  buttonVariants } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover';

const language_icons = {
	'en': '🇺🇸',
	'es': '🇲🇽'
};

export function LangSwitcher() {
	const router = useRouter();
	const currentPathname = usePathname();
	const currentLocale = useCurrentLocale(i18nConfig);
	const { formatMessage, locale } = useIntl();

	const locales = [...i18nConfig.locales];

	const [open, setOpen] = React.useState(false);

	const handleChange = (currentValue: string) => {
		const newLocale = currentValue;

		// set cookie for next-i18n-router
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;
		setOpen(false);

		if (
			currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault && currentLocale !== newLocale
		) {
			router.push('/' + newLocale + currentPathname);
		} else {
			router.push(
				currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
			);
		}

		router.refresh();
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<button
					role="combobox"
					aria-expanded={open}
					className={buttonVariants({
						variant: 'ghost'
					})}
				>
					<span>{formatMessage({ id: `locale.current` })}</span>
				</button>
			</PopoverTrigger>
			<PopoverContent className="max-w-[130px] p-0">
				<Command>
					<CommandList>
						<CommandEmpty>No language found.</CommandEmpty>
						<CommandGroup>
							{locales.map((value) => (
								<CommandItem
									key={value}
									value={value}
									onSelect={handleChange}
									className="flex justify-center gap-x-2"
								>
									<span>{language_icons[value]}</span>
									<span>{formatMessage({ id: `locale.${value}.label` })}</span>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
