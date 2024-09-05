
// api.js
const API_KEY = 'live_OxvqHCRGE3ftF135yw0vPckMuZYC39KLpNtYfQyYNIBYXBatsZKrMDVVAFHUrzLN';
const BASE_URL = 'https://api.thecatapi.com/v1';

export const fetchCats = async (page = 1) => {
    const response = await fetch(`${BASE_URL}/images/search?limit=10&page=${page}`, {
        headers: {
            'x-api-key': API_KEY
        }
    });
    return response.json();
};

export const postCatVote = async (catId, value) => {
    const response = await fetch(`${BASE_URL}/votes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY
        },
        body: JSON.stringify({
            image_id: catId,
            value: value
        })
    });
    return response.json();
};