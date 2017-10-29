import { Component, Input } from "@angular/core";
import {AboutService} from "./about.service";



@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ['./about.component.css'],
  providers: [AboutService]
})
export class AboutComponent {
  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.text = this.aboutService.getText().results;
    this.list = this.aboutService.getText().list;
  }

  text: Array<string> = [];
  list: Array<string> = [];
  title: string = "Who are we ?";
}
