export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public timeOfCreation:Date, public upVotes:number, public downVotes:number){
      this.showDescription=false;
    }
  }