import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  @Input() allNotes: any = [];

  constructor(public note: NotesService, public mat:MatDialog) { }
  token = localStorage.getItem('token')
  ngOnInit(): void {


  }

  openDialog(note:any){
      let d=this.mat.open(UpdateNoteComponent,{
        width:'350px',
        data:note
      });
      d.afterClosed().subscribe()
    }
  }

