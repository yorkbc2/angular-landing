import {Injectable} from "@angular/core";
import TextObject from "./text/text";

@Injectable()
export class AboutService {
  getText() {
    return TextObject;
  }
}
