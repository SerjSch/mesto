export class Section {
    constructor({ items, renderer }, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }

    renderItems() {
        const allCardsforRender = this._items.map(item =>
            this._renderer(item)
        )
        this.addItem(allCardsforRender)
    }

    addItem(element) {
        if (Array.isArray(element)) {
            element.forEach(item =>
                this._container.append(item)
            )
        } else {
            this._container.prepend(element);
        }
    }
}