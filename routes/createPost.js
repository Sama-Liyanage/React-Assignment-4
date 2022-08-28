const express = require('express');
const app = express();
const router = express.Router();

const createPosts = require('../models/createPost.model')

app.use(express.json);

router.get('/', async (req, res) => {
    try {
        const createPost = await createPosts.find();
        res.json(createPost);
    } catch (err) {
        res.send("Error : " + err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const createPost = await createPosts.findById(req.params.id)
        res.json(createPost)
    } catch (err) {
        res.send('Err: ' + err)
    }
})


router.post('/', async (req, res) => {
    const createPost = new createPosts(
        {
            userID: req.body.userID,
            date: req.body.date,
            time: req.body.time,
            tittle: req.body.tittle,
            body: req.body.body,
        }
    )

    try {
        const response = await createPost.save();
        res.json(response);
    } catch (err) {
        res.send("Error : " + err);
    }
})

router.put('/:id', async (req, res) => {
    const createPOst = await createPosts.findById(req.params.id);
    createPOst.userID = req.body.userID,
    createPOst.date = req.body.date,
    createPOst.time = req.body.time,
    createPOst.tittle = req.body.tittle,
    createPOst.body = req.body.body


    try {
        const response = await createPOst.save();
        res.json(response);
    } catch (err) {
        res.send("Error : " + err);
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const createPost = await createPosts.findById(req.params.id)
        const response = await createPost.remove()

        res.json(response)
    } catch (err) {
        res.send('Err: ' + err)
    }
})


module.exports = router