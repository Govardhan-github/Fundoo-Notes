import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  TrashNote=[]
  notesArray=[]
 
  
token=localStorage.getItem('token')
  constructor(private note:NotesService, private activeRoute: ActivatedRoute) { }
 
  ngOnInit(): void {
    this.getTrashNotes();
  }

  getTrashNotes(){
    this.note.GetAllNotes(this.token).subscribe((notes: any) => {
      this.notesArray = notes.data.data.reverse();
      console.log("the reverse", this.notesArray);
      this.notesArray=this.notesArray.filter((noteData:any)=>{
        return noteData.isDeleted === true;
       });
       console.log("the data",this.notesArray);
    })
  }
 


  //   this.note.getTrashNoteService().subscribe((response:any) => {
  //   console.log("the response in trashe",response);

  //   this.notesArray= response.data.data.filter((noteData:any)=>{
  //     return noteData.isDeleted === true ;
  //    });

  //    console.log("the notesarray is trash" , this.notesArray);
  //     this.TrashNote = response.data.data;  
  //    this.TrashNote.reverse()
  // console.log("noteList ",this.TrashNote);
  }

