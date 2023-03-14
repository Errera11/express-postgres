const db = require('../db');

const userController = {

    getUsers: async (req, res) => {
        const content = await db.query('SELECT * FROM users');

        return content.rows[0];
    },

    getOneUser: async (req, res) => {
        const id = req.params.id;

        const content = await db.query('SELECT * FROM users WHERE id=$1', id);

        return content.rows[0];
    },

    updateUser: async (req, res) => {
        const {id, name} = req.body;

        const content = await db.query('SELECT * FROM users WHERE id=$1 SET id=$1, name=$2', id, name);

        return content.rows[0];
    },

    createUser: async (req, re) => {
        const {id, name} = req.body;

        const content = await db.query('INSERT INTO users(id, name) VALUES($1, $2)', id, name);

        return content.rows[0];
    },

    deleteUser: async (req, res) => {
        const id = req.params.id;

        const content = await db.query('DELETE FROOM users WHERE id=$1', id);

        return content.rows[0];
    }
}


module.exports = userController;