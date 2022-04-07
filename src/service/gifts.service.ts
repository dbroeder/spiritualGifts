import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {
  private gifts=[new SumResult("Wisdom"),new SumResult("Teaching"),new SumResult("Shepherding"),new SumResult("Prophecy"),new SumResult("Mercy"),new SumResult("Leadership"),new SumResult("Knowledge"),new SumResult("Intercession"),new SumResult("Hospitality"),new SumResult("Helps"),new SumResult("Giving"),new SumResult("Faith"),new SumResult("Evangelism"),new SumResult("Encouragement"),new SumResult("Discernment"),new SumResult("Administration")]

  constructor() { }

  indySum(index,value){
    this.gifts[index].sumScore+=value;
  }

  sort(){
    this.gifts.sort((a,b)=>{
      return b.sumScore-a.sumScore;
    })
  }

  getGifts(){
    return this.gifts;
  }

  rankGifts(){
    this.sort();
    for(let i =0;i<this.gifts.length;i++){
      this.gifts[i].rank=i+1;
    }
  }

}


class SumResult{
  category:string;
  sumScore=0;
  rank:number;
  constructor(cat:string){
    this.category=cat;
  }
}