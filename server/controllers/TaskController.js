import { selectAllTasks, insertTask, deleteTask } from '../models/Task.js'
import { ApiError } from '../helper/ApiError.js'

const getTasks = async (req, res,next) => {
 try {
    const result = await selectAllTasks()
    return res.status(200).json(result.rows || [])
 } catch (error) {
    return next(error)
 }
}

const postTask = async (req, res,next) => {
 const { task } = req.body

 try {
    if (!task || !task.description || task.description.trim().length === 0) {
        return next(new ApiError('Task description is required', 400))

        // const error = new Error('Task description is required')
        // error.status = 400
        // return next(error)
    }
    const result = await insertTask(task.description)
    return res.status(201).json({id: result.rows[0].id, description: result.rows[0].description})
 } catch (error) {
    return next(error)
 } 
}


const removeTask = async (req, res, next) => {
 //const pool = openDb()
 const { id } = req.params
 //console.log(`Deleting task with id: ${id}`)

 try {
    if (result.rowCount === 0) {
        return next(new ApiError('Task not found', 404))

        // const error = new Error('Task description is required')
        // error.status = 400
        // return next(error)
    }
    const result = await deleteTask()
    return res.status(200).json({id:id})
 } catch (error) {
    return next(error)
 }
//  pool.query('delete from task WHERE id = $1',
//     [id], (err, result) => {
//     if (err) {
//         console.error(err.message)
//         return next.err
//     }
//     if (result.rowCount === 0) {
//         const error = new Error('Task not found')
//         error.status = 404
//         return next(error)
//     }
//     return res.status(200).json({id:id})
//     })
}

export { getTasks, postTask, removeTask }

