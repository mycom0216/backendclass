const fs = require('fs');
const readline = require('readline');

// filename 파라메터로 받기
if (process.argv.length < 3) {
    console.log('사용법 : node thisfile.js filename');
    process.exit();
}   
const filename = process.argv[2];

const r1 = readline.createInterface({
    input: process.stdin,               // standard input, terminal(keyboard)
    output: process.stdout              // standard output, terminal(monitor)
});
r1.setPrompt('> ');

r1.prompt();
let input = '';
r1.on('line', buf => {      // Enter 키 입력
    input += buf + '\n';
    r1.prompt();
}).on('close', () => {      // ctrl-D 입력
    fs.writeFile(filename, input, err => {
        if (err)
            console.log(err);
    });
    r1.close();
});
