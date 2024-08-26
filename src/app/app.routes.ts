import { Routes } from '@angular/router';
import { UserListComponent } from './features/users-components/user-list/user-list.component';
import { UserDetailsComponent } from './features/users-components/user-details/user-details.component'

export const routes: Routes = [
    {path:'users',component:UserListComponent},
    {path:'user/:id',component:UserDetailsComponent},
    {path:'',redirectTo:'users',pathMatch:'full'},
    


];
