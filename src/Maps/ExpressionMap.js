import Default from '../images/default.png';
import Confident from '../images/confident.png';
import Decent from '../images/decent.png';
import Learning from '../images/learning.png';

const expressionMap = {
  default: {
    image: Default,
    speech: 'Hi, my name is Jim. Thanks for visiting. Please click on the icons to the left to get to know me.',
  },
  php: {
    image: Confident,
    speech: 'I use PHP for the backend at my current company all the time!',
    rating: 5
  },
  javascript: {
    image: Confident,
    speech: 'I use javascript at my current work as well as my personal projects all the time!',
    rating: 5
  },
  csharp: {
    image: Learning,
    speech: 'I am currently learning C# and Unity for personal development.',
    rating: 3
  },
  ruby: {
    image: Learning,
    speech: 'Ruby was part of the curriculum at Lighthouse Labs. I have not used it in awhile, but should be able to pick it up quickly!',
    rating: 3
  },
  express: {
    image: Confident,
    speech: 'I use express for my personal projects. Dental Diary uses it as its framework.',
    rating: 5
  },
  laravel: {
    image: Confident,
    speech: 'Laravel is the framework we use at my current company!',
    rating: 5
  },
  codeigniter: {
    image: Decent,
    speech: 'I use codeigniter from time to time, but my current company is moving away from it. I can still navigate through it!',
    rating: 4
  },
  nodejs: {
    image: Decent,
    speech: 'I use Node as the runtime for my personal projects!',
    rating: 4
  },
  html5: {
    image: Confident,
    speech: 'HTML is everywhere, I use it all the time!',
    rating: 5
  },
  css3: {
    image: Confident,
    speech: 'CSS is everywhere, I use it all the time!',
    rating: 5
  },
  jquery: {
    image: Confident,
    speech: 'JQuery pops up from time to time. I do not use it all the time, but I am still very familiar with it!',
    rating: 4.5
  },
  reactjs: {
    image: Confident,
    speech: 'I use React at my current company and for personal projects. This resume uses react! I am also familiar with React Native.',
    rating: 5
  },
  git: {
    image: Decent,
    speech: 'Git is the main version control that I have used. I am familiar with it!',
    rating: 3.5
  },
  webpack: {
    image: Decent,
    speech: 'Most of my experience with webpack has been through my own projects, but I am definitely familiar with it!',
    rating: 3.5
  },
  mysql: {
    image: Decent,
    speech: 'The database management system used at my current work. Still SQL, I am familiar with it!',
    rating: 4
  },
  postgres: {
    image: Decent,
    speech: 'I use postgres as the database management system for my own projects. Still SQL, I am familiar with it!',
    rating: 4
  },
  thanks: {
    image: Default,
    speech: 'Thank you for considering me!',
  }
}

export default expressionMap;