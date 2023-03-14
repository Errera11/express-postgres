const db = require('../db');

const userController = {

    getUsers: async (req, res) => {
        const content = await db.query('SELECT * FROM users');

        res.send(content.rows[0]);
    },

    getOneUser: async (req, res) => {
        const id = req.params.id;

        const content = await db.query('SELECT * FROM users WHERE id=$1', [id]);
        res.send(content.rows[0]);
    },

    updateUser: async (req, res) => {
        const {id, name} = req.body;

        const content = await db.query('UPDATE users SET name=$2 WHERE id=$1 RETURNING * ', [id, name]);

        res.send(content.rows[0]);
    },

    createUser: async (req, res) => {
        const {id, name} = req.body;

        const content = await db.query('INSERT INTO users(id, name) VALUES($1, $2) RETURNING *', [id, name]);

        res.send(content.rows[0]);
    },

    deleteUser: async (req, res) => {
        const id = req.params.id;

        const content = await db.query('DELETE FROM users WHERE id=$1', [id]);

        res.send(content.rows[0]);
    }
}


module.exports = userController;