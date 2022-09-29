import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StoreListComponent } from './store-list/store-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'adduser', component: UserFormComponent},
  { path: 'store-list', component: StoreListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
