// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que ira fazer operacões no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// utilizar o objeto de bancos de dados, para nossas operações
db.serialize(() => {

    // com comandos SQL eu vou:

    // 1 criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTERGER PRIMARY KEY AUTOINCRENENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // 2 Inserir dados na 
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);

    `
    db.run(query, {
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"


    })

    // 3 Consultar os dados da tabela

    // 4 Deletar um dado da tabela

})