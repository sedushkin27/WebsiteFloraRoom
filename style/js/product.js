const thumbnails = document.querySelectorAll('.thumbnail')
if (thumbnails) {
    const mainImage = document.getElementById('mainImage');
    thumbnails.forEach(element => {
        element.addEventListener('click', (e) => {
            mainImage.src = element.src;
        })
    })
}

const mainImage = document.querySelector('.main-image');
if (mainImage) {
    const modalImage = document.getElementById('modalImage');
    const modal = document.querySelector('.modal');
    mainImage.addEventListener('click', (e) => {
        modalImage.src = mainImage.src
        modal.classList.toggle('_active')
    })
}

const model = document.querySelector('.modal')
if (model) {
    model.addEventListener('click', (e) => {
        model.classList.toggle('_active')
    })
}

const sliderContainer = document.querySelector('.container-slider-your-views');
if (sliderContainer) {

    let position = 0; // Начальная позиция
    const slider = document.querySelector('.container-products');
    const productElement = document.querySelector('.product');
    const productWidth = productElement ? productElement.offsetWidth : 0;
    const gap = slider ? parseInt(window.getComputedStyle(slider).gap) || 0 : 0;
    const product = productWidth + gap;

    // Пересчитываем максимальный сдвиг при изменении размеров окна
    const recalculateMaxScroll = () => {
        const totalWidth = slider.children.length * product + gap * 2;
        const visibleWidth = sliderContainer.clientWidth;
        return visibleWidth - totalWidth;
    };

    let maxScroll = recalculateMaxScroll();

    window.addEventListener('resize', () => {
        maxScroll = recalculateMaxScroll();
        // Обновление позиции, если после изменения размеров она выходит за пределы
        if (position < maxScroll) {
            position = maxScroll;
            slider.style.transform = `translateX(${position}px)`;
        }
    });

    const moveSlider = (direction) => {
        // Изменяем позицию с учетом ширины продукта
        position += direction * product;

        // Убедимся, что позиция не превышает допустимые пределы
        if (position > 0) {
            position = 0;
        } else if (position < maxScroll) {
            position = maxScroll;
        }

        slider.style.transform = `translateX(${position}px)`;
    };

    // Назначаем действия на кнопки
    const buttonSliderBack = document.querySelector('.button-back-slider');
    if (buttonSliderBack) {
        buttonSliderBack.addEventListener('click', () => {
            moveSlider(1); // Назад - отрицательное значение
        });
    }

    const buttonSliderForward = document.querySelector('.button-forward-slider');
    if (buttonSliderForward) {
        buttonSliderForward.addEventListener('click', () => {
            moveSlider(-1); // Вперед - положительное значение
        });
    }
}

