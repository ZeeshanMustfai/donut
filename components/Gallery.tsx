import DonutCard from '@/common/DonutCard'
import { galleryImages } from '@/mock'
import { Grid } from '@nextui-org/react'
import React from 'react'

const Gallery = () => {
	return (
		<>
			<Grid.Container gap={3}>
				{galleryImages.map(({ id, bgImg, frontImg }) => (
					<Grid key={id} xs={12} md={3}>
						<DonutCard id={id} bgImg={bgImg} frontImg={frontImg} />
					</Grid>
				))}
			</Grid.Container>
		</>
	)
}

export default Gallery
