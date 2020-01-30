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

        request.input("name", "Imie");
        request.input("surname", "Nazwisko");

        /*var id = await request.query('SELECT NEXT VALUE FOR dbo.Increment');
        var result = await request.query('insert into Subject (ID, name, limit) values ('+`${id.recordset[0]['']}`+', @name, @limit)');*/
        await request.query('insert into Student (Name, Surname) values (@name, @surname)  select scope_identity() as ID');

        await conn.close();
    }
    catch ( err ) {
        if ( conn.connected )
            conn.close();
        console.log( err );
    }
}

main();