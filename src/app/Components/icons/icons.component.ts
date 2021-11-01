import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  isExpandable: boolean = false
  isTrashComponent: boolean = false
  isArchive: boolean = false
   @Output() colorRefresh: EventEmitter<any> = new EventEmitter();

  constructor(private note: NotesService, private route: ActivatedRoute, private router: Router) { }

  isColor: string = '';

  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey' },
  ];

  token = localStorage.getItem('token')
  @Input() noteId: any;
  @Input() noteData: any;
  @Input() color: any;
  @Input() code: any;



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
  moveToTrash() {
    let deleteData = {
      noteIdList: [this.noteId],
      isDeleted: true
    }
    console.log("deleted data", deleteData);
    this.note.trashNotes(deleteData).subscribe((data) => {
      console.log("Deleted Successfully", data);
      this.router.navigateByUrl('/').then(() => {
        this.router.navigate(['/dashboard/getnotes'])
      });
    });
  }

  moveToArchive() {

    let data = {
      noteIdList: [this.noteId],
      isArchived: !this.isArchive
    }
    console.log(data);
    this.note.archiveNotes(data).subscribe(
      (response: any) => {
        console.log('archiveResponse', response);
        this.noteOperation.emit(response);

        this.router.navigateByUrl('/').then(() => {
          this.router.navigate(['/dashboard/getnotes'])
        });
      });

  }

  unArchive() {

    let data = {
      noteIdList: [this.noteId],
      isArchived: false
    }
    console.log(data);
    this.note.archiveNotes(data).subscribe(
      (response: any) => {
        console.log('unarchiveResponse', response);
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

  restore() {
    let restoreData = {
      noteIdList: [this.noteId],
      isDeleted: false,
    };
    console.log(restoreData);
    this.note.trashNotes(restoreData).subscribe(
      (result) => {

        console.log("Note restored successfully", result);
        this.router.navigateByUrl('/').then(() => {
          this.router.navigate(['/dashboard/trash'])
        });
      });
  }
  
  setColor(color: any) {
    this.noteData.color = color;
    console.log('color', color);
    let data = {
      color: color,
      noteIdList: [this.noteId],
    }
    console.log(data);
    this.note.changeColorService(data).subscribe(
      (response: any) => {
        // this.color.emit()
        this.noteOperation.emit(response);

        console.log('Response of setColour', response);
      },
      (error: any) => {
        console.log('archive Error at icons methods', error);

      }
    );
    // window.location.reload();
  }


  // colorcode(color: any) {
  //   this.notecard.color = color;
  //   console.log('color', color);
  //   let data = {
  //     color: color,
  //     noteIdList: [this.notecard.id],
  //   }
  //   console.log(data);
  //   this.note.changeColorService(data).subscribe((response: any) => {
  //     this.color.emit()
  //     console.log('Response of setColour', response);

  //   });

  }

  





// colorCode(value: any) {
//   this.noteData.c = value ;
//   console.log(value);

//   let reqPayload = {
//     noteId: this.noteId,
//     color: value
//   }
//   console.log("the request payload",reqPayload);

//   this.note.changeColorService(reqPayload).subscribe((result) => {
//     this.c.emit();

//     console.log(result);

//   })
// }
