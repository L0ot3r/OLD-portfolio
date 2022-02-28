import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Bienvenu sur <br />
				Mon Portfolio Personnel
			</SectionTitle>
			<SectionText>
				Prestaverse a été créé avec pour objectifs de coupler ma passion pour
				les technologies et le code, qui me fascinent depuis ma decouverte de
				l'informatique dans mon enfance, à mon envie de fournir le service dont
				vous avez besoin pour le développement de votre activité.
			</SectionText>
			<Button
				onClick={() =>
					window.open('https://github.com/L0ot3r', '_blank', 'noopener,noreferrer')
				}
			>
				En savoir plus
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
