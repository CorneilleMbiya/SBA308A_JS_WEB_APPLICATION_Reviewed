// gallery.js
import { fetchCats, postCatVote } from './api.js';

const galleryContainer = document.getElementById('gallery');
let currentPage = 1;

const renderCats = async () => {
    const cats = await fetchCats(currentPage);
    galleryContainer.innerHTML = '';
    cats.forEach(cat => {
        const img = document.createElement('img');
        img.src = cat.url;
        img.alt = 'Cat Image';
        img.addEventListener('click', () => handleVote(cat.id));
        galleryContainer.appendChild(img);
    });
};

const handleVote = async (catId) => {
    await postCatVote(catId, 1);
    alert('Thank you for voting!');
};

document.getElementById('next').addEventListener('click', () => {
    currentPage++;
    renderCats();
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderCats();
    }
});

renderCats();