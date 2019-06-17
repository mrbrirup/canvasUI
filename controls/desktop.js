class {
    static get inherits() { return ["CanvasUI.Controls.Control"]; }
    static get manifest() {
        return [
            new Mrbr.System.ManifestEntry(Mrbr.System.ManifestEntry.FileTypes.Class, "CanvasUI.Controls.WindowControl"),
            new Mrbr.System.ManifestEntry(Mrbr.System.ManifestEntry.FileTypes.Class, "Mrbr.Collections.Dictionary")
        ]
    }
    constructor(...args) {
        var self = this;
        self.base(...args);
        self.window = new CanvasUI.Controls.WindowControl();
        self._config = args[0].config || {};
        self._pixi = args[0].pixi || {};
        self._transparent = (self._pixi.transparent === true);
        self._backgroundColour = self._pixi.backgroundColour !== undefined ? self.pixi.backgroundColour : 0x000000;
        self._app = new PIXI.Application({ width: self.width, height: self.height, backgroundColor: self.backgroundColour, transparent: self.transparent });
        //self._app = new PIXI.Application({width:800,height: 800, backgroundColor: self.backgroundColour, transparent:self.transparent});           
        document.body.appendChild(self._app.view);
        // self.renderer = self.app.renderer;
        // self.desktopStage = new PIXI.Container();
        // self.desktopStage.interactive = true;
        // self.desktopStage.sortableChildren = true;
        // self.animate = self.fnanimate.bind(self);
        // self.animate();
        this._workingArea = "";
        this._clientArea = "";
        this._displayList = new Mrbr.Collections.Dictionary();
        self.initialiseComponent();

    }
    initialiseComponent() {
        var self = this;
        self.window.on(CanvasUI.Controls.WindowControl.eventNames.resize, self.window_resize.bind(self));
    }
    get displayList() { return this._displayList; }
    set displayList(value) {
        if (value.isTypeOf(Mrbr.Collection.Dictionary)) {
            this._displayList = value;
        }
        else {
            throw `Invalid value for displayList`
        }
    }
    get transparent() { return this._transparent; }
    set transparent(value) { this._transparent = value; }
    get pixi() { return this._pixi; }
    set pixi(value) { this._pixi = value; }
    get app() { return this._app; }
    set app(value) { this._app = value; }
    get workingArea() { return this._workingArea; }
    set workingArea(value) { this._workingArea = value; }
    get clientArea() { return this._clientArea; }
    set clientArea(value) { this._clientArea = value; }
    get htmlContainer() { return this._htmlContainer; }
    set htmlContainer(value) { this._htmlContainer = value; }
    get backgroundColour() { return this._backgroundColour; }
    set backgroundColour(value) { this._backgroundColour = value; }
    get config() { return this._config; }
    set config(value) { this._config = value; }
    relayerDisplayObjects() {
        this.displayList.relayerDisplayObjects();
    }
    displayObjectSelected(sender, args) {
        this.displayList.displayObjectSelected(send, args);
    }
    addDisplayObject(displayObject) {
        this.displayList.addDisplayObject(displayObject);
    }
    fnanimate() {
        var self = this;
        self.renderer.render(self.desktopStage);
        requestAnimationFrame(self.animate);
    }
    window_resize(source, args) {
        this.app.renderer.resize(args.width, args.height);
    }
}