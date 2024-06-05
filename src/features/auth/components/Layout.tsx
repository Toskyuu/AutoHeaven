import { Outlet } from 'react-router-dom';

import LandingPageLayout from "../../../components/Elements/LandingPage/LandingPageLayout/LandingPageLayout.tsx";
import {Card} from "../../../components/Elements/Card";

export const Layout = () => {
  return (<LandingPageLayout>
    <Card>
        <Outlet />
    </Card>
      </LandingPageLayout>
  );
};
