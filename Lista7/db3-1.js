const mssql = require('mssql')

var dbConfig = {
    server: "localhost\\MSSQLSERVER",
    database: "Students",
    user: "sa",
    password: "1234",
    port: 1433,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
    }
};

async function main() {
    var conn = new mssql.ConnectionPool(dbConfig);
    try {
        await conn.connect();
        
        var request = new mssql.Request(conn);

        await request.query('update Subject set limit=60 where limit<60');

        await conn.close();
    }
    catch ( err ) {
        if ( conn.connected )
            conn.close();
        console.log( err );
    }
}

main();