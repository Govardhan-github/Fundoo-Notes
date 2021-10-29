import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { ArchivenotesComponent } from '../archivenotes/archivenotes.component';
import { TrashComponent } from '../trash/trash.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  isExpandable :boolean=false
  isTrashComponent:boolean=false
  isArchive:boolean=false

  constructor(private note :NotesService, private route:ActivatedRoute,private router:Router) { }

  colorArray = ['#fff', '#f28b82', '#fbbc04', '#fff475', '#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#d7aefb', '#fdcfe8', '#e6c9a8', '#e8eaed'];

token = localStorage.getItem('token')
   @Input() noteId:any
   @Output() noteOperation = new EventEmitter<any>();
   @Output() trashOperation = new EventEmitter<any>();
   @Output() archiveOperation = new EventEmitter<any>();


  ngOnInit(): void {
    let comp = this.route.snapshot.component;
   

    if (comp == TrashComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }
    if (comp == ArchivenotesComponent) {
      this.isArchive = true;
      console.log(this.isArchive);
    }
  }

   //***** Method To Move the data into trash*******//
  moveToTrash(){
    let deleteData = {
      noteIdList:[this.noteId],
      isDeleted:true
  }
  console.log("deleted data",deleteData);
    this.note.trashNotes(deleteData ).subscribe((data)=>{
      console.log("Deleted Successfully", data);
      this.router.navigateByUrl('/').then(() => {
        this.router.navigate(['/dashboard/getnotes'])
      });
  });
}

moveToArchive(){
 
  let data ={
    noteIdList: [this.noteId],
    isArchived: !this.isArchive
  }
  console.log(data);
  this.note.archiveNotes(data).subscribe(
    (response:any) => {
      console.log('archiveResponse',response);
      this.router.navigateByUrl('/').then(() => {
        this.router.navigate(['/dashboard/getnotes'])
      });
  });

}

unArchive(){
 
  let data ={
    noteIdList: [this.noteId],
    isArchived: false
  }
  console.log(data);
  this.note.archiveNotes(data).subscribe(
    (response:any) => {
      console.log('unarchiveResponse',response);
      this.router.navigateByUrl('/').then(() => {
        this.router.navigate(['/dashboard/archive'])
      });
  });

}


deleteForever() {
  let deletedData = {
    noteIdList: [this.noteId],
    isDeleted: false,
  };
  console.log(deletedData);
  this.note.deleteForEverNotes(deletedData).subscribe((result) => {
      console.log(result);
      this.router.navigateByUrl('/').then(() => {
        this.router.navigate(['/dashboard/trash'])
      });
});

}

restore(){
  let restoreData = {
    noteIdList: [this.noteId],
    isDeleted: false,
  };
  console.log(restoreData);
  this.note.trashNotes(restoreData).subscribe(
    (result) => {

      console.log("Note restored successfully",result);
      this.router.navigateByUrl('/').then(() => {
        this.router.navigate(['/dashboard/trash'])
      });
});
}


colorCode(value: any) {
  console.log(value);

  let reqPayload = {
    noteId: this.noteId,
    color: value
  }
  console.log("the request payload",reqPayload);

  this.note.changeColorService(reqPayload).subscribe((result) => {
    console.log(result);
    this.noteOperation.emit(result);
    this.archiveOperation.emit(result);
    this.trashOperation.emit(result);
  })
}
}

