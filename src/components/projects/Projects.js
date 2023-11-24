import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full py-20 border-b-[1px] border-b-black"
		>
			<div className="flex justify-center items-center text-center">
				<Title
					title="VISIT MY PORTFOLIO "
					des="My Projects"
				/>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
				<ProjectsCard
					title="Web Development"
					des="Ecommerce Website"
					src={projectOne}
				/>
				<ProjectsCard
					title="Web Development"
					des=" Chat app"
					src={projectTwo}
				/>
				<ProjectsCard
					title="Web development"
					des=" lms elearning "
					src={projectThree}
				/>
			</div>
		</section>
	);
};

export default Projects;
