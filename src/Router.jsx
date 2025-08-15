import { Route, Routes } from "react-router-dom";
import {
  Optin,
  Successful,
  Replay,
  Article,
  LongForm,
  Privacy,
  Terms,
  Disclaimer,
  Faq,
  Payment,
  OptinNew,
  OptinNewCopy,
} from "./Index";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/new-optin" element={<OptinNew />}>
          Optin
        </Route>
        <Route path="/new-optin2" element={<OptinNewCopy />}>
          Optin
        </Route>
        <Route path="/" element={<Optin />}>
          Optin
        </Route>
        <Route path="/bridge" element={<Successful />}>
          Successful
        </Route>
        <Route path="/replay" element={<Replay />}>
          Replay
        </Route>
        <Route path="/article" element={<Article />}>
          Article
        </Route>
        <Route path="/pp" element={<LongForm />}>
          Long Form
        </Route>
        <Route path="/privacy" element={<Privacy />}>
          Privacy
        </Route>
        <Route path="/terms" element={<Terms />}>
          Terms
        </Route>
        <Route path="/disclaimer" element={<Disclaimer />}>
          Disclaimer
        </Route>
        <Route path="/f" element={<Faq />}>
          Faq
        </Route>
        <Route path="/Payment" element={<Payment />}>
          Payment
        </Route>
      </Routes>
    </>
  );
};

export default Router;
