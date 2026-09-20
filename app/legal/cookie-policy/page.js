import LegalPage from "../../components/pages/LegalPage";
import { cookiePolicy } from "../../../lib/legal/pages";

export default function Page() {
  return <LegalPage page={cookiePolicy} currentPath="/legal/cookie-policy" />;
}
