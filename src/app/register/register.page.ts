import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User = new User();
  errors: any = {};
  errorMessage: string;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit()  {}
  response(response): void{
    if(response.success===false){
      this.errorMessage = 'Invalid Credentials';
    }
  }

  // this.authService.register(this.user).subscribe(
  //   (response:any) => {
  //    console.log(response);
  //   }
  // );
  public onSubmit(): void{
    this.authService.register(this.user).subscribe(
      (response:any) => {
       this.response(response);
      }
    );
  }

}
