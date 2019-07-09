import {observable, decorate} from 'mobx';
const uuidv1 = require("uuid/v1");

class Cell {
    value = "";
    result = "";
    error = "";
    RClass = "";
    name = "";
    hasImage = false;
    constructor(value, result) {
        this.id = uuidv1();
        this.value = value;
        this.result = result;
        this.lastUpdate = new Date().getTime();
    }
}

decorate(Cell, {
    value: observable,
    result: observable,
    name: observable,
    lastUpdate: observable,
    hasImage: observable,
    error: observable,
    RClass: observable
})

export default Cell;
