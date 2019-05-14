import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTooltipModule,
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SortablejsModule } from 'angular-sortablejs/dist';
import { IndextocharPipe } from './custom-pipe/indextochar.pipe';
import { SafeUrlPipe } from './custom-pipe/safe-url.pipe';
import { SafeHtmlPipe } from './custom-pipe/safe-html.pipe';
import { TimeStandard } from './custom-pipe/time-standard';
import { PostPipe } from './custom-pipe/post.pipe';
import { GetMapValuesPipe } from './custom-pipe/get-map-values.pipe';


import { QuestionEssayComponent } from './components/question-essay/question-essay.component';
import { QuestionFillGapComponent } from './components/question-fill-gap/question-fill-gap.component';
import { QuestionMultipleComponent } from './components/question-multiple/question-multiple.component';
import { QuestionOrderComponent } from './components/question-order/question-order.component';
import { QuestionScoringComponent } from './components/question-scoring/question-scoring.component';
import { QuestionSingleChoiceComponent } from './components/question-single-choice/question-single-choice.component';
import { QuestionsCatalogComponent } from './components/questions-catalog/questions-catalog.component';
import { QuestionScoringItemComponent } from './components/question-scoring-item/question-scoring-item.component';
import { QuestionEssayStatisticsComponent } from './components/question-essay-statistics/question-essay-statistics.component';
import { QuestionOrderStatisticsComponent } from './components/question-order-statistics/question-order-statistics.component';
import { QuestionScoringStatisticsComponent } from './components/question-scoring-statistics/question-scoring-statistics.component';
import { QuestionChoiceStatisticsComponent } from './components/question-choice-statistics/question-choice-statistics.component';

import {
  QuestionScoringItemStatisticsComponent
} from './components/question-scoring-item-statistics/question-scoring-item-statistics.component';
import { QuestionFillGapStatisticsComponent } from './components/question-fill-gap-statistics/question-fill-gap-statistics.component';
import { LoadingAnimationPageComponent } from './components/loading-animation-page/loading-animation-page.component';
import { LoadingAnimationBlockComponent } from './components/loading-animation-block/loading-animation-block.component';

import { DialogComponent } from './components/dialog/dialog.component';
import { DialogAmplifyComponent } from './components/dialog-amplify/dialog-amplify.component';
import { ConfirmDialogComponent } from './components/dialog-confirm/confirm-dialog.component';
import { TextareaDialogComponent } from './components/dialog-textarea/textarea-dialog.component';
import { SubnavComponent } from './components/subnav/subnav.component';
import { StoreUpComponent } from './components/store-up/store-up.component';
import { PermissionDeniedComponent } from './components/permission-denied/permission-denied.component';
import { ScoreItemComponent } from './components/score-item/score-item.component';
import { TextfilterPipe } from './custom-pipe/textfilter.pipe';

@NgModule({
  imports: [
    CommonModule,
    SortablejsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [
    QuestionsCatalogComponent,
    DialogComponent,
    DialogAmplifyComponent,
    ConfirmDialogComponent,
    TextareaDialogComponent
  ],
  declarations: [
    IndextocharPipe,
    SafeUrlPipe,
    SafeHtmlPipe,
    TimeStandard,
    PostPipe,
    GetMapValuesPipe,
    TextfilterPipe,
    QuestionEssayComponent,
    QuestionFillGapComponent,
    QuestionMultipleComponent,
    QuestionOrderComponent,
    QuestionScoringComponent,
    QuestionSingleChoiceComponent,
    QuestionsCatalogComponent,
    QuestionScoringItemComponent,
    QuestionEssayStatisticsComponent,
    QuestionOrderStatisticsComponent,
    QuestionScoringStatisticsComponent,
    QuestionChoiceStatisticsComponent,
    QuestionScoringItemStatisticsComponent,
    QuestionFillGapStatisticsComponent,
    LoadingAnimationPageComponent,
    LoadingAnimationBlockComponent,
    DialogComponent,
    DialogAmplifyComponent,
    ConfirmDialogComponent,
    TextareaDialogComponent,
    SubnavComponent,
    StoreUpComponent,
    PermissionDeniedComponent,
    QuestionsCatalogComponent,
    ScoreItemComponent
  ],
  exports: [
    IndextocharPipe,
    SafeUrlPipe,
    SafeHtmlPipe,
    TimeStandard,
    PostPipe,
    TextfilterPipe,
    GetMapValuesPipe,
    QuestionEssayComponent,
    QuestionFillGapComponent,
    QuestionMultipleComponent,
    QuestionOrderComponent,
    QuestionScoringComponent,
    QuestionSingleChoiceComponent,
    QuestionsCatalogComponent,
    QuestionScoringItemComponent,
    QuestionEssayStatisticsComponent,
    QuestionOrderStatisticsComponent,
    QuestionScoringStatisticsComponent,
    QuestionChoiceStatisticsComponent,
    QuestionScoringItemStatisticsComponent,
    QuestionFillGapStatisticsComponent,
    LoadingAnimationPageComponent,
    LoadingAnimationBlockComponent,
    SubnavComponent,
    StoreUpComponent,
    PermissionDeniedComponent,
    QuestionsCatalogComponent,
    ScoreItemComponent
  ],
  providers: [
    IndextocharPipe,
    SafeUrlPipe,
    TextfilterPipe,
    SafeHtmlPipe,
    TimeStandard,
    PostPipe,
    GetMapValuesPipe
  ]
})
export class SharedModule { }
