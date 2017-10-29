import { Component } from "@angular/core";

interface UserInterface {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  title: string = "Contact us !";

  user: UserInterface = {
    name: "",
    email: "",
    message: ""
  }

  validation = {
    name: null,
    email: null,
    message: null
  }

  success: boolean = false;


  submitForm(ev) {
    const u = this.user,
          v = this.validation;
    if(u.name == "" || u.name.length > 24) {
      v.name = false;
    }
    else {
      v.name = true;
    }
    if(u.email == "" || u.email.length > 24) {
      v.email = false;
    }
    else {
      v.email = true;
    }
    if(u.message == "" || u.message.length > 360) {
      v.message = false;
    }
    else {
      v.message = true;
    }

    if(u.name != "" && u.name.length < 24 && u.name.length > 1 &&
      u.email != "" && u.email.length < 24 && u.email.length > 1 &&
      u.message != "" && u.message.length < 360 && u.message.length > 1) {

      this.success = true;
    }


  }

}
