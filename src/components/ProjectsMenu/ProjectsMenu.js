import React, { useState } from 'react';
import { BtnProjects, Container, Menu, MenuEffect } from './ProjectsMenuStyles';

const ProjectsMenu = ({ setStateSlug }) => {
	return (
		<Container>
			<Menu>
				<li>
					<MenuEffect>
						<BtnProjects onClick={() => setStateSlug('cours')}>
							Cours
						</BtnProjects>
					</MenuEffect>
				</li>
				<li>
					<MenuEffect>
						<BtnProjects onClick={() => setStateSlug('perso')}>
							Perso
						</BtnProjects>
					</MenuEffect>
				</li>
				<li>
					<MenuEffect>
						<BtnProjects onClick={() => setStateSlug('pro')}>Pro</BtnProjects>
					</MenuEffect>
				</li>
			</Menu>
		</Container>
	);
};

export default ProjectsMenu;
