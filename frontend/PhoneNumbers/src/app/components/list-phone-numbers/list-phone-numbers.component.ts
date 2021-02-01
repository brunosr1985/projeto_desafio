import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

import { PhoneNumber } from 'src/app/models/phoneNumber.model';
import { PhoneNumberService } from 'src/app/services/phoneNumber.service';

@Component({
  selector: 'app-list-phone-numbers',
  templateUrl: './list-phone-numbers.component.html',
  styleUrls: ['./list-phone-numbers.component.css']
})
export class ListPhoneNumbersComponent implements OnInit {
  phones: PhoneNumber[];
  constructor(private _phoneNumberService: PhoneNumberService) {

  }

  ngOnInit() {
    this.getPhoneNumbers();
  }

  public getPhoneNumbers() {
    this._phoneNumberService.getPhoneNumbers().subscribe((data: Person[]) => {
      this.phones = data['data'].personObjects;
    });
  }

}
