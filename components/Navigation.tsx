import { useState } from 'react'
import Image from 'next/image'

const Navigation: React.FC<{}> = (): JSX.Element => {
	const [isNavOpen, setNavOpen] = useState<boolean>(false)

	const openNav = () => setNavOpen(true)
	const closeNav = () => setNavOpen(false)

	return (
		<>
			{isNavOpen ? (
				<nav>
					<ul>
						<li onClick={closeNav}>Home</li>
					</ul>
				</nav>
			) : (
				<Image
					src='https://res.cloudinary.com/dt0nkqowc/image/upload/v1685705629/menu_ebylda.png'
					width={32}
					height={32}
					alt='Navigation button'
					onClick={openNav}
					className='cursor-pointer'
				/>
			)}
		</>
	)
}

export default Navigation
