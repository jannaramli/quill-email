import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

const MaterialComponents=[
  MatToolbarModule,
  BrowserAnimationsModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatDialogModule,
  MatSnackBarModule,
  MatExpansionModule, 
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule
]
@NgModule({
  declarations: [],
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
