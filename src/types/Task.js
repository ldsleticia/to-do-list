export default class {
    constructor(description) {
        this.description = description,
        this.id = Math.random() * 100,
        this.concluded = false,
        this.excluded = false
    }
}