'use client';
import './globals.scss';
import { Golos_Text, Inter } from 'next/font/google';
import { Providers } from './providers';
import React from 'react';

const inter = Golos_Text({ subsets: ['cyrillic'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className={inter.className} style={{ background: '#d4d4d4' }}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
