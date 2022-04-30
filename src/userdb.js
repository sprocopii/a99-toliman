
"use strict";

const Database = require('better-sqlite3');

const userdb = new Database('user.db');

const stmt = userdb.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='userlist';`
    );
// Define row using `get()` from better-sqlite3
let row = stmt.get();
// Check if there is a table. If row is undefined then no table exists.
if (row === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your user database appears to be empty. I will initialize it now.');
// const sql commands
//email address, password, number  of times accessed
    const sqlInit = `
        CREATE TABLE userlist ( id INTEGER PRIMARY KEY, username TEXT, password TEXT);
    `;
//executes
    userdb.exec(sqlInit);
// Echo information about what we just did to the console.
    console.log('Your USER database has been initialized with a new table and two entries containing empty test1 and test2');
} else {
// Since the database already exists, echo that to the console.
    console.log('Database exists.')
}
// Export all of the above as a module so that we can use it elsewhere.
module.exports = userdb