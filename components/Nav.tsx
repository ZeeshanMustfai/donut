import React from 'react'
import { Button, Navbar, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { MdEmail } from 'react-icons/md'
import { RiPhoneFill } from 'react-icons/ri'
import styles from '../styles/components/navbar.module.scss'
import { navItems } from '@/mock'
import Image from 'next/image'
import appIcon from '../assets/icons/app_brand.png'

interface NavItemProps {
	id: string
	path?: string
	name: string
}

const renderNavItem = () => {
	return (
		<>
			{navItems.map(({ id, path, name }: NavItemProps) => (
				<Navbar.Link
					key={id}
					css={{ color: '$white' }}
					className={styles.navItem}
				>
					{name}
				</Navbar.Link>
			))}
		</>
	)
}

const mobileNavItem = () => {
	return (
		<>
			{navItems.map(({ id, path, name }) => (
				<Navbar.CollapseItem
					key={id}
					activeColor='primary'
					color='secondary'
					className={styles.navItem}
				>
					{name}
				</Navbar.CollapseItem>
			))}
		</>
	)
}

const Nav = () => {
	const router = useRouter()

	return (
		<Navbar disableBlur={true} disableShadow height={150}>
			<Navbar.Toggle showIn='sm' />
			<Navbar.Brand className={styles.brand} onClick={() => router.push('/')}>
				<Image src={appIcon} alt='app-icon' />
			</Navbar.Brand>
			<Navbar.Content hideIn={'sm'} activeColor={'primary'} variant='underline'>
				{renderNavItem()}
			</Navbar.Content>
			<Navbar.Content className='icon'>
				<MdEmail size={25} color='white' />
				<Button
					rounded
					css={{ color: '$black', textTransform: 'uppercase' }}
					icon={<RiPhoneFill size={20} />}
				>
					Order Now
				</Button>
			</Navbar.Content>
			<Navbar.Collapse>{mobileNavItem()}</Navbar.Collapse>
		</Navbar>
	)
}

export default Nav
