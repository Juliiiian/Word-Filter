const fs = require('fs').promises;
const Filter = require('bad-words'),
myFilter = new Filter();

const args = process.argv.slice(2);
let inputFile = null;
let outputFile = null;

for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
        case "-i":
            inputFile = args[i + 1];
            break;
        case "-o":
            outputFile = args[i + 1];
            break;
    }
}

if (!inputFile || !outputFile) {
    console.error("Both input and output files must be specified");
    process.exit(1);
}

inputFile = `./text/input/${inputFile}`;
outputFile = `./text/output/${outputFile}`;

console.log(`Input file: ${inputFile}`);
console.log(`Output file: ${outputFile}`);

async function main() {
    const data = await fs.readFile(inputFile, 'utf8');
    let cleanedTxt = myFilter.clean(data);
    await fs.writeFile(outputFile, cleanedTxt);
}

main()