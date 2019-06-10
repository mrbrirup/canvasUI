class {
    static get inherits() { return ["CanvasUI.Controls.Component", "Mrbr.Geometry.Rectangle"] }
    static get using() { return ["Mrbr.Geometry.Size"]; }
    constructor(...args) {
        this.base(...args);
        this._clientSize = new Mrbr.Geometry.Size(...args);
        this._clientArea = new Mrbr.Geometry.Rectangle(...args);
    }
    get clientSize() {
        return this._clientSize;
    }
    set clientSize(value) {
        if (value.mrbrAssemblyTypeName && value.isTypeOf(Mrbr.Geometry.Size)) {
            this._clientSize = value;
        }
    }
    get clientArea() {
        this._clientArea.reposition(this.x, this.y).resize(this.width, this.height)
        return this._clientArea;
    }
    set clientArea(value) {
        if (value.mrbrAssemblyTypeName && value.isTypeOf(Mrbr.Geometry.Rectangle)) {
            this._clientArea = value;
        }
    }
}