import React from 'react'
import Title from '@/common/Title'
import { outLocationsDummy } from '@/mock'
import { Grid } from '@nextui-org/react'
import { c11, choco2, e1 } from '@/assets'
import styles from '../styles/components/location.module.scss'
import DonutImage from '@/common/DonutImage'

const OurLocations = () => {
	return (
		<Grid.Container gap={6} justify='center'>
			<Grid xs={12} md={7} className={styles.imageSection}>
				<DonutImage image1={e1} image2={choco2} image3={c11} />
			</Grid>
			<Grid xs={12} md={5} className={styles.locationSection}>
				<Title data={outLocationsDummy} name='locations' />
			</Grid>
		</Grid.Container>
	)
}

export default OurLocations
