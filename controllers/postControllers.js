
const db = require("../db");

const postController = {
    getPosts: async(req, res) => {
        const content = await db.query("SELECT * FROM posts");

        res.send(content.rows);

    },

    createPost: async(req, res) => {
        const {title, content, user_id} = req.body;
        const x = await db.query("INSERT INTO posts(title, content, user_id) VALUES($1, $2, $3) RETURNING *", [title, content, user_id]);

        res.send(x.rows[0])
    },

    deletePost: async(req, res) => {
        const id = req.params.id;

        const content = await db.query("DELETE FROM posts WHERE id=$1", [id]);
        res.send();
    },
}

module.exports = postController;