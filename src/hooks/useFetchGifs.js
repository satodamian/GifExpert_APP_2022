import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

// UN HOOK ES SOLO UNA FUNCION QUE RETORNA A ALGO
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }
    
    useEffect(()=>{
        getImages();
    },[])
  return {
    images: images,
    isLoading: isLoading,
  }
}

