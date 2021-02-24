export default () => {

  const texts = [

    "The New Yorker, June 28, 1976 P"
    + "In 1939, in Chicago, my mother was buying dishes that had come from Czechoslovakia because"
    + "they made the best china and she was marrying an American Czech. That was the first year of"
    + "the war, when Europe began to eat itself raw. The teacups are mine now, because"
    + "I'm her daughter and she cleaned out her china cabinet last week."
    + " I try to get her to talk about her life, but she won't."
    + "Everything drives me into the past that she insists is safely gone."
    + " She knows I'm saying marriage isn't there anymore. My friends and I try to describe even one thing,"
    + " like a teacup, but it flies apart in words. It's as if my mother has always been saying, Darling, look at the teacup. It has more to say.",


    "The issue of climate change is often one which is put on the backburner"
    + "by both politicians and the population at large."
    + "Whilst the issue has been on the political agenda in several countries numerous times"
    + "in the twenty-first century, the efforts to bring about impactful change remain minimal."
    + " I thought it would be interesting to use Gale Primary Sources to investigate the developing"
    + "history of climate change consensus over the last thirty years or so",

    "I believe that everything happens for a reason. People change so that you can learn to let go,"
    + " things go wrong so that you appreciate them when they're right, you believe lies so you eventually"
    + " learn to trust no one but yourself, and sometimes"
    + " good things fall apart so better things can fall together.",

    "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If"
    + " you want to make sure of keeping it intact you must give it to no one, not even an animal."
    + " Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe"
    + " in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless"
    + " will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable."
    + " To love is to be vulnerable"
  ];
  
  return texts[Math.floor(Math.random()*texts.length)];

}