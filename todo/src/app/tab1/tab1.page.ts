import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  priorityRef: any;
  priorities: any;
  goalsRef: any;
  goals: any;
  quotesRef: any;
  quotes: any;

  constructor(public afDB: AngularFireDatabase,public alertController: AlertController) 
  {
      this.priorityRef =  this.afDB.list('priorities');
      this.quotesRef =  this.afDB.list('quotes');
      this.goalsRef =  this.afDB.list('goals');

      this.getFirebaseData();

    }

    getFirebaseData()
     {

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

      this.goalsRef.snapshotChanges(['child_changed'])
      .subscribe(actions => {
        const data = [];
          actions.forEach(action => {
        console.log(action.payload.val().text);
  
          data.push({
            key: action.payload.key,
        text: action.payload.val().text,
        type: 'goals'
      });
      });
  
    this.goals = data;
    
      });

      this.quotesRef.snapshotChanges(['child_changed'])
      .subscribe(actions => {
        const data = [];
          actions.forEach(action => {
        console.log(action.payload.val().text);
  
          data.push({
            key: action.payload.key,
        text: action.payload.val().text,
        type: 'quotes'
      });
      });
  
    this.quotes = data;
    
      });

    }

    async addPriority() {
      const alert = await this.alertController.create({
        header: 'Ajouter votre priorité!',
        inputs: [
          {
            name: 'priority',
            type: 'text',
            placeholder: 'Votre priorité'
          },
         
          
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Add',
            handler: (data) => {
              console.log(data.priority);
                this.priorityRef.push({
                text: data.priority
              });
              this.getFirebaseData();
            }
          }
        ]
      });
  
      await alert.present();
    }

    async addGoal() {
      const alert = await this.alertController.create({
        header: 'Ajouter votre but!',
        inputs: [
          {
            name: 'goal',
            type: 'text',
            placeholder: 'Votre but'
          },
         
          
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Add',
            handler: (data) => {
              console.log(data.goal);
              this.goalsRef.push({
                text: data.goal
              });
              this.getFirebaseData();
            }
          }
        ]
      });
  
      await alert.present();
    }

    async addQuote() {
      const alert = await this.alertController.create({
        header: 'Ajouter votre citation!',
        inputs: [
          {
            name: 'quote',
            type: 'text',
            placeholder: 'Votre Citation'
          },
         
          
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Add',
            handler: (data) => {
              console.log(data.quote);
              this.quotesRef.push({
                text: data.quote
              });
              this.getFirebaseData();
            
            }
          }
        ]
      });
  
      await alert.present();
    }

    delete(item:any)
    {
      if(item.type === "priority"){
        this.priorityRef.remove(item.key);
      }
      if(item.type === "goals"){
        this.goalsRef.remove(item.key);
      }
      if(item.type === "quotes"){
        this.quotesRef.remove(item.key);
      }
      this.getFirebaseData();


    }

}
