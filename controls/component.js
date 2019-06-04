class {
    static get inherits() {
        return [
            "Mrbr.System.Object",
            "Mrbr.System.EventEmitter"
        ]
    }
    static get using() { return []; }
    static get manifest() { return []; }
    constructor(...args) {
        this.base(...args)
    }
}