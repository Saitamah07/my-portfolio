import uniqid from 'uniqid';
import { GitHub } from '@mui/icons-material';
import { Launch } from '@mui/icons-material';
import './projectContainer.css';

const ProjectContainer = ({ project }) => {
	const { name, description, stack, sourceCode, livePreview } = project;

	return (
		<div className='project'>
			<h3>{name}</h3>

			<p className='project__description'>{description}</p>
			{stack && (
				<ul className='project__stack'>
					{stack.map((item) => (
						<li key={uniqid()} className='project__stack-item'>
							{item}
						</li>
					))}
				</ul>
			)}

			{sourceCode && (
				<a
					href={sourceCode}
					aria-label='source code'
					className='link link--icon'
				>
					<GitHub />
				</a>
			)}

			{livePreview && (
				<a
					href={livePreview}
					aria-label='live preview'
					className='link link--icon'
				>
					<Launch />
				</a>
			)}
		</div>
	);
};

export default ProjectContainer;
