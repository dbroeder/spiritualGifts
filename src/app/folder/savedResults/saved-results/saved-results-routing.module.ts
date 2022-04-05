import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedResultsPage } from './saved-results.page';

const routes: Routes = [
  {
    path: '',
    component: SavedResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedResultsPageRoutingModule {}
