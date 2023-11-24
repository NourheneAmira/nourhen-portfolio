/* eslint-disable no-undef */
import React from 'react';
import { FaMailBulk, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Media = () => {
	return (
		<div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
			<div>
				<h2 className="text-base uppercase font-titleFont mb-4">
					Find me in
				</h2>
				<div className="flex gap-4">
					<span className="bannerIcon">
						<a
							href="https://www.linkedin.com/in/nourhenamira/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedinIn />
						</a>
					</span>
					<span className="bannerIcon">
						<a
							href="https://github.com/NourheneAmira"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub />
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Media;
