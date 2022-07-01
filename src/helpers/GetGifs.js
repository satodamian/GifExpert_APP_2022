const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FHi4Oy85S4h61SMHERtkOJcpTaS6fJSD&q=${category}&limit=12`;
    // Peticion http
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    
    const gifs = data.map((img)=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    // console.log(data);
    console.log(gifs);
    return gifs;
}

export{
    getGifs,
}