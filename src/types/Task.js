export default class {
    constructor(description) {
        this.description = description,
        this.id = Math.random(),
        this.concluded = false,
        this.excluded = false
    }
}