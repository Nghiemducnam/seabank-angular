import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-seabank';

  public changeLanguage(code: string) {
    localStorage.setItem('locale', code);
    window.location.reload();
  }
}
