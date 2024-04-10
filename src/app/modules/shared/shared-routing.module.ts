import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { OrderlistComponent } from "./components/orderlist/orderlist.component";
import { DashboardHomePageComponent } from "./components/dashboard-home-page/dashboard-home-page.component";
import { StockComponent } from "./components/stock/stock.component";
import { DepartmentstockComponent } from "./components/departmentstock/departmentstock.component";
import { EmployestockComponent } from "./components/employestock/employestock.component";
import { SalesreportComponent } from "./components/salesreport/salesreport.component";
import { PurchaseANDjobworkComponent } from "./components/purchase-andjobwork/purchase-andjobwork.component";
import { ProductionreportComponent } from "./components/productionreport/productionreport.component";
import { StocksummaryComponent } from "./components/stocksummary/stocksummary.component";
import { FGstockreportComponent } from "./components/fgstockreport/fgstockreport.component";


const routes : Routes = [
{
    path:'homepage',
    component:DashboardHomePageComponent,

    children:[
        {
            path:'dashboard',
            component:DashboardComponent
        },
        {
            path:'orderlist',
            component:OrderlistComponent
        },
        {
            path:'stock',
            component:StockComponent
        },
        {
            path:'department-stock',
            component:DepartmentstockComponent
        },
        {
            path:'employe-stock',
            component:EmployestockComponent
        },
        {
            path:'sales-report',
            component:SalesreportComponent
        },
        {
            path:'purchase&jobwork',
            component:PurchaseANDjobworkComponent
        },
        {
            path:'production-report',
            component:ProductionreportComponent
        },
        {
            path:'fg-stock-report',
            component:FGstockreportComponent
        },
        {
            path:'stock-summary',
            component:StocksummaryComponent
        }

    ]

}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class sharedRouterModule {}
