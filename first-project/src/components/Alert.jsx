import { ReactNode } from "react";

export const Alert = (ReactNode) => {
  return <div className="alert alert-primary">{ReactNode}</div>;
};
