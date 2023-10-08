import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HeroComponent } from './hero/hero.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CarteComponent } from './carte/carte.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TabSweetsComponent } from './tab-sweets/tab-sweets.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    DetailComponent,
    CartComponent,
    HeaderComponent,
    SearchComponent,
    HeroComponent,
    ListProductComponent,
    ProductComponent,
    NewsComponent,
    CommentaireComponent,
    BannerComponent,
    AboutComponent,
    MenuComponent,
    CarteComponent,
    CheckoutComponent,
    TabSweetsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
