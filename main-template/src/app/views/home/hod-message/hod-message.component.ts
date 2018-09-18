import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HomeService } from '../home.service';
import swal from 'sweetalert';



@Component({
  selector: 'app-hod-message',
  templateUrl: './hod-message.component.html',
  styleUrls: ['./hod-message.component.scss']
})
export class HodMessageComponent implements OnInit {
  hodform: FormGroup;

  @Input() hodmessage: FormControl;

  constructor(private homeService: HomeService) { }

  createHODForm(): void {
    this.hodform = new FormGroup({
      hodmessage: this.hodmessage,
    });
  }

  ngOnInit() {
     this.createHODForm();
  }

  onSubmit() {
    if(this.hodform.valid) {
      this.homeService.updateHodmessage(this.hodmessage.value)
        .subscribe(
          data => {
            console.log(data);
            this.hodmessage.value === data.hodMessage 
              ? swal("Success!", "HOD message updated", "success")
              : swal("Failure!", "HOD message not deleted", "failure");
          }
        )    
    }
  }


}
