import { Component, OnInit } from '@angular/core';
import { FormGroup,  Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterService } from '../service/user-register.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent implements OnInit { 

  public aFormGroup: FormGroup;
  myGroup: FormGroup; 
  user: any={};
  ic:string="assets/images/IC-baru.transformed.jpg"
  siteKey:string ="6LcN7JMcAAAAANGYvvk-luJO5OvFx-7ypnq9L1LD";

  constructor(private formBuilder: FormBuilder, 
    private fb:FormBuilder, 
    private router:Router , 
    private HeaderService:UserRegisterService,
    private _InteractionService:UserRegisterService
  ) { }

  ngOnInit() {
    this.re()
    this.createRegisterationForm()
  }

  re(){
    this.aFormGroup = this.formBuilder.group({
    recaptcha: ['', Validators.required] });
  }

  createRegisterationForm(){
    this.myGroup= this.fb.group({
      name: ['',Validators.required],
      alamat: ['',Validators.required],
      alamat2: ['',Validators.required],
      negeri: ['',Validators.required],
      bandar: ['',Validators.required],
      poskod: ['',Validators.required],
      kad: ['',Validators.required],
      dob: ['',Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      attach: ['',Validators.required],
      recaptcha: ['', Validators.required],
    
      month:[''],
      day:['']
    });  
  }

  //get value email
  onEmail(){
    let inputEmail:any;
    inputEmail = this.myGroup.controls['email'].value;
    console.log(inputEmail);
  };

  //get value input date 
  onDateChange(event:Event){
    const dateOfBirthElement = event.target as HTMLInputElement;
    const userDateOfBirthValue = dateOfBirthElement.value;
  
    let inputDob:any;
    let month:any;
    let day:any;
  
    inputDob = this.myGroup.controls['dob'].value;
    let d = new Date( inputDob );
    console.log(d);
  
    //split the day and month
    if (!!d.valueOf()) 
    { 
      month = (d.getMonth() + 1).toString().padStart(2, "0");
      day = (d.getDate()).toString().padStart(2, "0");
  
      console.log(month);
      console.log(day);
      
      this.myGroup.patchValue(
      {
        month: month,
        day: day
      });
    }   
    console.log(inputDob);
  }
  
  //function every input and pass to html
  get recaptcha(){return this.myGroup.get('recaptcha');}
  get myGroupFrom():any{return this.myGroup.controls;}
  
  //function for image get the image and display
  upImage: any
  onselectFile(event: any){
    if (event.target.files){
      const reader=new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
      this.upImage=(event.target.result);
      }
    }
  }
  
  onUpload(){
    this._InteractionService.sendImage(this.upImage);
    console.log(this.upImage)
  }
  
  //function button 
  onSubmit(myGroup: any): any {
    console.log(this.myGroup);
    this.HeaderService.send(myGroup);
    this.router.navigate(['/displayRegister']);

    this.user= Object.assign(this.user, this.myGroup.value);
    this.HeaderService.addUser(this.user);
  }

}
