import React from "react";

export const FooterInfo = () => {
  const today = new Date();

  return (
    <footer>
      <div className="ja">@ Jorge Alfaro {today.getFullYear()}</div>
    </footer>
  );
};
