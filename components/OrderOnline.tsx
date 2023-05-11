import { c10, c8, choco5, e4, g1, g2 } from '@/assets'
import DonutImage from '@/common/DonutImage'
import TitleWrapper from '@/common/Title'
import { orderOnlineDummy } from '@/mock'
import { Grid } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/components/order.module.scss'

const renderGallery = () => {
	return (
		<Grid.Container gap={1}>
			<Grid xs={12} md={4}>
				<Image src={g2} alt='group1' style={{ objectFit: 'contain' }} />
			</Grid>
			<Grid xs={12} md={4}>
				<Image src={c8} alt='group2' style={{ objectFit: 'contain' }} />
			</Grid>
			<Grid xs={12} md={4}>
				<Image src={g1} alt='group3' style={{ objectFit: 'contain' }} />
			</Grid>
		</Grid.Container>
	)
}

const OrderOnline = () => {
	return (
		<Grid.Container gap={6} justify='center' className={styles.orderMain}>
			<Grid xs={12} md={5} className={styles.locationSection}>
				<TitleWrapper data={orderOnlineDummy} name='orderOnline' />
			</Grid>
			<Grid xs={12} md={7} className={styles.imageSection}>
				<DonutImage image1={e4} image2={choco5} image3={c10} />
			</Grid>

			{renderGallery()}
		</Grid.Container>
	)
}

export default OrderOnline
