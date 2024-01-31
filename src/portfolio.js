const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://portfolio-mah.netlify.app/',
  title: 'Mah.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matias Alvarez',
  role: 'Front End Developer',
  description: "Soy Ingeniero De Software con un enfoque especializado en React. Mi pasión por la creación de interfaces de usuario atractivas me ha llevado a aprender continuamente y buscar oportunidades para aplicar mis conocimientos en entornos profesionales.",
  resume: 'Matias',
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
    stack: ['React', 'TailwindCSS', 'Vite'],
    sourceCode: 'https://github.com/Saitamah07/citas_react_vite',
    livePreview: 'https://citas-vet-react-shm.netlify.app/',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
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
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matias279ah@gmail.com',
}

export { header, about, projects, skills, contact }