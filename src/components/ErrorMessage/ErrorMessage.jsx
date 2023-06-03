import { Alert } from "flowbite-react";
import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const ErrorMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <Alert color="success" icon={RiErrorWarningLine}>
        <span>
          <p>
            <span className="font-medium">Info alert!</span>
            {message}
          </p>
        </span>
      </Alert>
      <button onClick={() => setVisible(!visible)}>
        {<MdClose className="w-8 h-8" />}
      </button>
    </div>
  );
};

export default ErrorMessage;
