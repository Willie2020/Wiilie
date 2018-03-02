import { Component, OnInit } from '@angular/core';
// import { MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-newstuff',
  templateUrl: './newstuff.component.html',
  styleUrls: ['./newstuff.component.css']
})
export class NewstuffComponent implements OnInit {
  age: number;
  nameOfperson: string;
  email:string;
  Telnumber: string;
  address: string;
  password: string;
  jokes: string[];
  hide: boolean;


  ngOnInit() {
    this.age = 10;
    this.jokes = ['one', 'two', 'three'];
    this.hide = true;
  }

}


/*export class NewstuffComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<NewstuffComponent>) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }
}*/

