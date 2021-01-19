export class Section {
    constructor({ initialCards, renderer }, container) {
        this._items = initialCards;
        this._renderer = renderer;
        this._container = container;
    }

    // Содержит публичный метод, который отвечает за отрисовку всех элементов.
    // Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.

    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        });
    }

    addItemPrepend(element) {
        this._container.prepend(element);
    }
    addItemAppend(element) {
        this._container.append(element);
    }
}