// const mysql = require('mysql2');
const sql = require('mssql');
require('dotenv').config();
// Krijo lidhjen me databazën

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false, // Use true if connecting to Azure
        trustServerCertificate: true
    }
};

// Lidhu me databazën
const connectDB = async () => {
    try {
        await sql.connect(dbConfig);
        console.log("Connected to SQL Server");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

module.exports = { connectDB, sql };

module.exports = connection;
