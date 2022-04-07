import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gifts',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },{
    path: 'results',
    loadChildren: () => import('./folder/results/results/results.module').then(m => m.ResultsPageModule)
  },{
    path: 'send-email',
    loadChildren: () => import('./folder/sendEmail/send-email/send-email.module').then(m => m.SendEmailPageModule)
  },{
    path:'gifts',
    loadChildren: ()=> import('./folder/giftsMain/gifts/gifts.module').then(m=> m.GiftsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
