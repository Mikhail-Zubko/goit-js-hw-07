import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onShowFullImg);

gallery.insertAdjacentHTML("beforeend", createGalarryMarkup(galleryItems));

function createGalarryMarkup(pictures) {
  const markup = pictures
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>`;
    })
    .join("");
  return markup;
}

const showFullPic = basicLightbox.create(`<img src="">`, {
    onShow: instance => {
        window.addEventListener("keydown", onCloseImg);
    },
    onClose: instance => {
        window.removeEventListener("keydown", onCloseImg);
    }
})

console.log(basicLightbox.create(`<img src="">`));

function onShowFullImg(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
    showFullPic.element().querySelector("img").src = e.target.dataset.source;
    showFullPic.show()
}

function onCloseImg(e) {
  if (e.code === "Escape") {
      showFullPic.close()
      return
  }
}
/*
Создание и рендер разметки по массиву данных galleryItems
 и предоставленному шаблону элемента галереи.
Реализация делегирования на ul.gallery и получение
 url большого изображения.
Подключение скрипта и стилей библиотеки модального окна
 basicLightbox. Используй CDN сервис jsdelivr и добавь 
 в проект ссылки на минифицированные (.min) файлы библиотеки.
Открытие модального окна по клику на элементе галереи.
 Для этого ознакомься с документацией и примерами.
Замена значения атрибута src элемента <img> в модальном 
окне перед открытием. Используй готовую разметку модального
 окна с изображением из примеров библиотеки basicLightbox.
*/