import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Test00123SharedModule } from 'app/shared/shared.module';
import { TypeDeContenuEdocComponent } from './type-de-contenu-edoc.component';
import { TypeDeContenuEdocDetailComponent } from './type-de-contenu-edoc-detail.component';
import { TypeDeContenuEdocUpdateComponent } from './type-de-contenu-edoc-update.component';
import { TypeDeContenuEdocDeleteDialogComponent } from './type-de-contenu-edoc-delete-dialog.component';
import { typeDeContenuRoute } from './type-de-contenu-edoc.route';

@NgModule({
  imports: [Test00123SharedModule, RouterModule.forChild(typeDeContenuRoute)],
  declarations: [
    TypeDeContenuEdocComponent,
    TypeDeContenuEdocDetailComponent,
    TypeDeContenuEdocUpdateComponent,
    TypeDeContenuEdocDeleteDialogComponent,
  ],
  entryComponents: [TypeDeContenuEdocDeleteDialogComponent],
})
export class Test00123TypeDeContenuEdocModule {}
