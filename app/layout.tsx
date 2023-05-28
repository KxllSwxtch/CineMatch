import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'CineMatch',
	description: 'Perfect way to get a movie match',
}

interface RootLayoutProps {
	children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }): JSX.Element => {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}

export default RootLayout
