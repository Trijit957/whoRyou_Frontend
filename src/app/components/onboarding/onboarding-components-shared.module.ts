import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotComponent } from './pilot/pilot.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { NameGeneratorComponent } from './name-generator/name-generator.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PilotComponent,
    PersonalInfoComponent,
    NameGeneratorComponent,
    CreateProfileComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
   FormsModule
  ],
  exports: [
    PilotComponent,
    PersonalInfoComponent,
    NameGeneratorComponent,
    CreateProfileComponent
  ]
})
export class OnboardingComponentsSharedModule { }
