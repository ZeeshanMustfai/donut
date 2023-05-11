import { Button, Grid, Text } from '@nextui-org/react'
import React from 'react'
import styles from '../styles/components/header.module.scss'
import ElipseImg from '../assets/images/he2.png'
import DonutImage from '@/common/DonutImage'
import { b1, b2, c1, c2, choco1, e1, e2 } from '@/assets'

const Header = () => {
	return (
		<Grid.Container gap={6} justify='center' className={styles.headerMain}>
			<Grid xs={12} md={5} className={styles.headerInfo}>
				<Text color={'white'} h6 className='upperText' size={55}>
					Best <span className={styles.subTitle}>Donuts</span> In Town
				</Text>
				<Button rounded css={{ color: '$black' }}>
					Order Now
				</Button>
			</Grid>
			<Grid xs={12} md={7} className={styles.imageSection}>
				<DonutImage
					image1={e1}
					image2={c1}
					image3={choco1}
					image4={c2}
					image5={b1}
					image6={b2}
					title='header'
				/>
			</Grid>
		</Grid.Container>
	)
}

export default Header
