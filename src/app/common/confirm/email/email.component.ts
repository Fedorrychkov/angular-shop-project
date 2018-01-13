import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../service/storage.service';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailConfirmComponent implements OnInit {

  constructor(
    public router: Router,
    public storageService: StorageService
  ) { }


  ngOnInit() {
  }

}
