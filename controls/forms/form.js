class {
    static get inherits() { return ["CanvasUI.Controls.Containers.ContainerControl"]; }
    static get using() { return []; }
    static get manifest() { return []; }
    static get overrides() { return [] }
    constructor(...args) {
        this.base(...args)
        this._displayObject = null;
    }
    initialiseComponent() {
        var self = this,
        displayObject = self.displayObject,
        settingsDialog = Settings.Dialog;
        displayObject.lineStyle();
        displayObject.beginFill(settingsDialog.DialogBackgroundColour, settingsDialog.DialogBackgroundColourAlpha)
        displayObject.drawRect(self.x, self.y,self.width,self.height)
        displayObject.endFill();
        self.displayObject = new PIXI.Graphics();
    }
    get displayObject(){return this._displayObject;}
    set displayObject(value){this._displayObject = value;}
}