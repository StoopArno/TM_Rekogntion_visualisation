import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './_shared_modules/custom-material.module';
import {DashboardComponent} from './pagegroups/dashboard/dashboard.component';
import {SearchComponent} from './pagegroups/search/search.component';
import {CameraSettingsComponent} from './pagegroups/camera-settings/camera-settings.component';
import {AccountComponent} from './pagegroups/account/account.component';
import {NavbarComponent} from './_shared_components/navbar/navbar.component';
import {NavbarMobileComponent} from './_shared_components/navbar-mobile/navbar-mobile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddCameraComponent} from './pagegroups/camera-settings/add-camera/add-camera.component';
import {Router, RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        SearchComponent,
        CameraSettingsComponent,
        AccountComponent,
        NavbarComponent,
        NavbarMobileComponent,
        AddCameraComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CustomMaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
    ],
    entryComponents: [
        AddCameraComponent,
    ],
    providers: [],
    bootstrap: [AppComponent, RouterModule]
})
export class AppModule {
}
