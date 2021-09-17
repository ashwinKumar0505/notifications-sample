import React from "react";
import { TStatus } from "./ToastProvider";

const ToastContext = React.createContext<{
  add: (toast: { description: string; status: TStatus }) => void;
  remove: () => void;
  removeByStatus: (status: TStatus) => void;
}>({ add: () => {}, remove: () => {}, removeByStatus: () => {} });

export default ToastContext;
