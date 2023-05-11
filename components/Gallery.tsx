import DonutCard from '@/common/DonutCard'
import { Grid } from '@nextui-org/react'
import React from 'react'

const Gallery = () => {
	return (
		<>
			<Grid.Container gap={3}>
				{[1, 2, 3, 4].map((item) => (
					<Grid key={item} xs={12} md={3}>
						<DonutCard />
					</Grid>
				))}
			</Grid.Container>
		</>
	)
}

export default Gallery
