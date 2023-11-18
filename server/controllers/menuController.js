import { Menu } from "../models";
import { NAV_LINKS } from "../constants";
import { CustomErrorHandler } from "../services";

const menuController = {
    async getMenus(req, res, next){
        try{
            const menuData = await Menu.find();
            if(!menuData.length){
                Menu.insertMany(NAV_LINKS);
            }
            res.status(200).json(menuData);
        }catch(error){
            return next(CustomErrorHandler.notFound());
        }
    }
}

export default menuController;