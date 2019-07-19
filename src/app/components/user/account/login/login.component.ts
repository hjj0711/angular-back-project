import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
    ) {
      if (authService.currentUserValue) {
        router.navigate(['/']);
      } 
    }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  handleSubmit(): void {
    for (const key of Object.keys(this.loginForm.controls)) {
      this.loginForm.controls[key].markAsDirty(); // 把控件标记为 dirty。当控件通过 UI 修改过时控件会变成 dirty 的
      this.loginForm.controls[key].updateValueAndValidity(); // 重新计算控件的值和校验状态。
    }
    const formData = this.loginForm.value;
    this.authService.login(formData.userName, '');
    this.router.navigate([this.returnUrl]); // 路由跳转
    // this.accountService
    //   .login(formData.userName, formData.password)
    //   .subscribe(userInfo => {
    //     this.authService.login(userInfo.userName, '');
    //     this.router.navigate([this.returnUrl]);
    //   });
  }

}
