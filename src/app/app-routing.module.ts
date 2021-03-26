import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { BloggridtwoComponent } from './components/pages/bloggridtwo/bloggridtwo.component';
import { BloglistComponent } from './components/pages/bloglist/bloglist.component';
import { ComingsoonComponent } from './components/pages/comingsoon/comingsoon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { EventComponent } from './components/pages/event/event.component';
import { EventdetailsComponent } from './components/pages/eventdetails/eventdetails.component';
import { FaqsComponent } from './components/pages/faqs/faqs.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GallerytwoComponent } from './components/pages/gallerytwo/gallerytwo.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomethreeComponent } from './components/pages/homethree/homethree.component';
import { HometwoComponent } from './components/pages/hometwo/hometwo.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { SchedulesComponent } from './components/pages/schedules/schedules.component';
import { SchedulestwoComponent } from './components/pages/schedulestwo/schedulestwo.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopdetailsComponent } from './components/pages/shopdetails/shopdetails.component';
import { SpeakersComponent } from './components/pages/speakers/speakers.component';
import { SpeakersdetailsComponent } from './components/pages/speakersdetails/speakersdetails.component';
import { SponsorsComponent } from './components/pages/sponsors/sponsors.component';

const routes: Routes = [
  {path:'',component:HomeComponent,data:{breadcrumb:'Homepage'}},
  {path:'home-v2',component:HometwoComponent,data:{breadcrumb:'Homepage'}},
  {path:'home-v3',component:HomethreeComponent,data:{breadcrumb:'Homepage'}},
  {path:'about',component:AboutComponent,data:{breadcrumb:'About Us'}},
  {path:'blog-grid',component:BloggridComponent,data:{breadcrumb:'Blog Grid'}},
  {path:'blog-grid-3-column',component:BloggridtwoComponent,data:{breadcrumb:'Blog Grid'}},
  {path:'blog-standard',component:BloglistComponent,data:{breadcrumb:'Blog Standard'}},
  {path:'blog-details',component:BlogdetailsComponent,data:{breadcrumb:'Blog Details'}},
  {path:'coming-soon',component:ComingsoonComponent,data:{breadcrumb:'Coming Soon'}},
  {path:'contact',component:ContactComponent,data:{breadcrumb:'Contact Us'}},
  {path:'event',component:EventComponent,data:{breadcrumb:'Event'}},
  {path:'event-details',component:EventdetailsComponent,data:{breadcrumb:'Event Details'}},
  {path:'faq',component:FaqsComponent,data:{breadcrumb:"FAQ's"}},
  {path:'gallery',component:GalleryComponent,data:{breadcrumb:'Gallery'}},
  {path:'gallery-v2',component:GallerytwoComponent,data:{breadcrumb:'Gallery'}},
  {path:'pricing',component:PricingComponent,data:{breadcrumb:'Pricing'}},
  {path:'shedules',component:SchedulesComponent,data:{breadcrumb:'Schedules'}},
  {path:'shedules-v2',component:SchedulestwoComponent,data:{breadcrumb:'Schedules'}},
  {path:'shop',component:ShopComponent,data:{breadcrumb:'Shop'}},
  {path:'shop-details',component:ShopdetailsComponent,data:{breadcrumb:'Shop Details'}},
  {path:'speakers',component:SpeakersComponent,data:{breadcrumb:'Speakers'}},
  {path:'speaker-details',component:SpeakersdetailsComponent,data:{breadcrumb:'Speaker Details'}},
  {path:'sponsors',component:SponsorsComponent,data:{breadcrumb:'Sponsors'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
