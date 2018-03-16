import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class SubjectService{

    constructor(private http: Http,private router: Router) { }
    private headers = new Headers({'Content-Type' : 'application/json'});
    web_api_addNewSubject ='https://salty-crag-20823.herokuapp.com/api/admin/subject/addNewSubject'
    web_api_getAllSubject = 'https://salty-crag-20823.herokuapp.com/api/admin/subject/getExixtSubject';
    web_api_deleteSubject = 'https://salty-crag-20823.herokuapp.com/api/admin/subject/deleteSubject'
    addNewSubject(selectedSubject){
        return this.http.post(this.web_api_addNewSubject,selectedSubject,{headers: this.headers})
        .toPromise()
        .then(response=>{
            console.log(response);
            return response.json();
        })
        .catch(err=>{
            //return err;
        });

    }


    getAllSubject(){
        return this.http.get(this.web_api_getAllSubject,{headers :this.headers})
        .toPromise()
        .then(response=>{
           return response.json();

        })
        .catch(response=>{

        });
    }

    deleteSubject(subjectId){
        return this.http.post(this.web_api_deleteSubject,subjectId,{headers:this.headers})
        .toPromise()
        .then(response=>{
            return response.json();
        })
        .catch(err=>{

            
        })
        ;


    }
}