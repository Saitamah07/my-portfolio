const header = {
	// all the properties are optional - can be left empty or deleted
	homepage: 'https://portfolio-mah.netlify.app/',
	title: 'MAH.',
};

const about = {
	// all the properties are optional - can be left empty or deleted
	name: 'Matias Alvarez',
	role: 'Desarrollador Frontend',
	description:
		'Soy un apasionado por el desarrollo web y me he centrado en aprender las bases del desarrollo frontend. Aunque no tengo mucha experiencia, estoy enfocado en crecer y mejorar mis habilidades. Mi interés principal está en React, una biblioteca JavaScript para construir interfaces de usuario basadas en componentes. Además, he estado explorando Tailwind CSS, un marco de diseño que me permite crear estilos de manera eficiente utilizando clases de utilidad',
	resume: './assets/CV_Matias.pdf',
	social: {
		linkedin: 'https://www.linkedin.com/in/matiasah07/',
		github: 'https://github.com/Saitamah07',
	},
};

const projects = [
	{
		name: 'Todo App',
		description:
			'Aplicación ToDo con React para una experiencia de usuario fluida. Permite gestionar tareas eficientemente, destacando la integración de localStorage para persistencia de listas de tareas incluso después de cerrar la aplicación',
		stack: ['React', 'TailwindCSS', 'Vite'],
		sourceCode: 'https://todo-app-mah.netlify.app/',
		livePreview: 'https://github.com/Saitamah07/todo-app',
	},
	{
		name: 'Cotizador De Criptomonedas',
		description:
			'una aplicación dinámica desarrollada en React con Tailwind CSS, proporcionando precios en tiempo real de monedas de Bitcoin a través de una AP',
		stack: ['React', 'TailwindCSS', 'API'],
		sourceCode: 'https://github.com/Saitamah07/cripto-prices',
		livePreview: 'https://criptoprices-mah.netlify.app',
	},
	{
		name: 'Notion Kanban Board',
		description:
			' Este proyecto fue creado utilizando React y TailwindCSS. Implementa un tablero Kanban interactivo que te permite organizar tus tareas y proyectos visualmente. Algunas de las características clave incluyen',
		stack: ['React', 'Redux', 'TailwindCSS'],
		sourceCode: 'https://github.com/Saitamah07/kanban-board',
		livePreview: 'https://notio-kanban.netlify.app/',
	},
];

const skills = [
	// skills can be added or removed
	// if there are no skills, Skills section won't show up
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Node.js',
	'Vuejs',
	'TailwindCSS',
	'Git',
];

const contact = {
	// email is optional - if left empty Contact section won't show up
	email: 'matias279ah@gmail.com',
};

export { header, about, projects, skills, contact };
