API = "cf50811eed6bd9c66088f4516c57b8c9";
BASE_URL = "https://api.themoviedb.org/3";  

const basicFetch : async: (endpoint) => {
    const req = await fetch(endpoint);
};
 
export default {
    gethomeList : async () => {
        return [
            {
                slug: "originals",
                title:"Originals",
                items: []
            },
            {
                slug: "trending",
                title: "Trending",
                items: []
            },
            {
                slug: "the-best",
                title: "The best",
                items: []
            },
            {
                slug: "horror",
                title: "Horror",
                items: []
            }
        ]
    } 
};
