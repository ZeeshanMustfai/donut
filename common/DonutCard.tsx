import { c1 } from '@/assets'
import { Card } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const DonutCard = () => {
	return (
		<Card>
			<Card.Body css={{ p: 0, m: 0, background: 'Pink' }} className='test'>
				<Image src={c1} alt='bg1' width={250} height={250} />
			</Card.Body>
		</Card>
	)
}

export default DonutCard
