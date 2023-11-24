import Title from '../layouts/Title';
import { FaLinkedinIn } from 'react-icons/fa';
import Skills from './Skills';

const Resume = () => {
	return (
		<section
			id="resume"
			className="w-full py-20 border-b-[1px] border-b-black"
		>
			<div className="flex justify-center items-center text-center">
				<Title des="Professional skills" />
			</div>

			<div>
				<Skills />
			</div>
		</section>
	);
};

export default Resume;
