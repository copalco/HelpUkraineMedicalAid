import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public switchLang(lang: string) {
    this.translate.use(lang);
  }
  constructor(public translate: TranslateService) {
    translate.addLangs(['pl', 'en', 'ua']);
    translate.use('pl');
  }

  ngOnInit(): void {
  }

  title = 'angular-signal';
}
