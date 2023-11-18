import express from 'express'

const router = express.Router();

router.get('/news', (req, res) => {
    res.send('Router working');
})


export default router;