const mysql = require('mysql2');

// Krijo lidhjen me databazën
const connection = mysql.createConnection({
    host: 'localhost',      // Adresa e serverit MySQL
    user: 'root',          // Përdoruesi i MySQL
    password: 'therapypass',          // Fjalëkalimi i MySQL (vendos nëse ke një)
    database: 'therapy_portal' // Emri i databazës
});

// Lidhu me databazën
connection.connect((err) => {
    if (err) {
        console.error('❌ Gabim në lidhjen me databazën:', err);
        return;
    }
    console.log('✅ Lidhja me MySQL u realizua me sukses!');
});

module.exports = connection;
