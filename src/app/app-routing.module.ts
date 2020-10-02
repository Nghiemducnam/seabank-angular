import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UseTableComponent} from './components/use-table/use-table.component';

const routes: Routes = [
  {
    path: '',
    component: UseTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
