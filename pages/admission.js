import Head from "next/head";
import Nav from "../component/Nav/Nav";
// import styles from "../styles/about.module.css";
import styles from "../styles/admissions.module.css";
import Apply from "../component/ApplicationForm";
const apply = () => {
  return (
    <div className={" "}>
      <Head>
        <title>Admission</title>
      </Head>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.title}>
            <h1>Admission</h1>
          </div>
        </section>
        <section className={styles.formSection}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <h1>The Light Schools Application</h1>
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Quisque velit nisi, pretium ut lacinia in, elementum id
                enim.
              </p>
              <hr></hr>
            </div>
            <div className={styles.content}>
              <Apply />
            </div>
          </div>
        </section>
        <footer className={styles.footer}>
          All right reserved || Powered by Cloud10
        </footer>
      </main>
    </div>
  );
};

export default apply;
