import axios from 'axios';

export const getFeeds = async () => {
    const url = `${process.env.REACT_APP_API}/news`;
    try{
        return await axios.get(url);
    }catch(error){
        console.log('Error while fetching feed api');
    }
}

export const getMenu = async () => {
    const url = `${process.env.REACT_APP_API}/menu`;
    try{
        return await axios.get(url);
    }catch(error){
        console.log('Error while fetching feed api');
    }
}