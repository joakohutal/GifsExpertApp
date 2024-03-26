import { useEffect, useState } from 'react'
import { getGift } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setimages] = useState([]);
        const [isLoading, setisLoading] = useState(true);
    const getImages = async () => {
        const newImages = await getGift(category);
        setimages(newImages);
        setisLoading(false)
    }
    
    useEffect(() => {
        getImages(category);
    }, [])
    return {
        images,
        isLoading 
        
    }
}



