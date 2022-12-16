import { Metadata, Typography } from "@/components";

export default function Privacy() {
  return (
    <>
      <Metadata title="Privacy" />

      <Typography el="h2">In a nutshell...</Typography>
      <Typography el="p">
        We don&apos;t track you, we don&apos;t want to track you. We would love
        to know how you are using this site because we spent a lot of time
        putting it together and we are interested in how many people are
        visiting and what content they are finding the most engaging, however
        the law as it currently stands would require us to inconvenience our
        users with a popup if we wanted to do that, and we do not want to be
        part of that problem.
      </Typography>
      <Typography el="p">
        We are going to give you some cookie-like things to help the site run
        faster, these are explained below. If you do not approve of this, please
        leave the site immediately.
      </Typography>
      <Typography el="h2">Soapbox</Typography>
      <Typography el="p">
        The creators of this site are opposed to GDPR in its current form. We
        feel that the law is currently confusing and over the top, and that the
        implementers do not understand the technology involved or the damage
        they are doing to innovation by restricting it in the way they have.
        This site was made far less possible by their careless rulings and
        legistlation.
      </Typography>
      <Typography el="p">
        That said, we don&apos;t want to get into any trouble about this
        completely harmless website so we are forced legally to provide the
        following statements to you.
      </Typography>
      <Typography el="h2">Privacy</Typography>
      <Typography el="p">
        nomelette.co.uk is a read-only resource providing recipes to people who
        might want to cook them. This application does not store, or attempt to
        store, any personally identifiable information from users - this
        includes anonymous analytics that would otherwise help us to improve the
        site.
      </Typography>
      <Typography el="h2">Cookies and Cookie-like items</Typography>
      <Typography el="p">
        We do not set any cookies on your device, however there are some
        &quot;cookie-like&quot; items that may be set on your device when you
        visit and use this application;
      </Typography>
      <dl className="pb-4">
        <dt className="pt-4 font-bold">Local and Session Storage</dt>
        <dd>
          These are used for caching data that the user has already
          downloaded/read.
        </dd>
        <dt className="pt-4 font-bold">Service Worker</dt>
        <dd>
          Allows the user to install the app locally if they want to (will only
          be installed if the user asks it to be).
        </dd>
      </dl>
      <Typography el="p">
        These exist purely to prevent the user having to re-download data
        they&apos;ve already downloaded, provide a better user experience and to
        make the site load faster. We believe this usage falls under the
        ICO&apos;s exemptions in that they are being set purely for the purpose
        of carrying out communication over a network (or in this case, NOT
        needlessly carrying out that communication). We also believe these
        cookie-like items to be strictly necessary / essential to ensure this
        site maintains a low carbon footprint.
      </Typography>
    </>
  );
}
