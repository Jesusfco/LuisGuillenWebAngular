import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.route';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AspectosayudaComponent } from './aspectosayuda/aspectosayuda.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { VisitorService } from './visitor.service';
import { StructureComponent } from './structure/structure.component';
import { DateBlogPipe } from './date-blog.pipe';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AspectosayudaComponent,
    PageNotFoundComponent,
    LoginComponent,
    BlogComponent,
    ArticleComponent,
    StructureComponent,
    DateBlogPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes),
    FacebookModule.forRoot()
  ],
  providers: [
    VisitorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
