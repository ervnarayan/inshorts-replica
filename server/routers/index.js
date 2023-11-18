import express from 'express'
import {newsController, menuController} from '../controllers';

const router = express.Router();
router.get('/news', newsController.getNews);
router.get('/menu', menuController.getMenus);

export default router;