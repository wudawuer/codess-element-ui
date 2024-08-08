const fs = require('fs');
const path = require('path');

const snippetsPath = path.join(__dirname, './snippets');
fs.readdirSync(snippetsPath).forEach((_) => {
  fs.rmSync(path.join(snippetsPath, _));
});

const originPath = path.join(__dirname, './origin');
fs.readdirSync(originPath).forEach((_) => {
  let item = JSON.parse(fs.readFileSync(path.join(originPath, _)).toString());
  let prefixs = [];
  for (let i in item) {
    let prefix = item[i].prefix;
    let body = item[i].body;
    let description = item[i].description;
    if (/^el/.test(prefix)) {
      prefix = prefix.replace(/^el/, '');
      if (prefixs.includes(prefix)) {
        console.log('有重复的prefix', prefix);
      } else {
        prefixs.push(prefix);
        fs.writeFileSync(
          path.join(snippetsPath, prefix + '.md'),
          `## ${prefix}
#### ${i}
${description}
\`\`\`
${body.join('\n')}
\`\`\``,
        );
      }
    } else {
      console.log('有不已el开头的prefix', prefix);
    }
  }
});
