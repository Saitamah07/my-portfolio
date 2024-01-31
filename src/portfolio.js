const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'http://localhost:5173/',
  title: 'Mah.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matias Alvarez',
  role: 'Front End Developer',
  description: "Soy un desarrollador frontend junior autodidacta con un enfoque especializado en React. Mi pasión por la creación de interfaces de usuario atractivas me ha llevado a aprender continuamente y buscar oportunidades para aplicar mis conocimientos en entornos profesionales.",
  resume: 'Matias',
  social: {
    linkedin: 'https://www.linkedin.com/in/matiasah07/',
    github: 'https://github.com/Saitamah07',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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