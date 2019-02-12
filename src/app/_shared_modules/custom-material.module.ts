import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatBottomSheetModule, MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule, MatIconModule, MatInputModule,
    MatMenuModule,
    MatSidenavModule, MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatMenuModule,
        MatSidenavModule,
        LayoutModule,
        MatBottomSheetModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatSidenavModule,
        LayoutModule,
        MatBottomSheetModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
    ],
    declarations: []
})
export class CustomMaterialModule {
}
