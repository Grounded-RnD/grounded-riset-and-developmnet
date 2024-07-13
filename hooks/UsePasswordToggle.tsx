import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const usePasswordToggle = () => {
  const [visible, setIsVisible] = useState(false);

  const Icon = <FontAwesomeIcon icon={visible ? "eye-slash" : "eye"} onClick={() => setIsVisible((visible) => !visible)} />;
  const InputType = visible ? "text" : "password";
  return [InputType, Icon];
};

export default usePasswordToggle;
