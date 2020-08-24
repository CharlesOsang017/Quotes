export class Quote {
    public showDescription: boolean;
    constructor(public id: number,
        public name: string,
        public Author: string,
        public completeDate: Date,
        public identity: string) {
        this.showDescription = false;
    }
}
