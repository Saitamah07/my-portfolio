const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://portfolio-mah.netlify.app/',
  title: 'MAH.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matias Alvarez',
  role: 'Ingeniero De Software',
  description: "Soy un entusiasta ingeniero de software con una profunda pasión por el desarrollo web. Aunque mi trayectoria profesional está en sus inicios, mi dedicación y habilidades técnicas son evidentes en cada línea de código que escribo. Mi enfoque se centra en aprender y crecer constantemente. He dedicado tiempo a proyectos personales donde he explorado diversas tecnologías y metodologías de desarrollo web. Mi amor por la programación y el diseño se refleja en cada proyecto que he emprendido hasta ahora",
  resume: './assets/CV_Matias.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/matiasah07/',
    github: 'https://github.com/Saitamah07',
  },
}

const projects = [
  {
    name: 'Todo App',
    description:
      'Aplicación ToDo con React para una experiencia de usuario fluida. Permite gestionar tareas eficientemente, destacando la integración de localStorage para persistencia de listas de tareas incluso después de cerrar la aplicación',
    stack: ['React','TailwindCSS', 'Vite'],
    sourceCode: 'https://todo-app-mah.netlify.app/',
    livePreview: 'https://github.com/Saitamah07/todo-app',
  },
  {
    name: 'Cotizador De Criptomonedas',
    description:'una aplicación dinámica desarrollada en React con Tailwind CSS, proporcionando precios en tiempo real de monedas de Bitcoin a través de una AP',
    stack: ['React', 'TailwindCSS', 'API'],
    sourceCode: 'https://criptoprices-mah.netlify.app/',
    livePreview: 'https://github.com/Saitamah07/cripto-prices',
  },
  {
    name: 'Project 3',
    description:'',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TailwindCSS',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matias279ah@gmail.com',
}

export { header, about, projects, skills, contact }