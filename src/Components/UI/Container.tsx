import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Container = ({ children, className = "", id }: ContainerProps) => {
  return (
    <div id={id} className={`mx-auto max-w-6xl px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
