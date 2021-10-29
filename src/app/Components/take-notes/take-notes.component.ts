import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  fullEdit:boolean = false;
  pin: boolean = false;
  title='';
  description='';
  token: any;
 
  
  constructor(private note: NotesService ,private router :Router) { }

  ngOnInit(): void {
  }

  addNote(){
    let data = {
      title: this.title,
      description: this.description,
    }
    this.token = localStorage.getItem('token');
    if (this.title && this.description) {
      this.note.createNote(this.token, data).subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl('/').then(() => {
          this.router.navigate(['/dashboard/getnotes'])
        });
      })
        

       
    } 
    else{
      this.fullEdit=false;
    }
  }
  
  displayFull() {
    this.fullEdit = true;
  }

  close(){
    this.fullEdit=false;
  }

}

