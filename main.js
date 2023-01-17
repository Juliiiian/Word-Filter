const fs = require('fs').promises;
const Filter = require('bad-words'),
myFilter = new Filter();
 

async function main() {
    const data = await fs.readFile("./input.txt", 'utf8');
    let cleanedTxt = myFilter.clean(data);
    console.log(cleanedTxt);
    await fs.writeFile("output.txt", cleanedTxt); 
}

main()