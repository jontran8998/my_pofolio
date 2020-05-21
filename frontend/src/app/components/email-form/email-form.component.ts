import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { EmailService } from 'src/app/services/email/email.service';

declare var $: any;

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  submitName = "Submit"
  formGroup: FormGroup;
  captchaKey: string = environment.CAPCHA_KEY;

  formPopupError = true
  formPopupDisplay: string = "None"
  formPopupText: string = ""
  formOpacity: string = "1"
  formDisable = false

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'name': [null, [Validators.required]],
      'email': [null, [Validators.required, this.checkValidEmail]],
      'message': [null, [Validators.required]],
      'recaptcha': [null, [Validators.required]],
    });
  }

  checkValidEmail(control) {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailregex.test(control.value)) {
      return { invalid: true }
    }
    return null
  }

  isControllerInvalid(controller) {
    return (!this.formGroup.controls[controller].valid && this.formGroup.controls[controller].touched)
  }

  getErrorMessage(controller) {
    if (controller === 'email') {
      return this.formGroup.get('email').hasError('required') ? 'Email is required' :
        this.formGroup.get('email').hasError('invalid') ? 'Not a valid email address' : '';
    } else if (controller === 'name') {
      return this.formGroup.get('name').hasError('required') ? 'Name is required' : ""
    } else if (controller === 'message') {
      return this.formGroup.get('message').hasError('required') ? 'Message is required' : ""
    } else if (controller === 'recaptcha') {
      return this.formGroup.get('recaptcha').hasError('required') ? 'Captcha is required' : ""
    }
  }

  resolved(captchaResponse: string) {
    if (captchaResponse === null) {
      this.formGroup.controls['email'].setErrors({ 'required': true });
    } else {
      this.formGroup.controls['email'].setErrors(null);
    }
  }

  onPopupOk() {
    this.formPopupDisplay = "None"
    this.formDisable = false
    this.formGroup.enable()
    this.formOpacity = "1"
    this.submitName = "Submit"
    if (!this.formPopupError) {
      this.formGroup.reset()
    }
  }

  onPopupError(message: string) {
    this.formPopupError = true
    this.formPopupDisplay = "block"
    this.formOpacity = "0.1"
    this.formGroup.disable()
    this.formPopupText = message
  }

  onPopupSucceed(message: string) {
    this.formPopupError = false
    this.formPopupDisplay = "block"
    this.formOpacity = "0.1"
    this.formGroup.disable()
    this.formPopupText = message
  }


  onFormSubmiting() {
    let self = this
    this.submitName = "Submiting..."

    if (this.formGroup.valid) {
      this.emailService.post(self.formGroup.value)
        .toPromise()
        .then(res => {
          // console.log("go to then")
          // console.log(res)
          this.onPopupSucceed("Your message has been submitted. A confirmation has been sent to your email address.")
        })
        .catch(error => {
          // console.log("go to error")
          // console.log(error)
          this.onPopupError(error.error)
        })
    }
  }
  
  onSubmit() {
    // console.log("submit")
    for (let element of Object.keys(this.formGroup.controls)){
      let message = this.getErrorMessage(element)
      if (message !== "") {
        this.onPopupError(message)
        return
      }
    };

    this.onFormSubmiting()
  }


}
