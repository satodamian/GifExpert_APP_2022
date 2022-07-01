
import { GifGridItemF } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGridF = ({category}) => { 

    const {images,isLoading} = useFetchGifs(category);

    console.log({isLoading});

    

  return (
    <>
        <h3>{category}</h3>
        {/* <LoadingMessage isLoading={isLoading} /> */}
        {
            /* isLoading ? (<h2>Cargando...</h2>)
            : null */
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className='card-grid'>
        {/* Crear un list item basados en images, puedo desestructura el valor que le asigno como mi parametro img, y sacar los atributos de id y title */}
            {
               images.map((image)=>(
                    <GifGridItemF 
                        key={image.id}
                        title={image.title}
                        url={image.url}
                    // Para sesumir codigo pero apliar el operador ... para mandar todos mis atributs de mi data y no mencionar cada uno
                    // {...image} en vez de la linea 24,25,26
                    />
               ))
            }
        </div>
    </>
  )
}

export{
    GifGridF,
}


