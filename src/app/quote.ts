export class Quote {
   showAthor: boolean;
   constructor(public id: number,public name: string, public author: string){
       this.showAthor=false;
   }
}
