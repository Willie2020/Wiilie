import { Component, OnInit, state, Inject, OnDestroy } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { NewstuffComponent } from '../newstuff/newstuff.component';
// import { MaterialModule } from '../../material.module';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // templateUrl: '<app-user></app-user'
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit, OnDestroy {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;

  dialogResult = '';
  constructor(public dialog: MatDialog, public snackbar: MatSnackBar) {
    console.log('constructor ran..');
    console.log('You are right');
  }

  ngOnDestroy() {

  }

  ngOnInit() {
    console.log('ngOnIinit ran...');
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'johndoe@yahoo.com';
    this.address = {
      street: '50 Main street',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Run', 'Jump', 'Dance', 'Swim'];
    this.hello = 'hello';
  }

  openDialog() {
    this.dialog.open(NewstuffComponent);
    // dialog ref component parsing data to html
    /*let dialogRef = this.dialog.open(NewstuffComponent, {
      width: '600px',
      data: 'this text is correct'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.dialogResult = result;
    });*/
  }

  openSnackBar() {
    this.snackbar.open('Welcome', 'Newbie', {
      duration: 2000,
    });
  }
  onClick() {
    console.log('HELLO');
    this.name = 'Willie';
  }

  addHobby(hobby: string) {
    console.log('the hobbys is' + hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}


interface Address {
  street: string;
  city: string;
  state: string;
}


