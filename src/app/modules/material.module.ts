import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";

const MATERIAL = [
  MatToolbarModule,
  MatIconModule,
  MatSelectModule
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
