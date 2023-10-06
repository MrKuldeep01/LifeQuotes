let pre = document.querySelector(".pre");
let next = document.querySelector(".next");
let quoteplace = document.querySelector(".quotesdata");
let p = document.querySelector(".quote");

let quote = [
  {
    data: `The way to get started is to quit talking and begin doing. -Walt Disney`,
  },

  {
    data: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs`,
  },

  {
    data: `The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt`,
  },

  {
    data: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey`,
  },

  {
    data: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron`,
  },

  {
    data: `You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. -John Lennon`,
  },

  ,
  {
    data: `You must be the change you wish to see in the world. -Mahatma Gandhi `,
  },

  {
    data: `Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa `,
  },

  {
    data: `The only thing we have to fear is fear itself. -Franklin D. Roosevelt    `,
  },

  {
    data: `Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can 
    do that. -Martin Luther King Jr.`,
  },

  { data: `Do one thing every day that scares you. -Eleanor Roosevelt` },

  { data: `Well done is better than well said. -Benjamin Franklin` },

  {
    data: `The best and most beautiful things in the world cannot be seen or even touched - they must be felt with 
    the heart. -Helen Keller`,
  },
  {
    data: `It is during our darkest moments that we must focus to see the light. -Aristotle    `,
  },

  {
    data: `Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo 
    Emerson`,
  },
  { data: `Be yourself; everyone else is already taken. -Oscar Wilde    ` },

  { data: `    Life is either a daring adventure or nothing. -Helen Keller` },

  { data: `Life is a long lesson in humility. -James M. Barrie` },

  {
    data: `In three words I can sum up everything I've learned about life: it goes on. -Robert Frost`,
  },

  {
    data: `You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss`,
  },

  {
    data: `Life is made of ever so many partings welded together. -Charles Dickens`,
  },

  {
    data: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with `,
  },
  { data: `the results of other people's thinking. -Steve Jobs` },

  { data: `Life is trying things to see if they work. -Ray Bradbury` },

  {
    data: `Success is not final; failure is not fatal: It is the courage to continue that counts. -Winston S. Churchill`,
  },

  {
    data: `Success usually comes to those who are too busy to be looking for it. -Henry David Thoreau`,
  },

  {
    data: `If you want to make your dreams come true, the first thing you have to do is wake up. -J.M. Power`,
  },

  {
    data: `If you really look closely, most overnight successes took a long time. -Steve Jobs`,
  },

  {
    data: `The secret of success is to do the common thing uncommonly well. -John D. Rockefeller Jr.`,
  },

  {
    data: `I find that the harder I work, the more luck I seem to have. -Thomas Jefferson`,
  },

  {
    data: `The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt`,
  },

  {
    data: `You’re braver than you believe, and stronger than you seem, and smarter than you thin     `,
  },

  { data: `Keep your face to the sunshine and you cannot see a shadow     ` },

  {
    data: `In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact. `,
  },

  { data: `The only time you fail is when you fall down and stay down. ` },

  { data: `Positive anything is better than negative nothing. ` },

  {
    data: `Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you. `,
  },

  {
    data: `Happiness is an attitude. We either make ourselves miserable, or happy and strong. The amount of work is the same.`,
  },

  { data: `It’s not whether you get knocked down, it’s whether you get up. ` },

  {
    data: `The struggle you’re in today is developing the strength you need tomorrow. `,
  },

  { data: `Happiness is the only thing that multiplies when you share it. ` },

  {
    data: `The happiness of your life depends upon the quality of your thoughts. `,
  },

  {
    data: `Once you replace negative thoughts with positive ones, you’ll start having positive results. `,
  },

  {
    data: `    Positive thinking will let you do everything better than negative thinking will. `,
  },

  {
    data: `The way I see it, if you want the rainbow, you gotta put up with the rain. `,
  },

  {
    data: `The more you praise and celebrate your life, the more there is in life to celebrate. `,
  },

  {
    data: `If you want light to come into your life, you need to stand where it is shining. `,
  },

  {
    data: `The good life is a process, not a state of being. It is a direction, not a destination. `,
  },

  {
    data: `A truly happy person is one who can enjoy the scenery while on a detour. `,
  },

  {
    data: `You’re off to great places, today is your day. Your mountain is waiting, so get on your way. `,
  },

  {
    data: `Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before. `,
  },

  {
    data: `Winning is fun, but those moments that you can touch someone’s life in a very positive way are better.`,
  },

  {
    data: `Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive  ,attitude.`,
  },

  { data: `You are never too old to set another goal or dream a new dream. ` },

  {
    data: `    Every day may not be good… but there’s something good in every day. `,
  },

  {
    data: `The difference between ordinary and extraordinary is that little extra. `,
  },

  {
    data: `Be so happy that, when other people look at you, they become happy too. `,
  },

  { data: `No one is perfect – that’s why pencils have erasers. ` },

  { data: `    No one is perfect – that’s why pencils have erasers. ` },

  {
    data: `Let your unique awesomeness and positive energy inspire confidence in others. `,
  },

  {
    data: `Wherever you go, no matter what the weather, always bring your own sunshine. `,
  },

  {
    data: `When we are open to new possibilities, we find them. Be open and skeptical of everything. `,
  },

  { data: `Live life to the fullest and focus on the positive. ` },

  { data: `You always pass failure on the way to success. ` },

  { data: `It always seems impossible until it is done. ` },

  {
    data: `When you are enthusiastic about what you do, you feel this positive energy. It’s very simple. `,
  },

  { data: `It makes a big difference in your life when you stay positive. ` },

  { data: `If opportunity doesn’t knock, build a door. ` },

  {
    data: `The sun himself is weak when he first rises, and gathers strength and courage as the day gets on. `,
  },

  { data: `Success is the sum of small efforts repeated day in and day out. ` },
];
arraylength = quote.length;
let i = new Number(0);

let update = () => {
  i = Math.floor(Math.random() * arraylength + 1);
  quoteplace.innerHTML = ` <p class="quote">
  ${quote[i].data}
</p>`;
  console.log("done");
};

next.addEventListener("click", () => {
  update();
});
pre.addEventListener("click", () => {
  console.log("pre");
  update();
});
update();
