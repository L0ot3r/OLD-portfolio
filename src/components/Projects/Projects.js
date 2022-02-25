import React, { useState } from 'react';

import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ProjectsMenu from '../ProjectsMenu/ProjectsMenu';

const Projects = () => {
	const [stateSlug, setStateSlug] = useState('cours');

	return (
		<Section id='projects'>
			<SectionDivider />
			<SectionTitle main>Projets</SectionTitle>
			<ProjectsMenu setStateSlug={setStateSlug}/>
			<GridContainer>
				{projects.map(
					({ id, image, title, description, tags, source, visit, slug }) =>
						slug === stateSlug && (
							<BlogCard key={id}>
								<Img src={image} />
								<TitleContent>
									<HeaderThree title>{title}</HeaderThree>
									<Hr />
								</TitleContent>
								{/* <CardInfo>{description}</CardInfo> */}
								{/* <Hr /> */}
								<div>
									<TitleContent>Stack</TitleContent>
									<TagList>
										{tags.map((tag, i) => (
											<Tag key={i}>{tag}</Tag>
										))}
									</TagList>
									<div>
										<UtilityList>
											<ExternalLinks
												href={source}
												target='_blank'
												rel='noopener noreferrer'
											>
												Code
											</ExternalLinks>
											<ExternalLinks
												href={visit}
												target='_blank'
												rel='noopener noreferrer'
											>
												View
											</ExternalLinks>
										</UtilityList>
									</div>
								</div>
							</BlogCard>
						)
				)}
			</GridContainer>
		</Section>
	);
};

export default Projects;
