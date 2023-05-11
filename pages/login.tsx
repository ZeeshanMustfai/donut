import {
	Button,
	Card,
	Container,
	Input,
	Loading,
	Spacer,
	Text,
} from '@nextui-org/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Router from 'next/router'
import Error from '@/components/Error'

const url = process.env.NEXT_PUBLIC_API_URL

const Login = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm()

	const onSubmit = (data: any) => {
		if (data) {
			Router.push('/')
		}
	}

	return (
		<Container md>
			<div className='loginContainer'>
				<Card className='loginCard'>
					<Text size={'$2xl'}>Login</Text>
					<Spacer y={1.5} />
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input
							fullWidth
							bordered
							labelPlaceholder='email'
							color='primary'
							{...register('email', { required: true })}
							name='email'
						/>
						{errors.email && <Error>Email is required</Error>}
						<Spacer y={1.5} />
						<Input.Password
							bordered
							labelPlaceholder='password'
							color='primary'
							{...register('password', { required: true })}
						/>
						{errors.password && <Error>Password is required</Error>}
						<Spacer y={1.5} />
						<div className='submit'>
							<Button bordered auto rounded type='submit'>
								Login
								{loading && (
									<Loading color='primary' size='xs' css={{ pl: '10px' }} />
								)}
							</Button>
						</div>
						<Spacer y={1.5} />
					</form>
				</Card>
			</div>
		</Container>
	)
}

export default Login
