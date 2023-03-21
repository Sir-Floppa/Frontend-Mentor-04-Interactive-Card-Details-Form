import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFormComponent } from './card-form/card-form.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'card-form' },
  {
    path: '',
    children: [
      { path: 'card-form', pathMatch: 'full', component: CardFormComponent },
      { path: 'success', pathMatch: 'full', component: SuccessScreenComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
