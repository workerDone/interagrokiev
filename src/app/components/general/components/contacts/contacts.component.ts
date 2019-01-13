import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  form: FormGroup;
  isOpenedSuccessPopup: boolean = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zа-яА-ЯA-Z0-9 ]{1,296}')]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.pattern('[a-zа-яА-ЯA-Z0-9 ]{1,296}'), Validators.maxLength(256)]]
    });
  }
  onSubmit() {
    console.log(this.form)
    
    if (this.form.invalid) {
      return;
    }
    // const formData = new FormData();

    // formData.set('entry.507307065', this.form.value.name );
    // formData.set('entry.1617704409', this.form.value.email );
    // formData.set('entry.2113232328', this.form.value.phone );
    // formData.set('entry.1707151155', this.form.value.message );

    // const path = `/forms/d/e/1FAIpQLSdcd3MhjlJjO6DEi6jPvty_FhGQgNq-UEgvuSV2w1vNMx6AKA/formResponse`;
    
    const body = Object.assign({id: 250011}, this.form.value);
    this.sendEmail(body).toPromise()
    .then((data) => console.log(data))
    .catch((err) => console.log(err, 'catch'));
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

  sendEmail( body: Object = {}): Observable<any> {
    const baseApiUrl = 'https://emailinteragrokiev.herokuapp.com/';
    return this.http
      .post(`${baseApiUrl}`, body)
      .pipe(
        catchError((err) => this.formatErrors(err))
      );
  }

  private formatErrors(error: any) {
    let parsedError;

    try {
      parsedError = error.json();
    } catch (err) { }

    return throwError(parsedError || error);
  }
}
