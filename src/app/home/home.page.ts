import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  filtro: string;

  constructor(private httpClient: HttpClient) {
    this.users = this.httpClient.get('https://raw.githubusercontent.com/Alinoss2910/HLC_One-PieceJson/master/JSON/MOCK_DATA.json');
  }

  filtrar(a) {
    this.filtro = a
  }
}
