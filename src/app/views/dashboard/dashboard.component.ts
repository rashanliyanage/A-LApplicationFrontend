import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {SubjectService} from '../../service/subjectService';
import { FlashMessagesService } from 'ngx-flash-messages';
import { NgProgress } from 'ngx-progressbar';
class SubjectAndStream{
  subject:string;
  stream:string;

}

@Component({
  templateUrl: 'dashboard.component.html',
  providers:[SubjectService]
})
export class DashboardComponent implements OnInit {

  // select subject and related stream object
selectedSubject:SubjectAndStream ={
        subject:"",
        stream:""
       }

existingSubjectArray =[];

// subject array
subjectArray =[
  {"subject":""},
  {"subject":"APPLIED MATHS"},
  {"subject":"PURE MATHS"},
  {"subject":"CHEMISTY"},
  {"subject":"PHYSICS"},
  {"subject":"BIO SCIENCE"},
  {"subject":"ACCOUNTING"},
  {"subject":"BUSINESS"},
  {"subject":"ECONOMIC"}
]
//stream array
streamArray =[
  {"stream":""},
{"stream":"SCIENCE" },
{"stream":"COMMERCE" }
]

constructor(private router:Router,private subjectService:SubjectService,private flashMessagesService: FlashMessagesService,public progress: NgProgress){}

        ngOnInit(){
          this.getAllSubject();
        }

  //select subject is chought
 onSelectSubject(selectedType){
      for (var i = 0; i < this.subjectArray.length; i++)
       {
        if (this.subjectArray[i].subject == selectedType) {
          this.selectedSubject.subject = selectedType;
        }
      }
    }


// select stream is chought
 onSelectStream(selectedType){ 
      for (var i = 0; i < this.streamArray.length; i++)
        {
        if (this.streamArray[i].stream== selectedType) {
          this.selectedSubject.stream = selectedType;
        }
      }
    }

    // add new subject and stream method
 addNewSubject(){
   if(this.selectedSubject.stream ==""|| this.selectedSubject.stream==""){
    this.flashMessagesService.show('some feild are not fill', {
      classes: ['alert', 'alert-danger'], 
      timeout: 2000,
    });
   }else if(this.selectedSubject.subject!="" && this.selectedSubject.stream!=""){
    this.progress.start();
    this.subjectService.addNewSubject(this.selectedSubject)
    .then(response=>{

          this.progress.done();
        if(response.message =="internal server error"){
          this.flashMessagesService.show('internal server error', {
            classes: ['alert', 'alert-danger'],
            timeout: 3000, 
          });
        }

        if(response.message =="subject is successfully added"){
          this.flashMessagesService.show('successfully add', {
            classes: ['alert', 'alert-primary'], 
            timeout: 3000,
          });
          this.ngOnInit();
        }

    })
    .catch(err=>{
      this.flashMessagesService.show('response error or internal server error', {
        classes: ['alert', 'alert-danger'], 
        timeout: 3000, 
      });

    });
  }
      
    }// end of addNewSubject method


  getAllSubject(){
    this.subjectService.getAllSubject()
    .then(response=>{
      this.existingSubjectArray.length =0;
      response.subjects.forEach(subject => {
          this.existingSubjectArray.push(subject);
        
      });
      console.log(response);
      
    })
    .catch(err=>{
      this.flashMessagesService.show('response error or internal server error', {
        classes: ['alert', 'alert-danger'], 
        timeout: 3000, 
      });
    })

  }
  toBeDeletedSubject ={
    subjectId:''
  }

  deleteSubject(subjectId){
    this.toBeDeletedSubject.subjectId =subjectId;
    this.progress.start();
    this.subjectService.deleteSubject(this.toBeDeletedSubject)
    .then(response=>{
      if(response.message=="successfully delete"){
        this.progress.done();
        this.getAllSubject();
        this.flashMessagesService.show('successfully deleted', {
          classes: ['alert', 'alert-primary'], 
          timeout: 3000, 
        });
      }

    })
    .catch(err=>{

      this.flashMessagesService.show('response error or internal server error', {
        classes: ['alert', 'alert-danger'], 
        timeout: 3000, 
      });
    });


  }

  }
