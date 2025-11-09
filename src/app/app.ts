import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from './components/header/header';
import { Calculator } from './components/calculator/calculator';

import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeRu);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainHeader, Calculator],
  providers: [{ provide: localeRu, useValue: 'ru' }],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app');
}
