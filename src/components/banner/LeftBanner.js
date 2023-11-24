import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';
import hi from '../../assets/hi.pdf';

const LeftBanner = () => {
	const [text] = useTypewriter({
		words: [
			'Professional Coder.',
			'FULL-STACK JUNIOR (SPRING / ANGULAR) .',
			'Backend developper.',
		],
		loop: true,
		typeSpeed: 20,
		deleteSpeed: 10,
		delaySpeed: 2000,
	});
	return (
		<div className="w-full  flex flex-col gap-20">
			<div className="flex flex-col gap-10">
				<h4 className=" text-lg font-normal">
					WELCOME TO MY WORLD
				</h4>
				<h1 className="text-6xl font-bold text-white">
					Hi, I'm{' '}
					<span className="text-designColor capitalize">
						Nourhen AMIRA
					</span>
				</h1>
				<h2 className="text-4xl font-bold text-white">
					a <span>{text}</span>
					<Cursor
						cursorBlinking="false"
						cursorStyle="|"
						cursorColor="#ff014f"
					/>
				</h2>
				<p className="text-base font-bodyFont leading-6 tracking-wide">
					Hello, my name is Nourhen
					AMIRA 👋. I am a computer
					engineer, passionate about the
					field of development,
					especially FULL STACK
					development (Spring/Angular),
					and databases (MongoDB and
					SQL). I am very cooperative,
					autonomous, and flexible. I
					would like to further deepen
					my knowledge and skills and
					contribute to the success of
					your projects.
				</p>
			</div>
			{/* Media */}
			<Media />
			<div className="w-full">
				<a
					href={hi}
					download="Example-PDF-document"
					target="_blank"
					rel="noreferrer"
				>
					<button className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
						Download .pdf file
					</button>
				</a>
			</div>
		</div>
	);
};

export default LeftBanner;
