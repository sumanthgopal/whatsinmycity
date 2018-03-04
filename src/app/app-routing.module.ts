import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserPageComponent } from './create-user-page/create-user-page.component';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlacesofintComponent } from './placesofint/placesofint.component';
import { NightlifeComponent } from './nightlife/nightlife.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CareersComponent } from './careers/careers.component';
import { LasVegasIndividualPageComponent } from './las-vegas-individual-page/las-vegas-individual-page.component';
import { BostonIndividualPageComponent } from './boston-individual-page/boston-individual-page.component';
import { NagpurIndividualPageComponent } from './nagpur-individual-page/nagpur-individual-page.component';
import { MumbaiIndividualPageComponent } from './mumbai-individual-page/mumbai-individual-page.component';
import { HyderabadIndividualPageComponent } from './hyderabad-individual-page/hyderabad-individual-page.component';
import { LosAngelesIndividualPageComponent } from './los-angeles-individual-page/los-angeles-individual-page.component';
import { NycindividualPageComponent } from './nycindividual-page/nycindividual-page.component';
import { WriteAreviewComponent } from './write-areview/write-areview.component';
import { AboutBangaloreComponent } from './about-bangalore/about-bangalore.component';
import { ElearningComponent } from './elearning/elearning.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';


const routes: Routes = [
  {path: 'home', component: IndexComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'createuser', component: CreateUserPageComponent},
  {path: 'loginuser', component: SignInPageComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'disclaimer', component: DisclaimerComponent},
  {path: 'events', component: EventsComponent},
  {path: 'placesofint', component: PlacesofintComponent},
  {path: 'ntlife', component: NightlifeComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: 'career', component: CareersComponent},
  {path: 'lasvegas', component: LasVegasIndividualPageComponent},
  {path: 'boston', component: BostonIndividualPageComponent},
  {path: 'nagpur', component: NagpurIndividualPageComponent},
  {path: 'mumbai', component: MumbaiIndividualPageComponent},
  {path: 'hyderabad', component: HyderabadIndividualPageComponent},
  {path: 'losangeles', component: LosAngelesIndividualPageComponent},
  {path: 'newyork', component: NycindividualPageComponent},
  {path: 'bangalore', component: AboutBangaloreComponent},
  {path: 'writereview', component: WriteAreviewComponent},
  {path: 'elearning', component: ElearningComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
