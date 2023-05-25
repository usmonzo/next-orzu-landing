'use client';
import './globals.scss';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['cyrillic'] });

// export const metadata = {
// 	title: 'Хумо Орзу',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className={inter.className} style={{ background: '#d4d4d4' }}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
