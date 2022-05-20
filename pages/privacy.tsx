import React from "react";
import Head from "next/head";
export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy | Nomelette</title>
      </Head>
      <h2>In a nutshell...</h2>
      <p>
        We don&apos;t track you, we don&apos;t want to track you. We would love
        to know how you are using this site because we spent a lot of time
        putting it together and we are interested in how many people are
        visiting and what content they are finding the most engaging, however
        the law as it currently stands would require us to inconvenience our
        users with a popup if we wanted to do that, and we do not want to be
        part of that problem.
      </p>
      <p>
        We are going to give you some cookie-like things to help the site run
        faster, these are explained below. If you do not approve of this, please
        leave the site immediately.
      </p>
      <h2>Soapbox</h2>
      <p>
        The creators of this site are opposed to GDPR in its current form. We
        feel that the law is currently confusing and over the top, and that the
        implementers do not understand the technology involved or the damage
        they are doing to innovation by restricting it in the way they have.
        This site was made far less possible by their careless rulings and
        legistlation.
      </p>
      <p>
        That said, we don&apos;t want to get into any trouble about this
        completely harmless website so we are forced legally to provide the
        following statements to you.
      </p>
      <h2>Privacy</h2>
      <p>
        nomelette.co.uk is a read-only resource providing recipes to people who
        might want to cook them. This application does not store, or attempt to
        store, any personally identifiable information from users - this
        includes anonymous analytics that would otherwise help us to improve the
        site.
      </p>
      <h2>Cookies and Cookie-like items</h2>
      <p>
        We do not set any cookies on your device, however there are some
        &quot;cookie-like&quot; items that may be set on your device when you
        visit and use this application;
      </p>
      <dl className="pb-4">
        <dt className="font-bold pt-4">Local and Session Storage</dt>{" "}
        <dd>
          These are used for caching data that the user has already
          downloaded/read.
        </dd>
        <dt className="font-bold pt-4">Service Worker</dt>
        <dd>
          Allows the user to install the app locally if they want to (will only
          be installed if the user asks it to be).{" "}
        </dd>
      </dl>
      <p>
        These exist purely to prevent the user having to re-download data
        they&apos;ve already downloaded, provide a better user experience and to
        make the site load faster. We believe this usage falls under the
        ICO&apos;s exemptions in that they are being set purely for the purpose
        of carrying out communication over a network (or in this case, NOT
        needlessly carrying out that communication). We also believe these
        cookie-like items to be strictly necessary / essential to ensure this
        site maintains a low carbon footprint.
      </p>
    </>
  );
}
