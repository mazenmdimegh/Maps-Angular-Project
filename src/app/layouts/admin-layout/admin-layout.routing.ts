import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DonneesAmenagementComponent } from 'app/donnees-amenagement/donnees-amenagement.component';

export const AdminLayoutRoutes: Routes = [
    // { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'AichouchaRaoued',     component: TypographyComponent },
    { path: 'amenagement',          component: IconsComponent },
    { path: 'LocalisationQuartier',           component: MapsComponent },
    { path: 'Delimitation',           component: DonneesAmenagementComponent },
    { path: 'Raoued',        component: UpgradeComponent },
];
