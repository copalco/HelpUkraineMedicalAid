import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

const MATERIAL = [
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: [
    ...MATERIAL
  ],
  exports: [
    ...MATERIAL
  ]
})

export class MaterialModule {

}
