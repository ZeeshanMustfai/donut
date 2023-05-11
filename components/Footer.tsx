import React from 'react'
import styles from '../styles/components/footer.module.scss'
import { Container, Grid, Text } from '@nextui-org/react'
import appIcon from '../assets/icons/app_brand.png'
import Image from 'next/image'
import { otherItem, navItems } from '@/mock'
import SocialLinks from './SocialLinks'
const textStyle = { color: '$primary', textDecoration: 'underline' }
const textStyleOne = { textTransform: 'uppercase', color: '$white' }

const Footer = () => {
	return (
		<Grid.Container gap={6} className={styles.mainFooter}>
			<Grid xs={12} md={6} className={styles.footer}>
				<Image src={appIcon} alt='app-icon' />
				<Text h6 css={{ color: '$white', width: '350px' }}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been standard dummy text ever since the
					1500s.
				</Text>
			</Grid>

			<Grid xs={12} md={6} className={styles.other}>
				<div className={styles.otherLinks}>
					<Text h6 css={textStyle}>
						Other Links
					</Text>

					{navItems.map(({ id, name }) => {
						return (
							<Text css={textStyleOne} key={id}>
								{name}
							</Text>
						)
					})}
				</div>
				<div className={styles.otherLinks}>
					<Text h6 css={textStyle}>
						Other Links
					</Text>

					{otherItem.map(({ id, name }) => {
						return (
							<Text css={textStyleOne} key={id}>
								{name}
							</Text>
						)
					})}
				</div>

				<div className={styles.otherLinks}>
					<Text h6 css={textStyle}>
						Follow Us
						<SocialLinks />
					</Text>
				</div>
			</Grid>
		</Grid.Container>
	)
}

export default Footer
