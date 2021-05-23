import { Component } from '@angular/core';

import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ProjectsModalComponent } from './projects-modal/projects-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<ProjectsModalComponent, any> | undefined;
  constructor(public matDialog: MatDialog) { }

  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
              this.modalDialog?.close()
          }
      }
  }

  openModal() {
    
    // The user can't close the dialog by clicking outside its body
    this.dialogConfig.id = "projects-modal-component";
    this.dialogConfig.height = "350px";
    this.dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    this.modalDialog = this.matDialog.open(ProjectsModalComponent, this.dialogConfig);
  }
}