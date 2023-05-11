import { b1, c1, y1 } from '@/assets'
import { Card } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import React from 'react'

type TDonutCard = {
	id: string
	bgImg: string
	frontImg: string
}

const DonutCard = ({ id, bgImg, frontImg }: TDonutCard) => {
	return (
		<Card>
			<Card.Body css={{ p: 0, m: 0 }} className='test'>
				<Card.Image
					objectFit='cover'
					src={bgImg}
					width={'100%'}
					height={300}
					alt={id}
				/>
				<Image src={frontImg} alt={id} className={'cack-img'} />
			</Card.Body>
		</Card>
	)
}

export default DonutCard
