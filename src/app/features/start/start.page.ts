import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadService } from 'src/app/core/services/load/load.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  visible: 'loading' | 'tooltip' | 'registerpod' = 'loading';

  constructor(
    private toastController: ToastController,
    private router: Router,
    private load: LoadService
  ) {}

  ngOnInit() {
    this.load.isReady = false;
    setTimeout(() => {
      this.visible = 'tooltip';
    }, 3000);
  }

  gotoRegisterPod() {
    this.visible = 'registerpod';
  }

  gotoLoading() {
    this.visible = 'loading';
    setTimeout(() => {
      this.visible = 'tooltip';
    }, 3000);
  }

  async selectAppleTv() {
    const toast = await this.toastController.create({
      header: 'Hub wurde erfolgreich ausgewählt',
      message:
        'Apple TV Gen 4 wurde erfolgreich eingerichtet! Sie können nun smarte Geräte einrichten',
      duration: 6000,
    });
    await toast.present();
    this.load.isReady = true;
    this.router.navigateByUrl('/devices');
  }
}
