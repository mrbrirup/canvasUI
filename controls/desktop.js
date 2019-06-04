class {
    static get inherits() { return ["CanvasUI.Controls.Control"]; }
    constructor(...args) {
        var self = this;
        self.base(...args)

        // self.app = new PIXI.Application();
        // document.body.appendChild(self.app.view);
        // self.renderer = self.app.renderer;
        // self.desktopStage = new PIXI.Container();
        // self.desktopStage.interactive = true;
        // self.desktopStage.sortableChildren = true;
        // self.animate = self.fnanimate.bind(self);
        // self.animate();
        this._workingArea = "";
        this._clientArea = "";
        this._htmlContainer = "";
        this._backgroundColour = "";
    }
    get workingArea(){return this._workingArea;}
    set workingArea(value){this._workingArea = value;}
    get clientArea(){return this._clientArea;}
    set clientArea(value){this._clientArea = value;}
    get htmlContainer(){return this._htmlContainer;}
    set htmlContainer(value){this._htmlContainer = value;}
    get backgroundColour(){return this._backgroundColour;}
    set backgroundColour(value){this._backgroundColour = value;}
    // relayerDisplayObjects() {
    //     this.displayList.relayerDisplayObjects();
    // }
    // displayObjectSelected(sender, args) {
    //     this.displayList.displayObjectSelected(send, args);
    // }
    // addDisplayObject(displayObject) {
    //     this.displayList.addDisplayObject(displayObject);
    // }
    // fnanimate() {
    //     var self = this;
    //     self.renderer.render(self.desktopStage);
    //     requestAnimationFrame(self.animate);
    // }
}