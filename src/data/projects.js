import calendar1 from '../assets/calendar1.png';
import calendar2 from '../assets/calendar2.png';
import calendar3 from '../assets/calendar3.png';
import journal1 from '../assets/journal1.png';
import journal2 from '../assets/journal2.png';
import journal3 from '../assets/journal3.png';
import heroes1 from '../assets/heroes1.png';
import heroes2 from '../assets/heroes2.png';
import heroes3 from '../assets/heroes3.png';

const projects = [
    {
        title: 'Calendar App 📅',
        description: 'calendarAppDescription',
        images: [calendar1, calendar2, calendar3],
        technologies: [
            'js',
            'html5',
            'css3',
            'react',
            'redux',
            'reactrouter',
            'bootstrap5',
            'mongodb',
            'mongoose',
            'expressjs',
            'nodejs',
        ],
        repo_url: 'https://github.com/joaquin-fernandez/mern-calendar',
        demo_url: 'https://mern-calendar-backend-hybs.onrender.com',
    },
    {
        title: 'Journal App 📕',
        description: 'journalAppDescription',
        images: [journal1, journal2, journal3],
        technologies: [
            'js',
            'html5',
            'css3',
            'react',
            'redux',
            'reactrouter',
            'materialui',
            'firebase',
        ],
        repo_url: 'https://github.com/joaquin-fernandez/journal_app',
        demo_url: 'https://journal-app-lgl1.onrender.com',
    },
    {
        title: 'Heroes App 🦸‍♂️',
        description: 'heroesAppDescription',
        images: [heroes1, heroes2, heroes3],
        technologies: ['js', 'html5', 'css3', 'react', 'reactrouter'],
        repo_url: 'https://github.com/joaquin-fernandez/heroes_app',
        demo_url: '',
    },
];

export const getProjects = () => {
    return projects;
};
