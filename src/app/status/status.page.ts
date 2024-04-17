import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonLabel, IonRadio, IonRadioGroup, IonButton, IonButtons, IonBackButton]
})
export class StatusPage implements OnInit 
{
  myStatus:string = "";

  constructor(private storage:Storage, private router:Router) { }

  async ionViewWillEnter()
  {
    await this.storage.create();
    this.myStatus = await this.storage.get('Status');
  }

  async setStatus()
  {
    await this.storage.set('Status', this.myStatus)
    .then(()=>
    {
      this.router.navigate(['/home'])
    })
    .catch((error)=>
    {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
