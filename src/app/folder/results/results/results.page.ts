import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GiftsService } from 'src/service/gifts.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  gifts
  constructor(private giftsProv:GiftsService,private router: Router) {
    this.gifts=giftsProv.getGifts();
   }

  ngOnInit() {
  }

  save(){

  }

  send(){
    this.router.navigate(['/send-email'])
  }

}
