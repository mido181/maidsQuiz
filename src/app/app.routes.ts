import { Routes } from '@angular/router';
import { UserListComponent } from './features/users-components/user-list/user-list.component';
import { UserDetailsComponent } from './features/users-components/user-details/user-details.component'

export const routes: Routes = [
{path:'',redirectTo:'userslist',pathMatch:'full'},
{path:'userslist',component:UserListComponent},
{path:'userslist/:id',component:UserDetailsComponent}



];
