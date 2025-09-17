// components
import { ChatWidget } from "@/components/ChatWidget";
import { PageLayout } from "@/components/PageLayout";

// types
import type { JSX } from "react";

const App = (): JSX.Element => {
  return (
    <PageLayout>
      <ChatWidget />
    </PageLayout>
  );
};

export default App;
