import { GitHub } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { about } from '../../portfolio';
import './about.css';

function About() {
	const { name, role, description, resume, social } = about;

	return (
		<div className='about center'>
			{name && (
				<h1>
					Hola, Soy <span className='about__name'>{name}</span>
				</h1>
			)}

			{role && <h2 className='about__role'>A {role}</h2>}
			<p className='about__desc'>{description && description}</p>

			<div className='about__contact center'>
				{resume && (
					<a href={resume} type='button' className='btn btn--outline'>
						<span>Resume</span>
					</a>
				)}

				{social && (
					<>
						{social.github && (
							<a
								href={social.github}
								aria-label='github'
								className='link link--icon'
							>
								<GitHub />
							</a>
						)}

						{social.linkedin && (
							<a
								href={social.linkedin}
								aria-label='linkedin'
								className='link link--icon'
							>
								<LinkedIn />
							</a>
						)}
					</>
				)}
			</div>
		</div>
	);
}

export default About;
