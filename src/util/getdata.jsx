export const getData = async (categoria) =>{
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoria}`);
    const data = await response.json();
    return data.results;
}