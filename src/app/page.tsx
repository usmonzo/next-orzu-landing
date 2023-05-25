import Header from '@/components/Header/Header';
import Merchants from '@/components/Merchants/Merchants';
import Navbar from '@/components/Navbar/Navbar';
import RootLayout from './layout';
import PreFooterSection from '@/components/PreFooterSection/PreFooterSection';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<Merchants />
			<PreFooterSection />
		</>
	);
}
