import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {

  public switchLang(lang: string) {
    this.translate.use(lang);
  }
  constructor(public translate: TranslateService) {
    translate.addLangs(['pl', 'en', 'ua']);
    translate.use('pl');
  }

  ngOnInit(): void {
  }

}
