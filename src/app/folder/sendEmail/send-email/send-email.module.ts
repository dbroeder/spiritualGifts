import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendEmailPageRoutingModule } from './send-email-routing.module';

import { SendEmailPage } from './send-email.page';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendEmailPageRoutingModule
  ],
  declarations: [SendEmailPage],
  providers: [EmailComposer]
})
export class SendEmailPageModule {}
