import { NgModule } from '@angular/core';


import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

const materialComponents = [
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule
];

@NgModule({

    imports: [materialComponents],
    exports: [materialComponents]
  })
export class MaterialModule { }
