class {
    static get inherits() {
        return [
            "Mrbr.System.Object",
            "Mrbr.System.EventEmitter"
        ]
    }
    static get manifest() { return [new Mrbr.System.ManifestEntry(Mrbr.System.ManifestEntry.FileTypes.Class, "Mrbr.System.Timers")] }
    constructor(...args) {
        var self = this;
        self.base(...args);
        const fnDebounce = Mrbr.System.Timers.debounce(self.window_resize.bind(self), 50, false);
        window.addEventListener('resize', fnDebounce);
    }
    dispose() { var self = this; window.removeEventListener('resize', self.window_resize.bind(self)); }
    static get width() { return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; }
    static get height() { return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; }
    static get size() { return { width: this.width, height: this.height }; }

    window_resize(event) {
        var ctrlWin = CanvasUI.Controls.WindowControl, self = this;
        self.emit(CanvasUI.Controls.WindowControl.eventNames.resize, self, { width: ctrlWin.width, height: ctrlWin.height })
    }
    static get eventNames() {
        return {
            "resize": "windowControl_resize"
        }
    }
}
