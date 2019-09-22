export class Quote {
  public showDescription: boolean;
  constructor(public id: number,public description: string,public name: string, public completeDate: Date, upvotes:number,downvotes:number){
    this.showDescription=false;
    

  }
}