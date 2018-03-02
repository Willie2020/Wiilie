import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatDividerModule, MatListModule, MatDialog, MatCard, MatSnackBar,
     MatSlider } from '@angular/material';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSidenavModule, MatIconModule } from '@angular/material';
import { MatSliderModule, MatMenuModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material';
import {MatTooltipModule} from '@angular/material' ;

import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatMenu } from '@angular/material/menu/typings/menu-directive';


@NgModule({

    imports: [MatButtonModule, MatToolbarModule, MatDividerModule, MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatCardModule, NgbModule, BsDropdownModule.forRoot(), NgbModule.forRoot(), MatSidenavModule, MatIconModule, 
    MatSnackBarModule, MatSliderModule, MatMenuModule ],

    exports: [MatButtonModule,  MatToolbarModule, MatDividerModule, MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule,
        MatCardModule, NgbModule, MatSidenavModule, MatIconModule, MatSnackBarModule, MatTooltipModule,MatSliderModule,MatMenuModule ]

})



export class MaterialModule { }


