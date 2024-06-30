const fs = require('fs');

// Lê o arquivo de forma assíncrona
async function read_file(){
  const result = await fs.promises.readFile('exemplo.txt', 'utf8');
  console.log(result);

  console.log('Arquivo LIDO...');
}

read_file();
