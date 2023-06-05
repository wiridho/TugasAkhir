"use client";
import React from "react";
f;
import { MdClose } from "react-icons/md";

const ErrorMessage = ({ message, onClose }) => {
  return (
    <div>
      <div>
        <div
          className="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg"
          role="alert"
        >
          <p>{message}</p>
          <span className="absolute inset-y-0 right-0 flex items-center mr-4">
            <button onClick={onClose}>
              {<MdClose className="w-4 h-4 inline" />}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
