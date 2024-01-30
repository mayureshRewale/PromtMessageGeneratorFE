import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmgHomeComponent } from './pmg-home/pmg-home.component';

const routes: Routes = [
  {path : '', component : PmgHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
