export class Robot {
    name = 'C-3PO';

    constructor() {
        console.log('A class constructor');
    }

    hello(): string {
        return `I am ${this.name}`;
    }
}
