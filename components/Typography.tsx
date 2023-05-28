interface TitleProps {
	children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ children }): JSX.Element => {
	return (
		<h1
			className='text-4xl font-black'
			style={{ color: '#031927', fontFamily: '"Anton", sans-serif' }}
		>
			{children}
		</h1>
	)
}
