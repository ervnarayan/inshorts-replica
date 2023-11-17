import axios from 'axios';

export const getFeeds = async () => {
    const url = '';
    try{
        return await axios.get(url);
    }catch(error){
        console.log('Error while fetching feed api');
    }
}