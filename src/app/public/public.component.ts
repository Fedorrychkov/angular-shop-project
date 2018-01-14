import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(
    public router: Router,
    public storageService: StorageService
  ) { }


  ngOnInit() {
  }

}
