import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AlbumStorePage } from '../../e2e/app.po';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  private _albumUrl: string = "../assets/album.json";
  private response: Response;

  constructor(private _http: Http) { }


  getAlbum(id: number){
    return this._http.get(this._albumUrl).map(this.response.json());
  }


}
