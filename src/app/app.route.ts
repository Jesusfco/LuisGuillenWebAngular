import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { AspectosayudaComponent } from './aspectosayuda/aspectosayuda.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [
    
    { path: '', component: IndexComponent , pathMatch: 'full' },
    { path: 'aspecto-ayuda', component: AspectosayudaComponent },
    { path: 'login', component: LoginComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/:name', component: ArticleComponent },
   
    // { path: 'sale-point', component: SalePointComponent,
    //     children: [
    //         { path: 'sale-process', component: SaleProcessComponent },
    //         { path: 'search', component: SearchProductComponent },
    // ]},
    { path: '**', component:  PageNotFoundComponent },
];