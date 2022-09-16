import React from "react";

import { buttonData } from "../dummydata/Data";
import makeStyles from "../buttonComp/ButtonCompCss";

function ButtonComp() {
  const classes = makeStyles();
  return (
    <div className={classes.buttonCompSetup}>
      <div>
        {buttonData.map((title) => (
          <button className={classes.buttonCompSetupBtn} key={title.id}>
            {title.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonComp;
