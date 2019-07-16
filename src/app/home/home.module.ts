import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { TabsPage } from '../tabs/tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '', component: HomePage,
        children: [
          { path: '', loadChildren: '../tabs/tabs.module#TabsPageModule' }
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
