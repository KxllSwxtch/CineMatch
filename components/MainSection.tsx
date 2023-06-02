import Image from 'next/image'

const MainSection: React.FC<{}> = (): JSX.Element => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<Image
				src='https://res.cloudinary.com/dt0nkqowc/image/upload/v1685708078/main_smfazu.jpg'
				alt='Main banner image'
				width={707}
				height={312}
				className='max-w-full h-5/6 p-0 m-0 block'
			/>
			<div className='p-5 bg-black text-white m-5 rounded-lg shadow-lg'>
				<p>
					Discovering your next favorite movie has never been easier or more
					enjoyable. Unleash the power of CineMatch, the AI-driven movie finder
					that connects you with the films you love. Get ready to embark on a
					cinematic journey like no other.
				</p>
			</div>
		</div>
	)
}

export default MainSection
