import express from 'express'
import newsController from '../controllers/newsController';

const router = express.Router();

router.get('/news', newsController.getNews);


export default router;