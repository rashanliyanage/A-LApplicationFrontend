import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {User} from './user';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()

export class loginService{
    private id;

    webApi ="http://localhost:3000/api/login";
    private headers = new Headers({'Content-Type' : 'application/json'});
    constructor(private http:Http){}


    loginService(user:User):Promise<User>{
        return this.http.post(this.webApi, JSON.stringify(user), {headers: this.headers})
        .toPromise()
        .then(function(response) {

          return response.json().data as User;
        })
        .catch(function(error) {
          return Promise.reject(error.json().message)
        });

    }


}
