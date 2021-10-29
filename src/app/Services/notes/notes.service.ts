import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class NotesService {


  token: any;
  constructor(private http: HttpService) { }


  url = environment.BaseUrl;


  createNote(token: any, data: any) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.Post('/notes/addNotes', data, true, options);
  }


  GetAllNotes(url: any) {
    return this.http.GetallNotes('/notes/getNotesList');
  }

  GetallNotes(url: any, headers: any) {

    return this.http.Get('/notes/getNotesList', headers);
  }


  updateNote(data: any) {
    const updatData = {
      noteId: data.noteId,
      title: data.title,
      description: data.description
    }
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.Post('/notes/updateNotes', updatData, true, options);
  }

  updateNotes(data: any) {
    return this.updateNote(data);
  }

 // the data trashnotes by POST ******//

  trashNotes(deleteData:any){
  this.token= localStorage.getItem('token')
  let options={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.token
    })
  }
  console.log("options",options);
  return this.http.Post('/notes/trashNotes', deleteData, true,options )
}


archiveNotes(data:any){
  this.token= localStorage.getItem('token')
  let options={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.token
    })
  }
  console.log("options",options);
  return this.http.Post('/notes/archiveNotes', data, true,options )
}


getTrashNoteService(data:any){
    let options = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(options);

    return this.http.getService(this.url+'/notes/getTrashNotesList',true, options);
  }

  
  getArchiveNoteService(){
  let options = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.token
    })
  };
  console.log(options);

  return this.http.getService(this.url+'/notes/getArchiveNotesList',true, options);
}


deleteForEverNotes(deletedData:any){
  this.token= localStorage.getItem('token')
  let options={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.token
    })
  }
  console.log("options",options);
  return this.http.Post('/notes/deleteForeverNotes', deletedData, true,options )
}


changeColorService(reqPayload: any) {
  this.token= localStorage.getItem('token')
  let options={
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':this.token
    })
  }
  console.log("options",options);
  return this.http.Post('/notes/changesColorNotes/', reqPayload, true,options )
}


}


