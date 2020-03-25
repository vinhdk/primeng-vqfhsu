import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AccordionModule } from "primeng/primeng";
import { MenuItem } from "primeng/primeng";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
registerLocaleData(en);

@NgModule({
  imports: [BrowserModule, FormsModule, NgZorroAntdModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class AppModule {}
