import React from "react";
import classnames from "classnames";

import UserActionTopBarDropwdownBase from "./UserActionTopBarDropdownBase";

interface IProps {
  className?: string;
  title?: string;
  buttonText?: string | null;
  buttonAction?: () => void;
  buttonProps?: { [key: string]: any };
  close?: () => void;
}

const UserActionTopBarDropwdownError = (props: IProps) => {
  return (
    <UserActionTopBarDropwdownBase
      {...props}
      className={classnames(props.className, "top-bar-error")}
    />
  );
};

export default UserActionTopBarDropwdownError;
