export class Quote {
    public showDescription: boolean;
    constructor(public id: number,
        public name: string,
        public Author: string,
        public completeDate: Date) {
        this.showDescription = false;
    }
}
