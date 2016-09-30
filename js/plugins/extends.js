Function.prototype.extends = function(padre) {
    if (padre.constructor == Function) {
        this.prototype = new padre;
        this.prototype.constructor = this;
        this.prototype.parent = padre.prototype;
    } else {
        this.prototype = padre;
        this.prototype.constructor = this;
        this.prototype.parent = Object.getPrototypeOf(padre);
    }
}