import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedResultsPageRoutingModule } from './saved-results-routing.module';

import { SavedResultsPage } from './saved-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedResultsPageRoutingModule
  ],
  declarations: [SavedResultsPage]
})
export class SavedResultsPageModule {}
