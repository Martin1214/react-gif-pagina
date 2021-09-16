export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q= ${encodeURI(category)} &limit=5&api_key=1RVb7ZLauGL6fkCQsGZ4YWVcSoAB9Oi8`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gisfs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gisfs;
}