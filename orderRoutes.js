const express = require('express');
const { sql } = require('../db');
const router = express.Router();

// Get all orders
router.get('/orders', async (req, res) => {
    try {
        const result = await sql.query("SELECT * FROM orders");
        res.json(result.recordset);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get order by ID
router.get('/orders/:id', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Orders WHERE id = ${req.params.id}`;
        if (result.recordset.length === 0) return res.status(404).json({ message: "Order not found" });
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create a new order
router.post('/orders', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        await sql.query`INSERT INTO Orders (name, email, age) VALUES (${name}, ${email}, ${age})`;
        res.status(201).json({ message: "Order created successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update a order
router.put('/orders/:id', async (req, res) => {
    const { name, email, age } = req.body;
    try {
        await sql.query`UPDATE Order SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${req.params.id}`;
        res.json({ message: "Order updated successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a order
router.delete('/orders/:id', async (req, res) => {
    try {
        await sql.query`DELETE FROM Order WHERE id = ${req.params.id}`;
        res.json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
