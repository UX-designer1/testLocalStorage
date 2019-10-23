import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorage, JSONSchema } from '@ngx-pwa/local-storage';
import { switchMap } from 'rxjs/operators';
import { ServicesService } from './services/services.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'LocalStorage';


  constructor(private storage: LocalStorage, private service: ServicesService) { }

  ngOnInit() {


  }



}
