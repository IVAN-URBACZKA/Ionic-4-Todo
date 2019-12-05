import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  priorityRef: any;
  priorities: any;

  constructor(public afDB: AngularFireDatabase) 
  {
      this.priorityRef =  this.afDB.list('priorities');
      this.priorityRef.snapshotChanges(['child_changed'])
    .subscribe(actions => {
      const data = [];
        actions.forEach(action => {
      console.log(action.payload.val().text);

        data.push({
          key: action.payload.key,
      text: action.payload.val().text,
      type: 'priority'
    });
    });

  this.priorities = data;
  
    });
    }

}
