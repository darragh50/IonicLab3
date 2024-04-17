import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLinkWithHref, IonLabel],
})
export class HomePage {
  myStatus:string="";
  constructor(private storage:Storage) {}

async ionViewWillEnter()
{
  await this.storage.create();
  this.myStatus = await this.storage.get('Status')
}

}
