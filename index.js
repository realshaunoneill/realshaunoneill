import fs from 'fs';
import markdownIt from 'markdown-it';

const FILENAME = 'README.md';

const md = markdownIt({
  html: true,
  linkify: true,
  breaks: true,
});

const getMarkdownContent = async () => {
  try {
    const sections = [];
    for await (const file of await fs.promises.readdir(`./src/sections`)) {
      if (file.startsWith('_')) {
        continue;
      }

      const section = await import(`./src/sections/${file}`);
      if (typeof section.getContent !== 'function' || typeof section.ORDER !== 'number') {
        continue;
      }

      console.log(`Generating section - ${file}`);
      sections.push(section);
    }

    sections.sort((a, b) => a.ORDER - b.ORDER);
    const sectionsContent = await Promise.all(sections.map(async (section) => await section.getContent()));

    return md.render(sectionsContent.join('\n'));
  } catch (error) {
    console.log('An error has occurred getting markdown content', error);
    throw error;
  }
};

(async () => {
  try {
    /* Write README.md */
    const markdownContent = await getMarkdownContent();

    await fs.promises.writeFile(FILENAME, markdownContent);

    console.log(`Markdown content generated and written to ${FILENAME}`);
  } catch (error) {
    console.error('Error occurred, not writing new README:', error);
  }
})();