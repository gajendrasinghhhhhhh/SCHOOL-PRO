import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {
  
onsubmit(infoForm:{value:any;}){
  console.log(infoForm.value)
}

}
