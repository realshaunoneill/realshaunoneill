export const getBadge = (badgeConfig) => {
    return `[![${badgeConfig.name} Badge](https://img.shields.io/badge/${badgeConfig.badgeText}-${badgeConfig.labelBgColor}?style=for-the-badge&logoColor=${badgeConfig.logoColor}&logo=${badgeConfig.logo}&link=${badgeConfig.link})](${badgeConfig.link})`;
}

export const getIcon = (iconConfig, toolsIconSize) => {
    return `<img src="${iconConfig.src}" alt="${iconConfig.alt}" width="${toolsIconSize}" height="${toolsIconSize}" />`;
}

export const getTitle = (size = 2, title) => {
    return `${'#'.repeat(size)} ${title}`;
}

export const getLink = (label, link) => {
    return `[${label}](${link})`;
}

export const getBullet = (text) => {
    return `- ${text}`;
}

export const getCenteredText = (text) => {
    return `<p align="center">${text}</p>`;
}