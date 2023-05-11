import { c5, choco3, e3 } from '@/assets'
import DonutImage from '@/common/DonutImage'
import TitleWrapper, { TComment } from '@/common/Title'
import Title from '@/common/Title'
import { aboutDummy } from '@/mock'
import { Grid } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import styles from '../styles/components/location.module.scss'

type TAboutProps = {
	comments?: any
}
const About = ({ comments }: TAboutProps) => {
	const [comment, setComment] = useState<TComment>()

	const getData = async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
		const data = await res.json()
		setComment(data[0])
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<Grid.Container gap={6} justify='center' className={styles.orderMain}>
			<Grid xs={12} md={7} className={styles.imageSection}>
				<DonutImage image1={e3} image2={choco3} image3={c5} title='about' />
			</Grid>
			<Grid xs={12} md={5} className={styles.locationSection}>
				<TitleWrapper data={aboutDummy} name='about' comment={comment} />
			</Grid>
		</Grid.Container>
	)
}

export const getServerSideProps = async () => {
	const data = await (
		await fetch(`https://jsonplaceholder.typicode.com/comments`)
	).json()
	console.log('comments', data)
	return { props: { comments: data } }
}
export default About
