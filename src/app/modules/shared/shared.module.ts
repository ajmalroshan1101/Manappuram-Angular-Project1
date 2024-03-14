import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { sharedRouterModule } from "./shared-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from "./service/shared.service";


@NgModule({
    declarations:[
        DashboardComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        sharedRouterModule,
        HttpClientModule
    ],
    providers:[SharedService]
})

export class SharedModule {}