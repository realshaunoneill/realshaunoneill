import { getBadge, getLink, getTitle } from '../utils.js';

const title = getTitle(2, `Hey there, I'm ${getLink(`Shaun O'Neill!`, 'https://shaunoneill.com')} 👋`);
const descriptionItems = [
`I'm currently a software engineer at **${getLink('Rapid7', 'https://www.rapid7.com')}** based in 🇮🇪 Dublin.`,
`⚡ I have experience working with a wide range of technologies, primarily including React, Node, and Python.`,
`Being a fast learner, I am always eager to learn new skills and explore new technologies.`,
`I am a strong believer in the power of teamwork and collaboration, and I am always looking for opportunities to work with others to build something great.`,
];

const badgeConfigs = [
    {
        name: 'Twitter',
        badgeText: '@realshaunoneill',
        labelBgColor: '1DA1F1',
        logoColor: 'white',
        logo: 'Twitter',
        link: 'https://twitter.com/realshaunoneill',
    },
    {
        name: 'LinkedIn',
        badgeText: 'Shaun&nbsp;O\'Neill',
        labelBgColor: '0077B5',
        logoColor: 'white',
        logo: 'LinkedIn',
        link: 'https://www.linkedin.com/in/shaun-oneill/',
    },
    {
        name: 'Instagram',
        badgeText: `@ThatSexyAudi`,
        labelBgColor: 'E4405F',
        logoColor: 'white',
        logo: 'LinkedIn',
        link: 'https://www.instagram.com/thatsexyaudi/',
    },
    {
        name: 'Github',
        badgeText: `@realshaunoneill`,
        labelBgColor: 'black',
        logoColor: 'white',
        logo: 'Github',
        link: 'https://github.com/realshaunoneill',
    },
];

const badges = badgeConfigs.reduce((result, config) => result + ' ' + getBadge(config), '');

const tldrTitle = getTitle(3, `TL;DR ✍️`);
const tldrDescription = 'Because who actually has time to read that wall of text? 😂';
const tldrItems = [
    '💻 Self taught, full stack developer living in **Ireland**',
    '🧐 Always willing to learn new things all the time, and work in teams',
    `👨‍💻 Most of my projects are available on my ${getLink('Github', 'https://github.com/realshaunoneill')}`,
    '💬 Always down to chat! Contact me on one of the platforms listed above!',
];

export const getContent = () => {
    const subSections = [
        title,
        badges,
        descriptionItems.join(' '),
        '\n',
        tldrTitle,
        tldrDescription,
        tldrItems.reduce((result, fact) => result + `\n - ${fact}`, ''),
    ]

    return subSections.join('\n');
};

export const ORDER = 1;