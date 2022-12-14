import Head from "next/head";

interface Props {
  title: string;
  description?: string;
}

export default function Metadata({
  title,
  description = "Old school family recipes from the heart of Cumbria by Sheila Hogarth",
}: Props) {
  const siteNameTitle = `${title} | Nomelette`;

  return (
    <Head>
      <title key="title">{siteNameTitle}</title>
      <meta name="description" content={description} key="desciption" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="author" content="Mikey" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nomelette" />
      <meta
        key="ogImage"
        property="og:image"
        content="/media/icons/android-chrome-192x192.png"
      />
      <meta
        key="twitterImage"
        name="twitter:image"
        content="/media/icons/android-chrome-192x192.png"
      />
      <meta
        key="ogDescription"
        property="og:description"
        content="Old school family recipes from the heart of Cumbria by Sheila Hogarth"
      />
    </Head>
  );
}
