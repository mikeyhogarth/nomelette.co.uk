import React from "react";
import Head from "next/head";
export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy | Nomelette</title>
      </Head>
      <h2>tl;dr</h2>
      <p>
        We don&apos;t track you, we don&apos;t want to track you, we do not have
        any interest in who you are or why you are here - but we are going to
        give you some cookie-like things and these are explained below. If you
        do not like this, please leave the site immediately.
      </p>
      <h2>Soapbox</h2>
      <p>
        The creators of this site are opposed to GDPR in its current form. We
        feel that the law is currently over the top and the implementers do not
        understand the damage they are causing to innovation. This site was made
        far less possible by their ridiculous rulings and legistlation, despite
        the fact that nobody involved in the site has any interest in invading
        or infringing upon anyone&apos;s privacy.
      </p>
      <p>
        That said, we don&apos;t want to get into any trouble about this
        completely harmless website so we are forced legally to provide the
        following pointless blurb to you.
      </p>
      <h2>Privacy</h2>
      <p>
        nomelette.co.uk is a read-only resource providing recipes to people who
        might want to cook them. This application does not store, or attempt to
        store, any personally identifiable information from users - this
        includes anonymous analytics that would otherwise help us to improve the
        site.
      </p>
      <h2>Cookies</h2>
      <p>
        We do not set any cookies on your device, however there are two
        &quot;cookie-like&quot; items that may be set on your device when you
        visit this application; Cache Storage - Caches data the user has already
        downloaded/read. Service Worker - Allows the user to install the app
        locally if they want to (will only be installed if the user asks it to
        be). Both of these exist purely to prevent the user having to
        re-download data they&apos;ve already downloaded and to make the site
        load faster. We believe this usage falls under the ICO&apos;s exemptions
        in that they are being set purely for the purpose of carrying out
        communication over a network (or in this case, NOT needlessly carrying
        out that communication). We also believe these cookie-like items to be
        strictly necessary / essential to ensure this site maintains a low
        carbon footprint.
      </p>
    </>
  );
}
