import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync('package.json'));
pkg.scripts = {start: 'node .'};
delete pkg.devDependencies;
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));