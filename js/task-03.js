const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const imageGallery = images
  .map(
    image =>
      `<li><img class="gallery__image" src=${image.url} width = "300px" alt='${image.alt}'></img></li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', imageGallery);

gallery.style.display = 'flex';
gallery.style.gap = '50px';
gallery.style.listStyle = 'none';
gallery.style.justifyContent = 'space-between';
gallery.style.marginTop = '100px';
