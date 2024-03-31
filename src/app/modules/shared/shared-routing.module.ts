import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { OrderlistComponent } from "./components/orderlist/orderlist.component";
import { DashboardHomePageComponent } from "./components/dashboard-home-page/dashboard-home-page.component";
import { StockComponent } from "./components/stock/stock.component";
import { DepartmentstockComponent } from "./components/departmentstock/departmentstock.component";
import { EmployestockComponent } from "./components/employestock/employestock.component";


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
        }

    ]

}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class sharedRouterModule {}
