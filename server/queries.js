//res.send AND res.json
//res.json(users.rows)

const pool = require('./db')

const getUsers = async (req, res, next) => {
    
    try{
        const users = await pool.query("SELECT * FROM users")
        res.json(users.rows)
    }catch(error){
        next(error)
    }

}

const getUserById = async (req, res, next) => {

    try{

        const {id} = req.params
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id])

        if(result.rows.length === 0) return res.status(404).json({
            message: "Task not found"
        })

        res.json(result.rows[0])

    }catch(error){

        next(error)

    }

}

const createUser = async (req, res, next) => {

    const {name, email} = req.body
    
    try{
        const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email])

        res.json(result.rows[0])
        
    }catch(error){
        //res.json({ error: error.message })
        next(error)
    }

}

const deleteUser = async (req, res, next) => {
    
    const {id} = req.params

    try{

        const result = await pool.query("DELETE FROM users WHERE id = $1", [id])

        if (result.rowCount === 0) return res.status(404).json({
            message: "Users not found"
        })

        return res.sendStatus(204);

    }catch(error){
        next(error)
    }

}

const updateUser = async (req, res, next) => {

    try{

        const {id} = req.params;
        const {name, email} = req.body;

        const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", [name, email, id])

        if (result.rows.length === 0) return res.status(404).json({
            message: "Users not found"
        })

        return res.json(result.rows[0])

    }catch(error){
        next(error)
    }

}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}