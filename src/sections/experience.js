import {
    getTitle,
    getLink,
} from '../utils.js';

const title = getTitle(2, `📚 Experience`);
const description = `
Currently, I am working as a software engineer at ${getLink('Rapid7', 'https://www.rapid7.com')}, where I have the opportunity to contribute to building robust and secure software solutions. 
At Rapid7, I am constantly challenged to explore new technologies and collaborate with talented individuals, fostering my growth as a engineer.
`

export const getContent = () => {
    const subSections = [
        title,
        description,
    ]

    return subSections.join('\n');
};

export const ORDER = 2;