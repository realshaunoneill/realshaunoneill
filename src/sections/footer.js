import { getCenteredText } from "../utils.js";

const lineBreak = '------------';
const title = getCenteredText(`This <i>README</i> was last updated on ${new Date().toDateString()}`);

export const getContent = () => {
    const subSections = [
        '\n',
        lineBreak,
        title,
    ]

    return subSections.join('\n');
};

export const ORDER = 20;