import i18n from 'i18next';

export const aboutMeData = () => {
    return data[i18n.resolvedLanguage];
};

export const getResumeLink = () => {
    return resumes[i18n.resolvedLanguage];
};

const resumes = {
    es: 'https://drive.google.com/file/d/1jlVw7xzPPuUhtXQbb9GI4rFeq4Vsa7zK/view?usp=sharing',
    en: 'https://drive.google.com/file/d/1nZFsj1g5zSCKIxs5ZytouT0SZYyiQ-QG/view?usp=sharing',
};

const data = {
    es: {
        jobs: {
            icon: '💼',
            data: [
                {
                    title: 'Senior Software Engineer',
                    location: 'GlobalLogic Argentina',
                    date: 'Febrero 2018 - Marzo 2025',
                },
                {
                    title: 'IT Support',
                    location: 'Universidad Tecnológica Nacional - FRLP',
                    date: 'Junio 2015 - Marzo 2017',
                },
            ],
        },
        education: {
            icon: '🎓',
            data: [
                {
                    title: 'Ingeniería en Sistemas de Información',
                    location: 'Universidad Tecnológica Nacional - FRLP',
                    date: 'Febrero 2013 - Actualidad',
                },
                {
                    title: 'Bachiller en Ciencias Sociales',
                    location: 'Colegio San Cayetano - La Plata',
                    date: 'Marzo 2000 - Diciembre 2012',
                },
            ],
        },
        certifications: {
            icon: '📜',
            data: [
                {
                    title: 'TypeScript: Tu completa guía y manual de mano.',
                    location: 'Udemy',
                    date: 'Julio 2025',
                },
                {
                    title: 'React: de cero a experto (Hooks y MERN)',
                    location: 'Udemy',
                    date: 'Junio 2025',
                },
            ],
        },
    },
    en: {
        jobs: {
            icon: '💼',
            data: [
                {
                    title: 'Senior Software Engineer',
                    location: 'GlobalLogic Argentina',
                    date: 'February 2018 - March 2025',
                },
                {
                    title: 'IT Support',
                    location: 'Universidad Tecnológica Nacional - FRLP',
                    date: 'June 2015 - March 2017',
                },
            ],
        },
        education: {
            icon: '🎓',
            data: [
                {
                    title: ' Information Systems Engineering',
                    location: 'Universidad Tecnológica Nacional - FRLP',
                    date: 'February 2013 - Present',
                },
                {
                    title: 'High School Diploma in Social Sciences',
                    location: 'Colegio San Cayetano - La Plata',
                    date: 'March 2000 - December 2012',
                },
            ],
        },
        certifications: {
            icon: '📜',
            data: [
                {
                    title: 'TypeScript: Your complete guide and user manual.',
                    location: 'Udemy',
                    date: 'July 2025',
                },
                {
                    title: 'React: from zero to expert (Hooks and MERN)',
                    location: 'Udemy',
                    date: 'June 2025',
                },
            ],
        },
    },
};
