import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function IamBar() {
  return (
    <div className={styles.container}>
      <Head>
        <title>This is who I am</title>
        <link rel="icon" href="/me_pic_2.ico" />
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <main>
        <h1 className={styles.title}>with no filters</h1>

        <p className={styles.description}>
          Wow! a bug? styles.description not excists
        </p>
        <p className={styles.description}>
          Are you curious? You should be because we have a major leap for you
          waiting...
        </p>
      </main>
      <h2 className={styles.title}>
        <Link href="/">Back to home</Link>
      </h2>

      <footer>
        <a
          href="https://barhoring.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/me_pic_2.ico" alt="Bar" className={styles.logo} />
        </a>
      </footer>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
