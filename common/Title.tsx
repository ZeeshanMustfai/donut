import { g4 } from '@/assets'
import SocialLinks from '@/components/SocialLinks'
import { Button, Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/components/title.module.scss'

type TTitle = {
	tagLine: string
	title?: string
	subTitle: string
	lastTitle?: string
	description: string
	buttonText: string
}

export type TComment = {
	body: string
	id: number
	email: string
	name: string
	postId: number
}

type TTitleProps = {
	data: TTitle
	name?: string
	comment?: TComment
}

const TitleWrapper = ({ data, name, comment }: TTitleProps) => {
	const { tagLine, title, subTitle, description, buttonText, lastTitle } = data

	return (
		<div className={styles.titleSection}>
			<Text color='primary' className='upperText'>
				{tagLine}
			</Text>
			<Text
				color={lastTitle ? 'black' : 'white'}
				className='upperText'
				size={45}
			>
				{title} <span className={styles.subTitle}>{subTitle}</span>{' '}
				{lastTitle && lastTitle}
			</Text>
			{lastTitle && !description ? (
				<SocialLinks isFeed={lastTitle ? true : false} />
			) : (
				<Text
					css={{
						color: name === 'orderOnline' ? '$secondary' : 'White',
						marginBottom: '10px',
					}}
				>
					{comment ? comment?.body : description}
				</Text>
			)}
			{name === 'locations' && (
				<Image src={g4} alt='locations-img' className='img' />
			)}

			<Button rounded css={{ color: '$secondary' }}>
				{buttonText}
			</Button>
		</div>
	)
}

export default TitleWrapper
