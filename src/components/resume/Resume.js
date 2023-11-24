import Title from '../layouts/Title';

import Skills from './Skills';
import hi from '../../assets/hi.pdf';

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
				<div className="flex justify-center items-center text-center">
					<a
						href={hi}
						download="NourhenAMIRA"
						target="_blank"
						rel="noreferrer"
					>
						<button className="w-50 h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
							Download
							MY CV
						</button>
					</a>
				</div>
			</div>

			<div>
				<Skills />
			</div>
		</section>
	);
};

export default Resume;
