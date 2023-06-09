import { ReactNode, useEffect, useState } from "react";
import "./MerchantBox.scss";
import { motion } from "framer-motion";

interface Props {
  text: string;
  children: ReactNode;
}

const MerchBox = (props: Props) => {
  const [rotateDegree, setRotateDegree] = useState<number>();
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: rotateDegree,
    },
  };
  useEffect(() => {
    setRotateDegree(Math.floor(Math.random() * 18) - 9);
  }, []);
  return (
    <motion.div
      className="merch-box"
      style={{ cursor: "pointer" }}
      variants={item}
    >
      {props.children}
      <p className="merch-box-text">{props.text}</p>
    </motion.div>
  );
};

export default MerchBox;
