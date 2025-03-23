const express = require('express');
const app = express();
const PORT = 3000;

// Middleware për të lejuar JSON në kërkesat API
app.use(express.json());

// Path kryesore
app.get('/therapy', (req, res) => {
    res.send('API është duke punuar!');
});

// Startimi i serverit
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
