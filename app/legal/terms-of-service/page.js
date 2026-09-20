import LegalPage from "../../components/pages/LegalPage";
import { termsOfService } from "../../../lib/legal/pages";

export default function Page() {
  return <LegalPage page={termsOfService} currentPath="/legal/terms-of-service" />;
}
