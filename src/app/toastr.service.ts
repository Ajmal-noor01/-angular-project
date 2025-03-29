import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
  // imports:[ToastrModule.forRoot(),BrowserAnimationsModule]
})
export class ToastrService {
  // ToastrModule.forRoot(),BrowserAnimationsModule

  constructor() { }
}
