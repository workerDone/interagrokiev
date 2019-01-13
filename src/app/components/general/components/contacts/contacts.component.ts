import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  form: FormGroup;
  isOpenedSuccessPopup: boolean = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required]],
      message: ["", [Validators.required, Validators.maxLength(256)]]
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const body = Object.assign({ id: 250011 }, this.form.value);

    this.sendEmail(body)
      .toPromise()
      .then(data => console.log(data))
      .catch(err => console.log(err, "catch"));
    if (this.form.valid) {
      this.successHandler();
    }
  }
  private successHandler() {
    this.form.reset();

    this.isOpenedSuccessPopup = true;

    setTimeout(() => {
      this.isOpenedSuccessPopup = false;
    }, 3000);
  }

  sendEmail(body: Object = {}): Observable<any> {
    const baseApiUrl = "https://emailinteragrokiev.herokuapp.com/";
    return this.http
      .post(`${baseApiUrl}`, body)
      .pipe(catchError(err => this.formatErrors(err)));
  }

  private formatErrors(error: any) {
    let parsedError;

    try {
      parsedError = error.json();
    } catch (err) {}

    return throwError(parsedError || error);
  }
}
