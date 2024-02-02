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
    name: 'Citas Vet',
    description:
      'Aplicacion para Gestionar el alta de unos pacientes en un Veterinaria',
    stack: ['React','TailwindCSS', 'Vite'],
    sourceCode: 'https://github.com/Saitamah07/citas_react_vite',
    livePreview: 'https://citas-vet-react-shm.netlify.app/',
  },
  {
    name: '',
    description:'',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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