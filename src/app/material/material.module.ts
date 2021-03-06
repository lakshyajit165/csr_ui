import { NgModule } from '@angular/core';


import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




const materialComponents = [
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatChipsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({

    imports: [materialComponents],
    exports: [materialComponents]
  })
export class MaterialModule { }
