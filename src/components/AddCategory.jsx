import {useState} from 'react'

// const AddCategoryF = ({setCategories}) => {
const AddCategoryF = ({onNewCategory}) => {
    // Cada componente puede tener sus propios estados (hooks)
    const [inputValue, setInputValue] = useState('');
    // console.log(setCategories);

    // const onInputChange = (e) =>{ Primera forma -> Eventos
    const onInputChange = ({target}) =>{
        // Muestra el dato del input en consola en vivo
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault(); //Evitar refresh 
        // Debe almenos una letra para ejecutar la funcion
        if(inputValue.trim().length<=1) return;
        console.log(inputValue); //Enviar para poder actualizar la inforamcion
        // SetCategories
       
        // onNewCategory((categories)=>[inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }
  return (
    // Mini formulario, manejo del input
    // Properts, "HTML" aunque no son html
    // <form onSubmit={(e)=>onSubmit(e)}>
    <form onSubmit={onSubmit}>
           <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />  
    </form>
    
    
   
  )
}

export {
    AddCategoryF,
}

