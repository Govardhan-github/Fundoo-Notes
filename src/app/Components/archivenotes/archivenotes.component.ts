import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrls: ['./archivenotes.component.scss']
})
export class ArchivenotesComponent implements OnInit {
 
  token=localStorage.getItem('token')

  constructor(private note:NotesService) { }
  notesArray=[]
  ngOnInit(): void {
    this.getArchiveNotes();
  }

  
  getArchiveNotes(){

    this.note.getArchiveNoteService().subscribe((response:any) => {
       console.log(response);  
        this.notesArray = response.data.data;
        
        this.notesArray.reverse()
        console.log("noteList ",this.notesArray)
    })
  }  
}

