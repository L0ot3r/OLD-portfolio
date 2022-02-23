import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import {
  IconsContainerList,
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider />
		<SectionTitle main>Technologies</SectionTitle>
		<SectionText>
			Mon expérience acquise au fil des projets durant mon apprentissage me
			permet de mieux appréhender les différentes technologies dans le domaine
			du Front-End, tout en ayant assez de connaissances dans le Back-end pour
			pouvoir proposer une prestation unique et un projet complet.
		</SectionText>
		<List>
			<ListItem>
				<IconsContainerList>
					<DiReact size='3rem' />
					<SiNextdotjs size='2.5rem' />
				</IconsContainerList>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Expérience avec
						<br />
						React.js et Next.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiFirebase size='3rem' />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Expérience avec
						<br />
						Node.js et les Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiZend size='3rem' />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Expérience avec
						<br />
						Outils comme Figma, AI <br />
						etc...
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
	</Section>
);

export default Technologies;
