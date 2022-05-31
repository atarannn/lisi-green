import  Grid from './js/grid';

export default function galleryEffect() {
    // Preload images then remove loader (loading class) from body
    // new Grid(document.querySelector('.columns'));
    new Grid(document.querySelector('.gallery-container'));
}