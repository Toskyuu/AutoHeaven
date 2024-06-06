import { useMemo } from 'react';
import LandingPageLayout from "../../components/Elements/LandingPage/LandingPageLayout/LandingPageLayout.tsx";
import { useAuth} from "../../hooks/useAuth.ts";

const LandingPage = () => {
  const { token } = useAuth();

  const loginInfo = useMemo(() => {
    if (token) {
      return (<>
              <span>Jesteś zalogowany!</span>
          </>
      );
    }
  }, [token]);

  return (
    <div>
      <LandingPageLayout>
          Tu będzie strona startowa ... kiedyś :)
          {loginInfo}
      </LandingPageLayout>
    </div>
  );
};

export default LandingPage;


