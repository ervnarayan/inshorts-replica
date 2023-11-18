import { News } from "../models";
import { FEEDS } from "../constants";
import { CustomErrorHandler } from "../services";
 
const newsController = {
    async getNews(req, res, next){
       try{
        const newsData = await News.find();
        if(!newsData.length){
            await News.insertMany(FEEDS)
        }        
         res.status(200).json(newsData);

       }catch(err){
            return next(CustomErrorHandler.notFound())
       }
    }
}
export default newsController;