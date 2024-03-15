import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { OrderlistComponent } from "./components/orderlist/orderlist.component";


const routes : Routes = [
{
    path:'',
    component:DashboardComponent,

},
{

    path:'orderlist',
    component:OrderlistComponent
}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class sharedRouterModule {}