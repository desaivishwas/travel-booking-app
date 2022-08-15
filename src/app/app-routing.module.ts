import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailPageComponent } from './payment-done/fail-page/fail-page.component';
import { SuccessPageComponent } from './payment-done/success-page/success-page.component';
import { PurchasesComponent } from './purchases/purchases/purchases.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { StoreComponent } from './store/store/store.component';


const routes: Routes = [
  // Home/Landing Page
  {
    path: "",
    loadChildren: () => import("./landing-page/landing-page.module").then(m => m.LandingPageModule),
  },
  // Login
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
    // ,
    // canActivate: [AuthGuard]
  },
  {
    path: "account",
    loadChildren: () => import("./user-profile/user-profile.module").then(m => m.UserProfileModule),
    canActivate: [AuthGuard]
  },
  {
    path: "user-chat",
    loadChildren: () => import("./user-chat/user-chat.module").then(m => m.UserChatModule),
    canActivate: [AuthGuard]
  },
  {
    path: "search",
    loadChildren: () => import("./search/search.module").then(m => m.SearchModule),
    //canActivate: [AuthGuard]
  },
  {
    path: "booking",
    loadChildren: () => import("./booking/booking.module").then(m => m.BookingModule),
    // canActivate: [AuthGuard]
  },
  // {
  //   path: "shared",
  //   loadChildren: () => import("./shared-modules/shared-modules.module").then(m => m.SharedModulesModule)
  // },
  {
    path:"store",
    component: StoreComponent
  },
  {
    path:"paymentsucceeded",
    component: SuccessPageComponent
  },
  {
    path:"paymentcanceled",
    component: FailPageComponent
  },
  {
    path:"purchases",
    component: PurchasesComponent
  },

  // Add AuthGuard to pages like User Profile, Order Details, Cancellation

  // Redirection
  {
    path: "home",
    redirectTo: "/", pathMatch: "full"
  },

  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
