import Header from '@/components/Header/Header';
import Merchants from '@/components/Merchants/Merchants';
import Navbar from '@/components/Navbar/Navbar';
import RootLayout from './layout';

export default function Home() {
	return (
		<RootLayout>
			<Navbar />
			<Header />
			<Merchants />
		</RootLayout>
	);
}
