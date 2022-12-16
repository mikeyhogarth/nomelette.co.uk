import { Metadata, Typography } from "@/components";

export default function About() {
  return (
    <>
      <Metadata title="About" />
      <Typography el="h1">About</Typography>
      <Typography el="h2">What is Nomelette?</Typography>
      <Typography el="p">
        Years ago my grandmother, Sheila Hogarth, used to teach recipe classes
        in the Carlisle and Cumbria area. Her years of expertise in the kitchen
        saw her become the author of around a thousand recipes and adaptations
        covering many types of cullinary genre, from delicious starters to
        mouthwatering desserts. Sheila passed away in 2000. Her archive of
        recipes (both compilations and hundreds of hand-written recipes) passed
        on to my parents and I thought it might be a nice idea to put them on
        the internet rather than letting them gather dust in the loft.
      </Typography>

      <Typography el="h2">What kinds of recipes are featured?</Typography>
      <Typography el="p">
        In a nutshell this is old-school family recipes - not entirely
        unhealthy... but also probably not the best things to be eating
        regularly if you are trying to keep in shape. They&apos;re being shared
        here to keep them alive. These days people are a little more concious
        about nutrition and calories (which is a good thing) so this is just a
        fair warning that &quot;healthy recipes&quot; is not really what
        Nomelette is offering. What you will find is hearty, filling and
        traditional recipes which when enjoyed in moderation will be a hit with
        both yourself and your guests.
      </Typography>
      <Typography el="p">
        You may also see certain comments throughout the site with a
        &quot;(sic)&quot; aside - we copied down the recipes exactly as written,
        so if Sheila had made a throwaway comment about a recipe being &quot;a
        good idea for a millenium party&quot; then that&apos;s what it&apos;ll
        say on the site, despite the fact that the millenium has been and gone.
        There are also a few comments which haven&apos;t aged very well, but
        they&apos;ve been left in too - nothing too bad but it doesn&apos;t
        really feel right to censor them :)
      </Typography>
    </>
  );
}
