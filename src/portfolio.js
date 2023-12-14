const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://manojbalaga.netlify.app/',
  title: 'Portfolio.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Manoj Balaga',
  role: 'Front End Engineer',
  description:
    "ReactJS enthusiast with 6 months of experience. Explore my projects to see how I turn ideas into impactful web solutions. Passionate about clean code and creative solutions, I'm ready to bring your vision to life. Let's create something extraordinary together!",
  resume: 'https://drive.google.com/file/d/1qo7FUgEA3fIJuyitHCxMR05ZGDBRx_6_/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/manoj-balaga/',
    github: 'https://github.com/manureact',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Weather App',
    description:
      ' Your instant weather companion, providing real-time updates, hourly forecasts, and personalized alerts for a seamless planning experience.',
    stack: ['Css', 'Javascript', 'React'],
    sourceCode: 'https://github.com/manureact/weather-app',
    livePreview: 'https://dailyweatherforecastbydev.netlify.app/',
  },
  {
    name: 'LinkedIn-Clone',
    description:
      "Connect, network, and showcase your professional journey on this sleek platform inspired by LinkedIn's features.",
    stack: ['Css', 'Javascript', 'React'],
    sourceCode: 'https://github.com/manureact/linkedin_clone',
    livePreview: 'https://linkedinclonebydev.netlify.app/',
  },
  {
    name: 'Landing Page',
    description:
    "An enticing food app landing page showcasing a diverse array of culinary delights with seamless navigation and user-friendly features.",
    stack: ['Css', 'Javascript', 'React'],
    sourceCode: 'https://github.com/manureact/landing_page_app',
    livePreview: 'https://landingpagebydev.netlify.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'manureact35@mail.com',
}

export { header, about, projects, skills, contact }
