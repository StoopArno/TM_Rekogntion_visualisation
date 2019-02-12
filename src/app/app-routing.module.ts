import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './pagegroups/dashboard/dashboard.component';
import {SearchComponent} from './pagegroups/search/search.component';
import {AccountComponent} from './pagegroups/account/account.component';
import {CameraSettingsComponent} from './pagegroups/camera-settings/camera-settings.component';

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'search', component: SearchComponent},
    {path: 'camera-settings', component: CameraSettingsComponent},
    {path: 'account', component: AccountComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
