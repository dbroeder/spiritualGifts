import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./giftsMain/gifts/gifts.module').then( m => m.GiftsPageModule)
  },
  {
    path: 'gifts',
    loadChildren: () => import('./giftsMain/gifts/gifts.module').then( m => m.GiftsPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'saved-results',
    loadChildren: () => import('./savedResults/saved-results/saved-results.module').then( m => m.SavedResultsPageModule)
  },
  {
    path: 'send-email',
    loadChildren: () => import('./sendEmail/send-email/send-email.module').then( m => m.SendEmailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
