import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsersManagerComponent} from './usersManager/usersManager.component';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import {UsernameFilterPipe} from './sharedPipes/usernameFiliter.pipe';
import { FirstNameFilterPipe } from './sharedPipes/firstNameFilter.pipe';
import { LastNameFilterPipe } from './sharedPipes/lastNameFilter.pipe';
import { StatusFilterPipe } from './sharedPipes/statusFilter.pipe';
import {MyOwnCustomMaterialModule} from '../CustomMaterialModule.module.ts';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'usersManager' },
            { path: 'adminDashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'usersManager', component: UsersManagerComponent },
           
        ]
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, MyOwnCustomMaterialModule,RouterModule.forChild(routes)],
    exports: [RouterModule],
     declarations: [
         UsersManagerComponent,
         FirstNameFilterPipe,
         UsernameFilterPipe,
         LastNameFilterPipe,
         StatusFilterPipe
    ]
})
export class LayoutRoutingModule {}
