import Navigation from './Navigation'
import { Title } from './Typography'

const Header: React.FC<{}> = (): JSX.Element => {
	return (
		<header className='p-5 flex items-center justify-between'>
			<Title>CineMatch</Title>
			<Navigation />
		</header>
	)
}

export default Header
