import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DataReadPage } from './data-read';

@NgModule({
  declarations: [
    DataReadPage,
  ],
  imports: [
    IonicPageModule.forChild(DataReadPage),
  ],
})
export class DataReadPageModule {}
