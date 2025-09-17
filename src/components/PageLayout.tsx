import type { JSX, ReactNode } from "react";

export const PageLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => <div className="h-screen w-screen p-8">{children}</div>;
