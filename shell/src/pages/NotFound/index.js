import React from "react";
import { SuspenseLayout } from "../../components";
import s from "./not-found.module.scss";
const NotFound = () => {
  return (
    <SuspenseLayout>
      <div className={s.notFound}>
        <h1 className={s.title}>404</h1>
        <p className={s.description}>Page not found</p>
      </div>
    </SuspenseLayout>
  );
};

export default NotFound;
