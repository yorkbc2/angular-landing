import {Component, Input} from "@angular/core";

interface ButtonLinkStructure {
  label: string;
  url: string;
}

@Component({
  selector: "app-header",
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class Header {

  @Input() title: string;
  @Input() description: string;

  buttons: Array<ButtonLinkStructure> = [
    {
      label: "Partners",
      url: "https://doublex-studio.com/en"
    }
  ]

}
