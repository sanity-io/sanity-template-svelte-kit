<div id="about">
  <section class="bio bio-light" id="bio">
    <div>
      <h2>Dedicated to bringing your special <br /> moments to life.</h2>
      <p>
        Born and raised in Moose Jaw, SK, I started my photography journey with my first DSLR camera
        at 15 years of age. After pursuing a Bachelors degree in Calgary, AB, I have realized that
        being both in Alberta and Saskatchewan is what I am destined to do!
      </p>
    </div>
  </section>
  <div class="portrait">
    <img src="/temp/portrait.jpeg" alt="photographer portrait" />
  </div>
  <section class="bio bio-dark" id="bio-travel">
    <div>
      <img class="mobile-portrait" src="/temp/portrait.jpeg" alt="photographer portrait" />
      <p>
        I am always willing to go the distance to capture your family photos, ranching, agriculture,
        portraits, boudoir, wedding, and anything you can dream of, I am here to help!
      </p>
      <h2>Travel is my passion.</h2>
    </div>
  </section>
</div>

<style>
  .mobile-portrait {
    margin-bottom: var(--space-1);
    transform: translate3d(-20px, 0, 0);
  }
  .portrait {
    display: none;
    justify-content: center;
    background: linear-gradient(to bottom, var(--light) 50%, var(--dark) 50%);
  }

  div#about {
    position: relative;
  }

  div#about img {
    width: 150px;
    height: 150px;

    float: left;
    clear: both;

    shape-outside: ellipse();

    border-radius: 10000px;
    border: solid white 2px;
    -webkit-appearance: none;
    box-shadow: 0px 0px 4px var(--dark);
    object-fit: cover;
  }

  section.bio {
    padding: var(--space-2);
  }
  section.bio p {
    font-size: var(--font-big);
  }
  section.bio.bio-dark {
    padding-bottom: var(--space-2);
    background-color: var(--dark);
    color: var(--light);
  }

  @media (max-width: 766px) {
    section.bio.bio-dark h2 {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    section.bio.bio-dark {
      padding-bottom: var(--space-5);
    }
  }

  section.bio.bio-light {
    padding-top: var(--space-5);
    background-color: var(--light);
    color: var(--dark);
  }

  #bio {
    box-shadow: var(--shadow-inset-top);
  }

  #bio-travel {
    box-shadow: var(--shadow);
  }

  h2 {
    font-size: var(--font-larger);
    font-family: var(--font-accent);
    text-align: center;
    margin-top: var(--space-2);
    margin-bottom: var(--space-2);
  }

  @media (min-width: 768px) {
    div#about {
      display: grid;
      grid-template-rows: 1fr auto 1fr;
    }

    .mobile-portrait {
      display: none;
    }
    .portrait {
      display: flex;
    }

    section.bio {
      padding: unset;
      padding-inline: var(--space-2);
    }

    div#about img {
      width: 200px;
      height: 200px;
    }

    h2 {
      text-align: unset;
    }
    section {
      display: flex;
      justify-content: center;
    }
    section > div {
      max-width: var(--content-max-width);
    }

    section:not(#contact) > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-5);
      width: 100%;
    }

    section.bio.bio-light p {
      text-justify: newspaper;
      max-width: 25vw;
    }
    section.bio.bio-dark p {
      text-justify: newspaper;
      max-width: 25vw;
    }
  }
</style>
