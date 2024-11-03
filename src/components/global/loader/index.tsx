import React from "react";
import { Spinner } from "./spinner";
import { cn } from "@/lib/utils";

type Props = {
  color?: string;
  state?: string;
  className?: string;
  children?: React.ReactNode;
};

const Loader = ({ state, className, children }: Props) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner />
    </div>
  ) : (
    children
  );
};

export default Loader;
