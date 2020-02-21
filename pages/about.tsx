import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const AboutPage: NextPage<{}> = () => (
  <>
    <h1>About page</h1>
    <Link href="/">
      <a>Home</a>
    </Link>
  </>
);

export default AboutPage;
