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
					des="LMs elearning"
					src={projectOne}
					href="https://drive.google.com/file/d/1YZvK0_YeGwMh7Z1fjwOh4Gznf33ZyG0f/view?usp=sharing"
					hrefgit=""
				/>
				<ProjectsCard
					title="Web Development"
					des=" etablissement scolaire"
					src={projectTwo}
					href="https://drive.google.com/file/d/1XGP0btDoPdXTIZS3UN9wG1sv10AbdQXI/view?usp=drive_link"
					hrefgit="https://github.com/NourheneAmira/pidev-springboot-api"
				/>
				<ProjectsCard
					title="Web development"
					des=" ERP "
					src={projectThree}
					href=""
					hrefgit=""
				/>
			</div>
		</section>
	);
};

export default Projects;
