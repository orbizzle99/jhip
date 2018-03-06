import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JtestBlogModule } from './blog/blog.module';
import { JtestEntryModule } from './entry/entry.module';
import { JtestTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JtestBlogModule,
        JtestEntryModule,
        JtestTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JtestEntityModule {}
