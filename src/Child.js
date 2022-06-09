import { useEffect, useState } from "react";

export const Child = () => {
  useEffect(() => {
    console.log("Child Mounted");

    return () => {
      console.log("Child Unmounted");
    };
  }, []);

  const [foo, setFoo] = useState();

  useEffect(() => {
    return () => {
      console.log("Unmount invokes cleanup for all effects");
    };
  }, [foo]);

  return <div>Child component</div>;
};
