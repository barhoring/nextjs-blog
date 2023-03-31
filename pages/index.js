import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>
          <Link href="/posts/iambar">Back to posts</Link>
        </h2>
        <div className="rounded shadow-card">
          <div className="p-16 w-full">
            <label className="block w-full text-slate-500">subject</label>
            <input
              className="p-2 rounded-md focus:border-teal-500 focus:outline-none	 border border-slate-200"
              type="text"
              id="subject"
            ></input>
            <label className="block w-full text-slate-500">Message:</label>
            <textarea
              className="w-full"
              placeholder="your message to me"
            ></textarea>
            <button
              onClick={async () => {
                const response = await fetch(`/api/hello`);
                const json = await response.json();
                const { text } = json;
                console.log(text);
              }}
              className="ring ring-green-300 border  bg-teal-500 px-6 hover:bg-violet-600 active:bg-violet-400"
            >
              Submit
            </button>
          </div>
        </div>
        <p>
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full shadow-lg"
            height={108}
            width={108}
            alt=""
          />
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
