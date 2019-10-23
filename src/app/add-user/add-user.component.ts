import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services/services.service';
import Dexie from 'dexie';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  formname: string = 'Add User';

  constructor(private http: HttpClient, private service: ServicesService) { }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  ngOnInit() {

  }



  onSubmit() {
    console.warn(this.profileForm.value);
    //this.service.addFriend(this.profileForm);
  }


}
