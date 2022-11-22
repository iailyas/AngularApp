import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegister } from 'src/app/models/userRegister';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registraton',
  templateUrl: './registraton.component.html',
  styleUrls: ['./registraton.component.css']
})
export class RegistratonComponent implements OnInit {
  @ViewChild('fileInput') fileInput?: ElementRef;
  public registrationForm!: FormGroup;
  user: UserRegister = {
    first_Name: '',
    last_Name: '',
    role: '',
    // userName: '',
    // password: '',
    email: ''

  };
  image?: File;
  imagePreview: any = '';


  file: any;
  constructor(private router: Router, private registrationService: RegistrationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  OnFileUpload(event: any) {
    const file = event.target.files[0];
    this.image = file;
    const reader = new FileReader;
    reader.onload = () => { this.imagePreview = reader.result }
    reader.readAsDataURL(file);
  }

  AddUser() {
    this.registrationService.Add(this.user)
      .subscribe({ next: (user) => { this.router.navigate(['AddUser']); console.log(user); } });
  }
  // getName(name: string) {
  //   this.user.avatar = name;
  // }
  // chooseFile(files: FileList) {
  //   this.selectedFile = files[0];
  // }
  submitData() {
    // if (this.registrationForm.valid) {
    //   return;
    // }
    console.log('AAAAAAAAAAAA');
    this.registrationService.Add(this.registrationForm.getRawValue(), this.image)
      .subscribe({
        next: (user) => { this.router.navigate(['AddUser']); console.log(user); },
        error: (response: any) => { console.log(response); }
      });


  }
  public triggerClick() {
    this.fileInput?.nativeElement.click();
  }
  private initForm() {
    this.registrationForm = this.formBuilder.group({
      first_Name: '',
      last_Name: '',
      role: '',
      // userName: '',
      // password: '',
      email: ''
    })
  }

}
