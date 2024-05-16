import React from 'react';
import logito from "../../assets/logito.png";
import { Imagen, ToastDiv } from './toast-style';

export const showSuccessMessage = (toast, message) => {
    toast.current.show({
      severity: "success",
      content: () => (
        <ToastDiv style={{ flex: "1" }}>
          <div>
            <Imagen src={logito} shape="circle" />
          </div>
          <div className="font-medium text-lg my-3 text-900">{message}</div>
        </ToastDiv>
      ),
    });
  };
  
  export const showErrorMessage = (toast, message) => {
    toast.current.show({
      severity: "error",
      content: () => (
        <ToastDiv style={{ flex: "1" }}>
          <div>
            <Imagen src={logito} shape="circle" />
          </div>
          <div className="font-medium text-lg my-3 text-900">{message}</div>
        </ToastDiv>
      ),
    });
  };
