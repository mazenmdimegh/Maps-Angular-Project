import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../AichouchaRaoued/AichouchaRaoued.component';
import { Delimitationcomponent } from '../../Delimitation/Delimitationcomponent';
import { MapsComponent } from '../../LocalisationQuartier/LocalisationQuartiercomponentt';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../Raoued/Raoued.component';
import { DonneesAmenagementComponent } from 'app/donnees-amenagement/donnees-amenagement.component';

export const AdminLayoutRoutes: Routes = [
    // { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'AichouchaRaoued',     component: TypographyComponent },
    { path: 'amenagement',          component: Delimitationcomponent },
    { path: 'LocalisationQuartier',           component: MapsComponent },
    { path: 'Delimitation',           component: DonneesAmenagementComponent },
    { path: 'Raoued',        component: UpgradeComponent },
];
