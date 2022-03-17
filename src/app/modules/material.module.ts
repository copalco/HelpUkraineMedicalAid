import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

const MATERIAL = [
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatButtonToggleModule
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
