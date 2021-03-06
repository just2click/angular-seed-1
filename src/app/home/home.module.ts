import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { CustomComponentsModule } from '../_common/custom-components/custom-components.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_common/shared/shared.module';

let routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    TranslateModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    CustomComponentsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {
}
