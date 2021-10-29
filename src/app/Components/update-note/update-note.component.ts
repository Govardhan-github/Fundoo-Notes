import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/Services/notes/notes.service';
@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  updateNoteForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private formBuilder: FormBuilder,
  private note: NotesService) { }

token=localStorage.getItem('token')
@Input() noteId:any


  ngOnInit(): void {
    this.updateNoteForm = this.formBuilder.group({   
      Id: this.data.notesId, 
      title: this.data.title,
      description: this.data.description
    })
  }

  updateNote(data:any){
    let payload={
      noteId:this.data.id,
      title:this.updateNoteForm.value.title,
      description:this.updateNoteForm.value.description
    }
    
    this.note.updateNotes(payload).subscribe((response:any)=>{
      console.log("the response" ,response);
      
    });


    

  }


}
  


