import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NewService {
  BACKEND_URL = environment.url;
  loginSub: Subscription;
  newOrder = {
    creatorEmail: '',
    status: 'PENDING',
    dateCreated: null,
    carrier: {},
    shipperOrReciever: {},
    startingRate: '',
    truckType: '',
    weight: null,
    loadDescription: '',
    specialRequest: '',
    photos: [],
    broadcastRadius: null,
    PUDate: '',
    PUAddressOne: '',
    PUAddressTwo: '',
    PUCity: '',
    PUState: '',
    PUZip: '',
    DLDate: '',
    DLAddressOne: '',
    DLAddressTwo: '',
    DLCity: '',
    DLState: '',
    DLZip: '',
  }

  constructor(
    private http: HttpClient
  ) { }

  createNewOrder() {
    return this.http.post(`${this.BACKEND_URL}/api/shipper/orders/create-order`,
    {
      creatorEmail: this.newOrder.creatorEmail,
      status: 'PENDING',
      dateCreated: this.newOrder.dateCreated,
      carrier: this.newOrder.carrier,
      truckType: this.newOrder.truckType,
      weight: this.newOrder.weight,
      loadDescription: this.newOrder.loadDescription,
      specialRequest: this.newOrder.specialRequest,
      photos: this.newOrder.photos,
      broadcastRadius: this.newOrder.broadcastRadius,
      PUDate: this.newOrder.PUDate,
      PUAddressOne: this.newOrder.PUAddressOne,
      PUAddressTwo: this.newOrder.PUAddressTwo,
      PUCity: this.newOrder.PUCity,
      PUState: this.newOrder.PUState,
      PUZip: this.newOrder.PUZip,
      DLDate: this.newOrder.DLDate,
      DLAddressOne: this.newOrder.DLAddressOne,
      DLAddressTwo: this.newOrder.DLAddressTwo,
      DLCity: this.newOrder.DLCity,
      DLState: this.newOrder.DLState,
      DLZip: this.newOrder.DLZip,
    });
  }
}
