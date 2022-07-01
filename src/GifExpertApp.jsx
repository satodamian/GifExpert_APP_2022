import {useState} from 'react'
import { AddCategoryF, GifGridF } from './components';
// import { GifGridF } from './components/GifGrid';


const GifExpertAppF = () => {
    // Hook para mantener el estado
    const [categories, setCategories] = useState(['Dragon Ball Z']);
    const onAddCategory = (newCategory) =>{
        // Si es que existe una categoria ya dentro de la api, entonces ya no lo colocara
        if(categories.includes(newCategory)) return;
        // console.log(newCategory);
        // No hay que mutar el estado de un objeto o valor
        setCategories([newCategory, ...categories]);
        
        }

  return (
    <>
        {/* TITULO */}
        <h1>GifExpertAppF</h1>
        {/* input */}
        {/* Manda una nueva property */}
       <AddCategoryF 
            // setCategories={setCategories}
            onNewCategory={(value)=>onAddCategory(value)}
        />

        {/* Listado de Gif */} 
        {/* Retornando un objeto */}
            {categories.map((category)=>
                (<GifGridF key={category} category={category}/>))
            }
        
            {/* GIF ITEM */}
    </>
    
  )
}

export{

    GifExpertAppF,
}
