import { ProfilePageModule } from './../profile/profile.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedsPageRoutingModule } from './feeds-routing.module';

import { FeedsPage } from './feeds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedsPageRoutingModule,
    ProfilePageModule
  ],
  declarations: [FeedsPage]
  
})
export class FeedsPageModule {}
