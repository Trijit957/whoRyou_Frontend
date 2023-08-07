import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { AnimationLoader, AnimationOptions, provideLottieOptions } from 'ngx-lottie';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  providers: [
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    AnimationLoader,
  ],
})
export class OnboardingPage implements OnInit {

  @ViewChild('swiper') swiperRef: ElementRef | undefined;

  public isAllowTouchMove: boolean = false;
  public swiperModules = [IonicSlides];
  public isShowProfileCreationLoading: boolean = false;
  public options: AnimationOptions = {
    path: 'assets/images/animated/chat-loading.json',
  };

  constructor(
    private readonly storageService: StorageService,
    private readonly router: Router
  ) { }

  ngOnInit() {

  }

  public goToNextSlide() {
    this.isAllowTouchMove = true;
    this.swiperRef?.nativeElement.swiper.slideNext();
    this.isAllowTouchMove = false;
  }

  public goToPrevSlide() {
    this.isAllowTouchMove = true;
    this.swiperRef?.nativeElement.swiper.slidePrev();
    this.isAllowTouchMove = false;
  }


  public createProfile() {
    this.isShowProfileCreationLoading = true
    setTimeout(() => {
      this.storageService.set('isOnboardingDone', true);
      this.router.navigate(['/'], { replaceUrl: true });
    }, 3000);

  }
}