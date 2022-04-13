const { resolve } = require('path');
const { readdir } = require('fs').promises;

const fs = require('fs/promises');
const path = require('path');


const ALIGNMENT = {
  "L" : ":---",
  "M" : ":-----:",
  "R" : "---:"
}


async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

async function isExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

async function writeFile(filePath, data) {
  try {
    const dirname = path.dirname(filePath);
    const exist = await isExists(dirname);
    if (!exist) {
      await fs.mkdir(dirname, {recursive: true});
    }
    
    await fs.writeFile(filePath, data, 'utf8');
  } catch (err) {
    throw new Error(err);
  }
}

function alignSwitch(align) {
  return(ALIGNMENT[align])
}

module.exports = {
    getFiles,
    writeFile,
    alignSwitch
}