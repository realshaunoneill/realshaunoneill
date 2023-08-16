import { getTitle } from "../utils.js";

const title = getTitle(2, `👀 Quick Statistics`);
const description = `Please don't judge me 😂 My work commits don't count`

const statsContent = `
<table>
  <tr>
    <td align="center" style="padding=0;width=50%;">
      <img align="center" style="padding=0;" src="https://github-readme-stats.vercel.app/api/?username=realshaunoneill&show_icons=true&title_color=4F8CC9&text_color=9f9f9f&bg_color=151515&hide_border=true&icon_color=4F8CC9&hide_title=true&count_private=true" />
    </td>
    <td align="center" style="padding=0;width=50%;">
      <img align="center" style="padding=0;" src="https://github-readme-stats.vercel.app/api/top-langs/?username=realshaunoneill&layout=compact&title_color=4F8CC9&text_color=9f9f9f&bg_color=151515&hide_border=true&icon_color=4F8CC9&hide=visual%20basic&count_private=true" />
    </td>
  </tr>
</table>
`;

export const getContent = () => {
  const subSections = [
    title,
    description,
    statsContent,
  ]

  return subSections.join('\n');
};

export const ORDER = 5;