import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sistema-propiedades-admin';
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
