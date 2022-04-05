import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Spiritual Gifts Quiz', url: '/folder/giftsMain/gifts', icon: 'gift' },
    { title: 'Saved Results', url: '/folder/savedResults/saved-results', icon: 'save' },
  ];
  constructor() {}
}
