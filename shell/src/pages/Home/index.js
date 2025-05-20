import React from "react";
import { Button, Container, SuspenseLayout } from "../../components";
import s from "./home.module.scss";

const Home = () => {
  return (
    <SuspenseLayout>
      <Container>
        <div className={s.home}>
          {/* Hero Section */}
          <section className={s.hero}>
            {/* <figure>
              <img src={"/images/hero.jpg"} alt="hero" />
            </figure> */}
            <h1>Welcome to our website</h1>
            <p>Modern and engaging experience.</p>
            <Button type="light">Get Started</Button>
          </section>

        </div>
      </Container>
    </SuspenseLayout>
  );
};

export default Home;
