import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PhoneNumberService {
    API_URL = 'http://localhost:5000';
    constructor(private httpClient: HttpClient) { }
    getPhoneNumbers() {
        return this.httpClient.get(`${this.API_URL}/api/Person`);
    }
}
