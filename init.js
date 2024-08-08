const fs = require('fs');
const path = require('path');

/**
 * Windows 系统中的保留设备名称，不能用作文件或文件夹的名称
 * TODO
 */
const reservedNames = [/^CON$/i, /^PRN$/i, /^AUX$/i, /^NUL$/i, /^COM[1-9]$/i, /^LPT[1-9]$/i];

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
      if (reservedNames.some((_) => _.test(prefix))) {
        prefix = prefix + '_';
      }
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
