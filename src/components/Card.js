import React from "react";

import Button from "./Button";
import Text from "./Text";

const Card = ({ title, subTitle, actionText, onAction = () => {} }) => (
  <>
    {title && <Text hero>{title}</Text>}
    {subTitle && <Text heading>{subTitle}</Text>}
    {actionText && <Button onClick={onAction}>{actionText}</Button>}
  </>
);

export default Card;
