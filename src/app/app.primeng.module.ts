import { NgModule } from "@angular/core";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    TableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputSwitchModule,
    CalendarModule,
    ConfirmDialogModule,
    DialogModule
  ],
  exports: [
    TableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    InputSwitchModule,
    CalendarModule,
    ConfirmDialogModule,
    DialogModule
  ]
})
export class AppPrimeNgModule{

}
