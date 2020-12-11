import Head from "next/head";
import styles from "../styles/Home.module.css";
import stylesF from "../styles/Carousel.module.css";
import stylesG from "../styles/CarouselG.module.css";

import Nav from "../component/Nav/Nav";
import Testimonials from "../component/Testimonials";
import CarouselWrapper from "../component/CarouselWrapper";
import { facilities, gallery } from "../component/TheLight";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnchor,
  faCalendar,
  faCheck,
  faEnvelopeOpen,
  faMailBulk,
  faMap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Light Schools</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Nav />
      </header>
      <main className={styles.main}>
        <section className={styles.hero90}>
          <div className={styles.heroContent}>
            <h1>THE LIGHT SCHOOLS</h1>
            <p>
              Our Mission is to empower our children to achieve their greatest
              potential both as students and as members of their communities.
            </p>
            <div className={styles.ctaDiv}>
              <button className={styles.enroll}>
                <FontAwesomeIcon icon={faAnchor} /> Enroll Today
              </button>
              <button className={styles.tour}>
                <FontAwesomeIcon icon={faCalendar} /> Schedule a Tour
              </button>
            </div>
          </div>
        </section>
        <section className={styles.cores}>
          <div className={styles.core_1}>
            <div className={styles.circle}>
              <img src="/031-teacher.png" alt="expert teachers" />
            </div>
            <h2 className={styles.title}>Expert Teachers</h2>
            <p>
              Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Proin eget tortor risus.
            </p>
          </div>
          <div className={styles.core_2}>
            <div className={styles.circle}>
              <img src="/030-tablet.svg" alt="quality" />
            </div>
            <h2 className={styles.title}>Quality Education</h2>
            <p>
              Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Proin eget tortor risus.
            </p>
          </div>
          <div className={styles.core_3}>
            <div className={styles.circle}>
              <img src="/025-school.svg" alt="expert teachers" />
            </div>
            <h2 className={styles.title}>Day &amp; Boarding</h2>
            <p>
              Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Proin eget tortor risus.
            </p>
          </div>
          <div className={styles.core_4}>
            <div className={styles.circle}>
              <img src="/013-graduate.svg" alt="expert teachers" />
            </div>
            <h2 className={styles.title}>Alumnus Support</h2>
            <p>
              Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Proin eget tortor risus.
            </p>
          </div>
        </section>
        <section className={styles.welcome}>
          <div className={styles.intro}>
            <h1>Welcome to Our School</h1>
          </div>
          <div className={styles.welcomeContent}>
            <div className={styles.welcome_col_1}>
              <div className={styles.philosophy}>
                <img src="/our_school.jpg" />
                <div>
                  <h3>Our Educational Principle &amp; philosophy</h3>
                  <p>
                    Any group of people who believe in an idea which they accept
                    as their way of life would also want their future
                    generations to adopt such idea so as to preserve it. The
                    culture of a group of people is what determines the peoples’
                    civilization, their goals and their way of life. Based on
                    their culture the people are defined as one unique human
                    entity. Further more it is the culture that distinguishes
                    one group of people from another. This also holds true for
                    the Muslim community.
                  </p>
                  <span>Read More</span>
                </div>
              </div>
            </div>
            <div className={styles.welcome_col_2}>
              <div className={styles.grid_gallery}>
                <img src="/gallery01.jpg" />
                <img src="/gallery02.jpg" />
                <img src="/gallery01.jpg" />
                <img src="/gallery02.jpg" />
                <div className={styles.overlay}>
                  <Link href="/">
                    <a>Gallery</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.custom} id="facilities">
          <CarouselWrapper
            styles={stylesF}
            data={facilities}
            heading="Our Facilities"
          />
        </section>
        <section className={styles.admissions}>
          <div className={styles.container}>
            <h1>We are the best choice for your child</h1>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Cras ultricies ligula sed magna dictum porta.
            </p>
            <span>
              <Link href="/download.pdf">
                <a>Apply</a>
              </Link>
            </span>
          </div>
        </section>
        <section className={styles.custom} id="gallery">
          <CarouselWrapper
            styles={stylesG}
            data={gallery}
            heading="Photo Gallery"
          />
        </section>
        <section className={styles.testimonials}>
          {/* <Testimonials /> */}
        </section>
        <section className={styles.subscribes}>
          <div className={styles.title}>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <span>subscribe to our mail</span>
          </div>
          <div className={styles.action}>
            <input placeholder="your email address" />
            <span>subscribe</span>
          </div>
        </section>
      </main>
      <footer className={styles.footer} id="contact">
        <div className={styles.container}>
          <div className={styles.about}>
            <div className={styles.brand}>
              <img src="/logo.png" className={styles.logo} />
              <div className={styles.name}>
                <h1>The Light</h1>
                <h3>Schools</h3>
              </div>
            </div>
            <p>
              Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut
              libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
              auctor sit amet aliquam vel, ullamcorper sit amet ligula.
            </p>
          </div>
          <div className={styles.quickLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Campuses</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </div>
          <div className={styles.socials}>
            <h3>Follow us</h3>
            <ul>
              <li>
                <a>
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon icon={faYoutube} /> Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.location}>
            <h3>Get in touch</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMap} /> No Billings Way, Ikoyi, Kano
                (Day Campus)
              </li>
              <li>
                <FontAwesomeIcon icon={faMap} /> Wellington close, Opebi, Kano
                (Boarding Campus)
              </li>
              <li>
                <FontAwesomeIcon icon={faMailBulk} /> info@example.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> +23412345678
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.copyright}> Made with &hearts;</div>
      </footer>
    </div>
  );
}
