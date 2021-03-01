import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

const material = [
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
];

@NgModule({
    imports: [
      material
    ],
    exports: [
      material
    ]
  })
  export class MaterialModule { }