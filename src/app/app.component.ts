import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('en-GB');

    // Optionally use browser language
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en-GB|fr/) ? browserLang : 'en-GB');
  }
}
