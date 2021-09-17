import { Box } from "@chakra-ui/react";
import React, { ReactElement, useEffect } from "react";
import Toast from "./toast";
import ToastContext from "./toastContext";

export type TStatus = "success" | "info" | "warning" | "error";

export type TToast = {
  id: number;
  description: string;
  status: TStatus;
};

const ToastProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const [toasts, setToasts] = React.useState<TToast[]>([]);

  const remove = () => {
    const newToasts = toasts.slice(1, toasts.length);
    setToasts(newToasts);
  };

  const removeById = (id: number) => {
    setToasts([...toasts.filter((toast) => toast.id !== id)]);
  };

  const removeByStatus = (status: TStatus) => {
    setToasts(toasts.filter((toast) => toast.status !== status));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      remove();
    }, 2000);
    return () => clearTimeout(timeout);
  });

  const add = (newToast: { description: string; status: TStatus }) => {
    console.log(newToast);
    const id = toasts.length + 1;
    setToasts([...toasts, { id, ...newToast }]);
  };

  return (
    <ToastContext.Provider value={{ add, remove, removeByStatus }}>
      {children}
      <Box position="fixed" right={0} top={0} zIndex="100">
        {toasts.map(({ description, id, status }) => (
          <Toast
            key={id}
            id={id}
            status={status}
            description={description}
            removeById={removeById}
          />
        ))}
      </Box>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
