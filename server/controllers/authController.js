const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Database = require('../models/Database');

// Database connection
const db = new Database('localhost', 'root', 'root', 'nestegg');

const authController = class AuthController {
	async register(req, res) {
		const { username, password } = req.body;
		if (!username || !password) {
			return res.status(400).send('Username and password are required');
		}
		try {
			const hashedPassword = await bcrypt.hash(password, 10);
			const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
			const result = await db.userQuery(query, [username, hashedPassword]);
			res.status(201).send('User created');
		} catch (error) {
			console.error(error);
			res.status(500).send('Error creating user');
		}
	}

	async login(req, res) {
		const { username, password } = req.body;
		if (!username || !password) {
			return res.status(400).send('Username and password are required');
		}
		try {
			const query = `SELECT * FROM users WHERE username = ?`;
			const result = await db.userQuery(query, [username]);

			if (result.length === 0) {
				return res.status(400).send('User not found');
			}

			const user = result[0];
			const match = await bcrypt.compare(password, user.password);

			if (match) {
				const token = jsonwebtoken.sign({ id: user.id }, 'secret', { expiresIn: '1h' });
				res.status(200).json({ token });
			} else {
				res.status(400).send('Invalid password');
			}
		} catch (error) {
			console.error(error);
			res.status(500).send('Login error');
		}
	}
}
