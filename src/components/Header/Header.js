import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from './HeaderStyles';

const Header = () => (
	<Container>
		<Div1>
			<Link href='/'>
				<a
					style={{
						display: 'flex',
						alignItems: 'center',
						color: '#f1f1f1',
						marginBottom: '5px',
					}}
				>
					<DiCssdeck size='3rem' /> <Span>Portfolio</Span>
				</a>
			</Link>
		</Div1>
		<Div2>
			<li>
				<Link href='#projects'>
					<NavLink>Projets</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#tech'>
					<NavLink>Technos</NavLink>
				</Link>
			</li>
			<li>
				<Link href='#about'>
					<NavLink>À Propos</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons
				href='https://github.com/L0ot3r'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiFillGithub size='3rem' />
			</SocialIcons>
			<SocialIcons
				href='https://linkedin.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiFillLinkedin size='3rem' />
			</SocialIcons>
			<SocialIcons
				href='https://instagram.com'
				target='_blank'
				rel='noopener noreferrer'
			>
				<AiFillInstagram size='3rem' />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
