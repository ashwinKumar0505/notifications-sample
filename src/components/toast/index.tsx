import React from "react";
import ToastContext from "./toastContext";
import ToastProvider from "./ToastProvider";

const useToasts = () => React.useContext(ToastContext);
export { ToastProvider, useToasts };
