import { FaFacebook, FaInstagram } from 'react-icons/fa'
import styles from '../styles/components/footer.module.scss'
const ICON_SIZE = 24

type TSocialLinkProp = {
	isFeed?: boolean
}
const SocialLinks = ({ isFeed }: TSocialLinkProp) => {
	const iconColor = isFeed ? 'black' : 'white'
	return (
		<div className={styles.socialIcon}>
			<FaFacebook
				size={ICON_SIZE}
				color={iconColor}
				className={styles.facebook}
			/>
			<FaInstagram size={ICON_SIZE} color={iconColor} />
		</div>
	)
}

export default SocialLinks
