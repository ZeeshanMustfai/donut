import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import styles from '../styles/common/donutImg.module.scss'

type TDonutImgProps = {
	image1: string | StaticImageData
	image2: string | StaticImageData
	image3: string | StaticImageData
	image4?: string | StaticImageData | undefined
	image5?: string | StaticImageData | undefined
	image6?: string | StaticImageData | undefined
	title?: string
}

const DonutImage = ({
	image1,
	image2,
	image3,
	title,
	image4,
	image5,
	image6,
}: TDonutImgProps) => {
	return (
		<>
			<Image src={image1} alt='social-feef' className={styles.mainImg} />
			<Image
				src={image2}
				alt='choco'
				className={classNames({
					[styles.secondImg]: title !== 'header',
					[styles.secondImg1]: title === 'header',
				})}
			/>

			<Image
				src={image3}
				alt='cack-11'
				className={classNames({
					[styles.thirdImg]: title !== 'header',
					[styles.thirdImg1]: title === 'header',
				})}
			/>

			{title === 'header' && (
				<Image src={image4} alt='cack-22' className={styles.image4} />
			)}
			{title === 'header' && (
				<Image src={image5} alt='cack-22' className={styles.image5} />
			)}
			{title === 'header' && (
				<Image src={image6} alt='cack-22' className={styles.image6} />
			)}
		</>
	)
}

export default DonutImage
