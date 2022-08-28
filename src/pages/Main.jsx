import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";

export const Main = observer(() => {
  const { Categories, BreadCrumbs } = useContext(Context);
  const history = useNavigate();
  useEffect(() => {
    BreadCrumbs.setCrumbs(BreadCrumbs.crumbs.slice(0, 1));
    Categories.setSelectedCategory({}, false);
    history("/category");
  });
  return <></>;
});
