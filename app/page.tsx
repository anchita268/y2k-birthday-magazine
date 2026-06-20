const magazine = {
  friendName: "Harini",
  issueTitle: "THE HARINI ISSUE",
  age: "20",
  subtitle: "The Birthday Issue",
  editorName: "Anchita",
  editorLetter:
    "Dear Harini, this is your official birthday issue: a whole little magazine for the girl who has been part of my life since kindergarten and properly my friend since sixth grade. Replace this with your real letter later. Make it sweet, dramatic, funny, and a little embarrassing in the best way.",
};

const coverLines = [
  "20 years of main character energy",
  "Friends spill everything",
  "The chaos archive",
  "Kindergarten to now: the friendship timeline",
  "Limited birthday edition",
];

const photoDiary = Array.from({ length: 36 }, (_, i) => ({
  label: `/photos/photo-${String(i + 1).padStart(2, "0")}.jpg`,
  caption: [
    "Replace with photo",
    "Rare archive moment",
    "Main character evidence",
    "Memory loading...",
    "Certified chaos",
    "Best friend files",
  ][i % 6],
}));

const memoryEras = [
  {
    era: "Origin Story",
    date: "Kindergarten era",
    title: "Before we knew this would become lore",
    text: "Add the earliest friendship memory here. Keep it soft, nostalgic, and slightly funny.",
    photo: "/photos/era-1.jpg",
  },
  {
    era: "Proper Friends Era",
    date: "Sixth grade",
    title: "The actual friendship launch date",
    text: "Write about when you became proper friends in sixth grade. This can be one of the most meaningful parts.",
    photo: "/photos/era-2.jpg",
  },
  {
    era: "Chaos Era",
    date: "Teen years",
    title: "Somehow everything became iconic",
    text: "Use this for funny stories, dramatic phases, school memories, and inside jokes.",
    photo: "/photos/era-3.jpg",
  },
  {
    era: "20 Era",
    date: "Now",
    title: "Entering her twenties like a headline",
    text: "Add a message about who she is now: funny, chaotic, extroverted, and impossible to ignore.",
    photo: "/photos/era-4.jpg",
  },
];

const loveList = [
  "You make normal days feel like stories.",
  "You are accidentally hilarious.",
  "You bring the chaos, but somehow it works.",
  "You are the kind of friend people remember.",
  "You have elite main character timing.",
  "You can make any room feel less boring.",
  "You are dramatic in a very necessary way.",
  "You have the best reaction faces.",
  "You turn memories into lore.",
  "You are impossible not to love.",
  "Placeholder thing we love #11.",
  "Placeholder thing we love #12.",
  "Placeholder thing we love #13.",
  "Placeholder thing we love #14.",
  "Placeholder thing we love #15.",
  "Placeholder thing we love #16.",
  "Placeholder thing we love #17.",
  "Placeholder thing we love #18.",
  "Placeholder thing we love #19.",
  "Placeholder thing we love #20.",
];

const awards = [
  ["Most Likely To", "Start chaos and act surprised"],
  ["Best Talent", "Making everything funnier"],
  ["Signature Energy", "Extroverted headline behaviour"],
  ["Lifetime Achievement", "Being iconic since childhood"],
  ["Most Used Phrase", "Replace with inside joke"],
  ["Best Era", "The one happening right now"],
];

const interviews = [
  ["Most iconic Harini moment?", "Replace with answer from a friend."],
  ["Describe Harini in one sentence.", "Funny, chaotic, extroverted, and somehow always the plot."],
  ["Favourite memory?", "Replace with a real memory."],
  ["What should Harini do in her 20s?", "Replace with funny advice."],
];

const messages = Array.from({ length: 12 }, (_, i) => ({
  name: `Friend ${i + 1}`,
  text: "Replace this with a birthday message. Keep some short, some emotional, and some funny so the page feels real.",
  photo: `/photos/message-${i + 1}.jpg`,
}));

function PhotoBox({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`mag-photo relative flex ${tall ? "min-h-[420px]" : "min-h-[250px]"} items-center justify-center overflow-hidden rounded-sm text-center`}>
      <div className="px-4 font-serif text-lg italic text-purple-700">
        Replace with<br />
        <span className="font-sans text-xs not-italic uppercase tracking-[0.25em]">{label}</span>
      </div>
    </div>
  );
}

function Spread({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto min-h-screen max-w-7xl px-4 py-14 sm:px-8 lg:py-20">
      <div className="mb-8 flex items-end justify-between gap-4 border-b border-black/20 pb-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-pink-600">{kicker}</p>
          <h2 className="font-serif text-5xl italic leading-none sm:text-7xl">{title}</h2>
        </div>
        <p className="hidden text-right text-xs uppercase tracking-[0.25em] text-black/50 sm:block">Birthday Magazine<br />Collector's Edition</p>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#fff8fb]/80 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto text-[11px] font-bold uppercase tracking-[0.22em]">
          {["Cover", "Letter", "Archive", "Timeline", "Love", "Awards", "Interview", "Messages", "Back Cover"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="whitespace-nowrap rounded-full border border-black/10 bg-white/80 px-3 py-2 hover:bg-pink-100">
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section id="cover" className="mx-auto grid min-h-screen max-w-7xl gap-6 px-4 py-8 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div className="relative order-2 lg:order-1">
          <PhotoBox label="/photos/cover.jpg" tall />
          <div className="absolute -left-2 top-8 rotate-[-7deg] bg-pink-200 px-4 py-2 font-serif text-2xl italic shadow-paper">birthday girl</div>
          <div className="absolute -bottom-4 right-8 rotate-[4deg] rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.25em] shadow-paper">exclusive</div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-pink-600">Volume 20 · Limited Edition</p>
          <h1 className="font-serif text-7xl leading-[0.82] sm:text-8xl lg:text-[9.5rem]">{magazine.issueTitle}</h1>
          <div className="my-6 flex items-center gap-5">
            <span className="chrome font-serif text-8xl italic leading-none">{magazine.age}</span>
            <div>
              <p className="font-serif text-3xl italic">{magazine.subtitle}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-black/60">funny · chaotic · extroverted</p>
            </div>
          </div>
          <div className="grid gap-2 border-y border-black/20 py-4 sm:grid-cols-2">
            {coverLines.map((line) => (
              <p key={line} className="font-serif text-xl italic">✦ {line}</p>
            ))}
          </div>
        </div>
      </section>

      <Spread id="letter" kicker="Page 02" title="Letter from the Editor">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="paper rounded-sm p-8 shadow-editorial sm:p-12">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-8xl first-letter:italic text-xl leading-9">{magazine.editorLetter}</p>
            <p className="mt-8 font-serif text-3xl italic">— {magazine.editorName}</p>
          </article>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="relative tape"><PhotoBox label="/photos/editor-1.jpg" /></div>
            <div className="relative tape rotate-2"><PhotoBox label="/photos/editor-2.jpg" /></div>
          </div>
        </div>
      </Spread>

      <Spread id="archive" kicker="Page 03" title="The Photo Archive">
        <p className="mb-8 max-w-2xl text-lg text-black/70">This section is built for lots of photos. Replace the files in <b>public/photos</b> using the exact names shown inside each box.</p>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {photoDiary.map((photo, index) => (
            <figure key={photo.label} className={`mb-5 break-inside-avoid ${index % 5 === 0 ? "rotate-1" : index % 3 === 0 ? "-rotate-1" : ""}`}>
              <PhotoBox label={photo.label} tall={index % 7 === 0} />
              <figcaption className="mt-2 bg-white/70 px-3 py-2 text-center font-serif italic shadow-paper">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Spread>

      <Spread id="timeline" kicker="Page 04" title="Memory Lane">
        <div className="grid gap-6 md:grid-cols-2">
          {memoryEras.map((item, index) => (
            <article key={item.era} className={`relative rounded-sm bg-white/80 p-5 shadow-editorial ${index % 2 ? "md:mt-16" : ""}`}>
              <PhotoBox label={item.photo} />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.3em] text-pink-600">{item.date}</p>
              <h3 className="mt-2 font-serif text-4xl italic">{item.era}</h3>
              <h4 className="mt-2 text-xl font-black uppercase">{item.title}</h4>
              <p className="mt-3 leading-7 text-black/70">{item.text}</p>
            </article>
          ))}
        </div>
      </Spread>

      <Spread id="love" kicker="Page 05" title="20 Things We Love About Harini">
        <div className="grid gap-3 md:grid-cols-2">
          {loveList.map((thing, index) => (
            <div key={thing} className="flex gap-4 border-b border-black/15 bg-white/45 p-4">
              <span className="font-serif text-5xl italic text-purple-400">{String(index + 1).padStart(2, "0")}</span>
              <p className="pt-2 text-lg font-semibold">{thing}</p>
            </div>
          ))}
        </div>
      </Spread>

      <Spread id="awards" kicker="Page 06" title="The Harini Awards">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {awards.map(([title, winner]) => (
            <div key={title} className="sticker rounded-sm bg-white p-6 transition hover:-translate-y-2">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-pink-600">{title}</p>
              <h3 className="mt-4 font-serif text-4xl italic">{winner}</h3>
            </div>
          ))}
        </div>
      </Spread>

      <Spread id="interview" kicker="Page 07" title="Exclusive Interview">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <PhotoBox label="/photos/interview.jpg" tall />
          <div className="space-y-5">
            {interviews.map(([q, a]) => (
              <div key={q} className="border-l-4 border-pink-300 bg-white/70 p-5 shadow-paper">
                <p className="font-serif text-3xl italic">Q: {q}</p>
                <p className="mt-3 text-lg leading-8">A: {a}</p>
              </div>
            ))}
          </div>
        </div>
      </Spread>

      <Spread id="messages" kicker="Page 08" title="Birthday Messages">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {messages.map((message, index) => (
            <article key={message.name} className={`rounded-sm bg-[#fffdf8] p-5 shadow-paper ${index % 4 === 0 ? "rotate-1" : index % 4 === 1 ? "-rotate-1" : ""}`}>
              <PhotoBox label={message.photo} />
              <h3 className="mt-4 font-serif text-3xl italic">{message.name}</h3>
              <p className="mt-2 leading-7 text-black/70">{message.text}</p>
            </article>
          ))}
        </div>
      </Spread>

      <section id="back-cover" className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-4 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-pink-600">Back Cover</p>
          <h2 className="mt-4 font-serif text-7xl italic leading-none sm:text-8xl">Happy 20th, Harini.</h2>
          <p className="mt-6 max-w-xl text-xl leading-9 text-black/70">Replace this with the final big message. Make it emotional enough to matter, funny enough to feel like you, and dramatic enough for a magazine ending.</p>
          <a href="#cover" className="mt-8 inline-block rounded-full bg-black px-7 py-4 text-xs font-black uppercase tracking-[0.3em] text-white transition hover:bg-pink-500">Back to Cover</a>
        </div>
        <div className="relative">
          <PhotoBox label="/photos/back-cover.jpg" tall />
          <div className="absolute -right-2 top-10 rotate-6 bg-purple-200 px-4 py-2 font-serif text-2xl italic shadow-paper">see you in your 20s</div>
        </div>
      </section>
    </main>
  );
}
