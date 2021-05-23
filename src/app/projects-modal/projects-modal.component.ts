import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.css']
})

export class ProjectsModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectsModalComponent>) { }

  ngOnInit() {
  }

  closeModal() {
    this.dialogRef.close();
  }

}