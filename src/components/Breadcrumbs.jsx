import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { Context } from "../index";

import crumbimg from "../assets/crumb.png";
import "../styles/NavBar.css";

export const Breadcrumbs = observer(() => {
  const { BreadCrumbs } = useContext(Context);
  const isLast = (index) => {
    return index === BreadCrumbs.crumbs.length - 1;
  };

  return (
    <Container className="mt-3">
      <div className="d-flex flex-row">
        {BreadCrumbs.crumbs.map((crumb, index) => {
          return isLast(index) ? (
            <div key={index} style={{ fontWeight: "bold", color: "black" }}>
              {crumb.name}
            </div>
          ) : (
            <div key={index}>
              <NavLink className="crumbs" to={crumb.to}>
                {crumb.name}
              </NavLink>
              <img
                style={{ margin: "0px 12px 0px 12px" }}
                src={crumbimg}
                alt="crumb"
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
});
