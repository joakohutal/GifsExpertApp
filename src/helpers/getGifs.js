export const getGift = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=byrA4UhP8uge3wLVu8AqesWt3SxtNldv&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
    
}