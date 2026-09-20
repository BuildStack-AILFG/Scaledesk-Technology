import LegalPage from "../../components/pages/LegalPage";
import { securityPage } from "../../../lib/legal/pages";

export default function Page() {
  return <LegalPage page={securityPage} currentPath="/legal/security" />;
}
