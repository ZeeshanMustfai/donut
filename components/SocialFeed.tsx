import { g3 } from '@/assets'
import Title from '@/common/Title'
import { aboutDummy, socialFeedDummy } from '@/mock'
import { Grid } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/components/social.module.scss'

const SocialFeed = () => {
	return (
		<Grid.Container gap={6} justify='center' className={styles.socialMain}>
			<Grid xs={12} md={5} className={styles.infoSection}>
				<Title data={socialFeedDummy} />
			</Grid>
			<Grid xs={12} md={7}>
				<Image src={g3} alt='social-feef' className={styles.socialImage} />
			</Grid>
		</Grid.Container>
	)
}
export default SocialFeed
