import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { sharedRouterModule } from "./shared-routing.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from "./service/shared.service";
import { OrderlistComponent } from "./components/orderlist/orderlist.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DashboardHomePageComponent } from "./components/dashboard-home-page/dashboard-home-page.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from "./components/top-bar/top-bar.component";
import { StockComponent } from "./components/stock/stock.component";
import { DepartmentstockComponent } from "./components/departmentstock/departmentstock.component";
import { EmployestockComponent } from "./components/employestock/employestock.component";
import { SalesreportComponent } from "./components/salesreport/salesreport.component";
import { PurchaseANDjobworkComponent } from "./components/purchase-andjobwork/purchase-andjobwork.component";
import { ProductionreportComponent } from "./components/productionreport/productionreport.component";
import { FGstockreportComponent } from "./components/fgstockreport/fgstockreport.component";
import { StocksummaryComponent } from "./components/stocksummary/stocksummary.component";





@NgModule({
    declarations:[
        DashboardComponent,
        OrderlistComponent,
        SidebarComponent,
        DashboardHomePageComponent,
        TopBarComponent,
        StockComponent,
        DepartmentstockComponent,
        EmployestockComponent,
        SalesreportComponent,
        PurchaseANDjobworkComponent,
        ProductionreportComponent,
        FGstockreportComponent,
        StocksummaryComponent,
        
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        sharedRouterModule,
        HttpClientModule,
    ],
    providers:[SharedService]
})

export class SharedModule {}