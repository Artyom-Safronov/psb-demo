import { Component } from '@angular/core';
import { PsbLogo } from '../../psb-logo/psb-logo';
import { Button } from "../button/button";
import { IconPlusCircled } from "../../icons/icon-plus-circled/icon-plus-circled";
import { IconArrowDown } from "../../icons/icon-arrow-down/icon-arrow-down";

@Component({
  selector: 'app-header',
  imports: [PsbLogo, Button, IconPlusCircled, IconArrowDown],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class MainHeader {

}
