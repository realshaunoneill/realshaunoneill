import fetch from 'node-fetch';

import {
    getLink,
    getTitle,
} from '../utils.js';

const fetchUserRepos = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/realshaunoneill/repos`);
        const repos = await response.json();

        return repos;
    } catch (error) {
        console.error('Error fetching repositories:', error.message);
        return [];
    }
};

const fetchMostRecentRepo = (repos) => {
    const mostRecentRepo = repos.reduce((result, repo) => {
        const repoDate = new Date(repo.updated_at);
        const resultDate = new Date(result.updated_at);

        return repoDate > resultDate ? repo : result;
    }, repos[0]);

    return mostRecentRepo;
};

const getRepoInfo = (repos, repoName) => {
    const repo = repos.find(repo => repo.name === repoName);

    return `${repo.description} ${repo.stargazers_count > 0 ? ` - ${repo.stargazers_count}⭐️` : ''}`;
};

const title = getTitle(2, `🔭 Projects`);
const featuredDescription = `Here's a quick run down of some of the projects I'm working on / some of the teams I'm working with:`;

const projectsFooter = `
> I tend to pick up a lot of projects as time passes, so this list is not exhaustive! :sweat_smile:
> You can see more by exploring ${getLink('my repositories', 'https://github.com/realshaunoneill/repositories')}
`;

export const getContent = async () => {
    try {
        const repos = await fetchUserRepos();
        const mostRecentRepo = fetchMostRecentRepo(repos);

        const mostRecentDescription = `
- Recently, I've been working on ${getLink(mostRecentRepo.name, mostRecentRepo.url)}.\n
    **${mostRecentRepo.description}**\n
It's probably still a work in progress, but I'm always looking for feedback! :smile:
        `;

        const projects = [
            `${getLink('DotFiles', 'https://github.com/realshaunoneill/dotfiles')} - ${getRepoInfo(repos, 'dotfiles')}`,
            `${getLink('Cloudflare-DDNS', 'https://github.com/realshaunoneill/cloudflare-ddns')} - ${getRepoInfo(repos, 'cloudflare-ddns')}`,
            `${getLink('Docker Log Tailer', 'https://github.com/realshaunoneill/docker-log-tailer')} - ${getRepoInfo(repos, 'docker-log-tailer')}`,
            `${getLink('Fake Social', 'https://github.com/realshaunoneill/FakeSocial')} - ${getRepoInfo(repos, 'FakeSocial')}`,
        ];

        const subSections = [
            title,
            mostRecentDescription,
            '\n',
            featuredDescription,
            projects.reduce((result, fact) => result + `\n - ${fact}`, ''),
            projectsFooter,
        ]

        return subSections.join('\n');
    } catch (error) {
        console.log('Error generating projects content', error);
    }
};

export const ORDER = 4;