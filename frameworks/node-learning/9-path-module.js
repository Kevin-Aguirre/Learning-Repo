const path = require('path')

console.log(__dirname)

// separator property that returns a platform-specific spearator
console.log(path.sep)

// method taht joins a sequence of path segments using platform-specific separator as teh delimiter and results in a normalized path 

const filePath = path.join('/content', 'subfolder','test.txt')
console.log(filePath)
// results in : /content/subfolder/test.txt

// to get the basename, ex. only wanting test.txt, you can use basename method

const base = path.basename(filePath);
console.log(base)

// absolute path 

const absPath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absPath)