import LegalPage from "../../components/pages/LegalPage";
import { privacyPolicy } from "../../../lib/legal/pages";

export default function Page() {
  return <LegalPage page={privacyPolicy} currentPath="/legal/privacy-policy" />;
}
