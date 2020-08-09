import React from "react";

import Button from "./Button";
import Text from "./Text";

const Card = ({ title, subTitle, actionText, onAction = () => {} }) => (
  <>
    {title && <Text hero>{title}</Text>}
    {subTitle && <Text heading>{subTitle}</Text>}
    {actionText && <Button text={actionText} onClick={onAction} />}
  </>
);

export default Card;
