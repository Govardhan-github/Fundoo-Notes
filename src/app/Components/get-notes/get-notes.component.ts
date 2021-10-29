import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NotesService } from '../../Services/notes/notes.service'

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
  token: any;
  notesArray: any = []
  window: any;
  
  constructor(private note: NotesService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.note.GetAllNotes( this.token).subscribe((notes:any) => {
    let notesArr = notes.data.data;
    notesArr.reverse();
    this.notesArray=notesArr.filter((noteData:any)=>{
      return  noteData.isDeleted ===false  && noteData.isArchived === false
     });
     console.log("the data",this.notesArray);
})
  }
    }
