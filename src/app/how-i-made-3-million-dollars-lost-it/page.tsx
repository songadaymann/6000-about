'use client';
import Script from 'next/script';
import { useState } from 'react';

export default function ArticlePage() {
  const [openStory, setOpenStory] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 sm:p-12 md:p-24 bg-gray-50 text-gray-800">
      <div className="w-full max-w-3xl">
        <button
          className="w-full text-2xl sm:text-3xl font-bold py-6 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-gray-100 transition mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-expanded={openStory}
          aria-controls="story-accordion-content"
          onClick={() => setOpenStory((prev) => !prev)}
        >
          {openStory ? 'Hide Story' : 'THE STORY'}
        </button>
        <div
          id="story-accordion-content"
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openStory ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
          aria-hidden={!openStory}
        >
          <article className="prose prose-lg lg:prose-xl max-w-3xl bg-white p-8 sm:p-10 md:p-12 rounded-lg shadow-md">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
              How I Made 3 Million Dollars & Lost it.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Hi I&apos;m Jonathan Mann. I&apos;m best known for writing a song a day for now over 6000 days. I hold the <a href="https://www.guinnessworldrecords.com/world-records/360609-most-consecutive-days-writing-a-song" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Guinness World Record</a>.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              On Jan 1 2022 I sold 3,700 Song A Day NFTs for $800 each. These songs represented my life&apos;s work up to that point.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              The price of ETH that day was $3,754. My wife and I had never had this kind of money before. It felt like we were dreaming. Everything was hazy.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              We were also paralyzed with doubt: We knew we should set aside a bunch for taxes, but we wanted to wait: The price of ETH had been above $4000 mere days before and we told ourselves we&apos;d liquidate the ETH for taxes as soon as that happened.
            </p>
            <p className="text-2xl sm:text-3xl font-semibold my-6 text-center text-red-600">
              THIS WAS OUR FIRST BIG MISTAKE.
            </p>
            <hr className="my-8 border-gray-300" />
            <div style={{ fontFamily: "'Comic Neue', cursive" }}>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                We need to take quick detour to talk about the difference between capital gains tax and income tax. If you BUY ETH, and it goes up, you owe tax on the difference between the price you bought it and the price when you sell it. That&apos;s called &quot;capital gains tax&quot;.
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                If you buy ETH and it goes down, the loss you incur upon selling it can be used to OFFSET the gains. TL;DR If you earn a lot through speculation, you can offset your taxes by also losing a lot. 
              </p>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                Conversely, if you <b>earn ETH</b>, as I did, it&apos;s taxed solely at <b>the price it was when you received it</b>. It&apos;s taxed as regular income at that price. It doesn&apos;t matter if it goes up or down, or <b>WHEN</b> you sell it. If it was worth $3754 on the day you earned it, you owe taxes on that amount, period. (You can use up to $3k of capital loss against your income earnings, but that&apos;s all.)
              </p>
            </div>
            <hr className="my-8 border-gray-300" />
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              I had the distinct bad luck of having sold my life&apos;s work at the exact moment the crypto market had entered its precipitous decline of 2022. A week after my NFT sale, ETH went below $3000 for the first time in five months. Our fear turned to panic.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Meanwhile, 2021 had been a wild year. I had released several other successful NFT projects, and made a stupid amount of money in airdrops. We had already paid $600k in taxes for 2021 by this point, and we still owed another $400k. Clinging desperately to the 700 ETH I had earned, we made our second big mistake: 
            </p>
            <p className="text-2xl sm:text-3xl font-semibold my-6 text-center text-red-600">
              WE TOOK OUT AN AAVE LOAN
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto my-6">
              <img src="/50.png" alt="50" className="max-w-[180px] w-full h-auto rounded shadow mx-auto" />
              <img src="/69.png" alt="69" className="max-w-[180px] w-full h-auto rounded shadow mx-auto" />
              <img src="/99.png" alt="99" className="max-w-[180px] w-full h-auto rounded shadow mx-auto" />
              <img src="/300.png" alt="300" className="max-w-[180px] w-full h-auto rounded shadow mx-auto" />
            </div>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              <span className="relative group">
                Massively over-collateralized
                <span className="text-blue-600 cursor-pointer">*</span>
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 p-3 rounded bg-white text-gray-800 text-sm shadow-lg border border-gray-200 z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                  Over-collateralized just means you put in collateral that is worth more than whatever you&apos;re taking out.
                </span>
              </span>, we thought we could weather the storm. We put in 518 ETH, worth roughly 1.5 million at the time, to take out "just" the $400k we owed. A week later, Terra Luna, the "algorithmic stable coin", imploded. The market crashed. Our ETH was worth less by the minute. We were at dire risk of being liquidated. I paid off the loan at the last minute and our 450 ETH had turned into just 163, worth around $200k.
            </p>
            <img src="/163.png" alt="163" className="max-w-md w-full h-auto rounded shadow mx-auto my-6" />
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              We filed as many extensions as we could as my accountant and I combed through my crypto taxes line-by-line on a spreadsheet. It was literally a years long process. When all was said and done, we arrived at a number that we owed for 2022:
            </p>
            <p className="text-2xl sm:text-3xl font-semibold my-6 text-center text-red-600">
              1,095,171.79.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              We hired a tax attorney, looking at every option and delaying as much as possible. Eventually, we reached the end of the road. The IRS was threatening to take everything we had: Our house, my wife&apos;s retirement accounts, all the crypto, my NFTs, everything.
            </p>
            <hr className="my-8 border-gray-300" />
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Throughout all of this, there was one option that I had been dreading:
            </p>
            <p className="text-2xl sm:text-3xl font-semibold my-6 text-center text-red-600">
              SELLING MY AUTOGLYPH
            </p>
            <img 
              src="/glyph215.png" 
              alt="Autoglyph example" 
              className="my-8 rounded-lg shadow-lg mx-auto"
            />
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Autoglyphs are in many ways the most important NFT artwork that exist. Most NFTs are created by storing a hash of the artwork onchain, with a link to an external image hosted somewhere. Autoglyphs were (basically) the first generative artwork to be fully onchain. This means they have no external links. As long as Ethereum exists, the artwork will exist. They are beautiful, simple, historic and made by two dudes who were at the time, just my buds.
            </p>

            <div className="my-8 flex justify-center">
              <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Our own <a href="https://twitter.com/songadaymann?ref_src=twsrc%5Etfw">@songadaymann</a> performing the CryptoPunks song for <a href="https://twitter.com/matthall2000?ref_src=twsrc%5Etfw">@matthall2000</a> and <a href="https://twitter.com/pents90?ref_src=twsrc%5Etfw">@pents90</a>! It comes from the live stream so the audio is wonky and it cuts to a strange angle in the middle, but I was able to supplement with <a href="https://twitter.com/tommyrva?ref_src=twsrc%5Etfw">@tommyrva</a>&apos;s phone footage! <a href="https://t.co/z2Drss3QNY">pic.twitter.com/z2Drss3QNY</a></p>&mdash; Digitally Rare (@digitallyrare) <a href="https://twitter.com/digitallyrare/status/964931824010088448?ref_src=twsrc%5Etfw">February 17, 2018</a></blockquote>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Autoglyphs were released by Matt Hall and John Watkinson in 2019. It was their second NFT project after Cryptopunks. Neither Cryptopunks nor Autoglyphs were particularly noticed by anyone other than the hardest of hardcore NFT nerds at the time. When I minted my Autoglyph, I wasn&apos;t thinking about money at all. I was a huge fan of Matt and John as artists, and found the whole idea of &quot;onchain art&quot; to be just, like, the coolest thing ever.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              I minted mine on the day before my birthday, April 8th 2019, for $36.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              The day after I minted it, I turned the symbols into music, inspiring John to create an &quot;<a href="https://x.com/pents90/status/1118150933492502534" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">autoglyph to midi</a>&quot; conversion tool. The autoglyph was more than just a piece of art to me; it was a relic of a heady time, when hardly anyone knew what an NFT was, and a ragtag bunch of us were just experimenting for the fun of it.
            </p>

            <div className="my-8 flex justify-center">
              <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Turned the AutoGlyph I own into music! <br /><br />Each ASCII mark became a note:<br /><br />| is F#<br /># is D#<br />- is C#<br />+ is A#<br /><br />I chose the notes based on what I knew would sound good, then made a backing track. <br /><br />Here&apos;s the finished song:<a href="https://t.co/vELQSe26Vm">https://t.co/vELQSe26Vm</a> <a href="https://t.co/8q3bew7CJj">pic.twitter.com/8q3bew7CJj</a></p>&mdash; Digitally Rare (@digitallyrare) <a href="https://twitter.com/digitallyrare/status/1115377973341884416?ref_src=twsrc%5Etfw">April 8, 2019</a></blockquote>
            </div>
            <hr className="my-8 border-gray-300" />
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              By 2024, autoglyphs were worth A LOT more. I happened to have minted a relatively rare one, so it had always been in the tax conversation with my wife: What if we could pay off our taxes by selling? Once it was clear that we were out of options, I reluctantly agreed.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              After some negotiation, during which I turned down what would in any other context be insanely stupid amounts of money, my broker told me the buyer was willing to pay the exact amount that would cover our taxes: $1,100,000.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              And because we had so much capital loss from the near-liquidation of the AAVE loan, that loss could be directly applied the $36 {'->'} $1,100,000 capital gain we incurred upon selling it. Meaning:
            </p>
            <p className="text-2xl sm:text-3xl font-bold mt-8 mb-12 text-center text-green-600">
              We were finally free of our Crypto Tax Nightmare
            </p>
          </article>
          <Script src="https://platform.twitter.com/widgets.js" strategy="afterInteractive" />
        </div>

        <button
          className="w-full text-2xl sm:text-3xl font-bold py-6 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-gray-100 transition mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-expanded={openToken}
          aria-controls="token-accordion-content"
          onClick={() => setOpenToken((prev) => !prev)}
        >
          {openToken ? 'Hide Token' : 'THE TOKEN'}
        </button>
        <div
          id="token-accordion-content"
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openToken ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
          aria-hidden={!openToken}
        >
          <div className="prose prose-lg lg:prose-xl max-w-3xl bg-white p-8 sm:p-10 md:p-12 rounded-lg shadow-md">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
              THE TICKER IS <span className="text-green-600">$TAXES</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              They say only two things in life are inevitable, so I am turning my Crypto Tax Nightmare into a meme coin.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              <b>
                The supply is&nbsp;
                <span className="text-blue-600 relative group cursor-pointer">
                  1,095,171.79
                  <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 p-3 rounded bg-white text-gray-800 text-sm shadow-lg border border-gray-200 z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                    The exact amount I owed the IRS.
                  </span>
                </span>
              </b>
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              To participate, just send eth (mainnet, base, arb, op ONLY) to:
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              The presale is open for one week from <b>Monday June 2nd 2025 - Monday June 9th 2025</b>. My 6000th song happens on June 6th!
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              At the end of the presale, you&apos;ll be airdropped your portion of the token supply. The entire supply is going to presale participants, with the exception of <b>10% I&apos;m reserving for the liquidity pool</b>.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              There are <b>no fees or taxes</b> on trades of this coin. Only 1,095,171 will ever exist. I will put 10% of any ETH I receive into the liquidity pool, and lock it.
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold my-6 text-center text-green-600">BONUS:</h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              There are several things you can do to boost your allocation of the token, with each one earning you a&nbsp; 
              <span className="text-blue-600 relative group cursor-pointer font-bold">
                2% boost
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 p-3 rounded bg-white text-gray-800 text-sm shadow-lg border border-gray-200 z-10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                  So if you send .1ETH, it&apos;ll be like you sent .12ETH.
                </span>
              </span>
            </p>
            <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-600 mb-6">
              <li>Complete the video game and sign the message at the end</li>
              <li>Own a mainnet 1/1 song a day song</li>
              <li>Own 10 or more mainnet 1/1 song a day songs</li>
            </ul>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              If you qualify with each of these things, your total boost will be <b>2+2+2=6%</b>!<br />
              Be sure to send the ETH from the same wallet you use to sign the message at the end of the game / that holds any song a days.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <button
          className="w-full text-2xl sm:text-3xl font-bold py-6 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-gray-100 transition mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-expanded={openFAQ}
          aria-controls="faq-accordion-content"
          onClick={() => setOpenFAQ((prev) => !prev)}
        >
          {openFAQ ? 'Hide FAQ' : 'FAQ'}
        </button>
        <div
          id="faq-accordion-content"
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openFAQ ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
          aria-hidden={!openFAQ}
        >
          <div className="prose prose-lg lg:prose-xl max-w-3xl bg-white p-8 sm:p-10 md:p-12 rounded-lg shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">FAQ</h2>
            
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">What is this?</h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                The act of making a huge amount of money and losing it all to taxes is a near-universal experience in crypto. I want to use the occasion of my 6000th Song A Day to celebrate/commiserate-about/revel-in the absurdity of that.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Where do I send ETH?</h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                Send ONLY mainnet, arbitrum, optimism or BASE ETH to:<br />
                <span className="font-mono bg-gray-100 p-1 rounded">[address goes here]</span>
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">What is the token address?</h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                This will be revealed once the presale is done and all the tokens have been airdropped to presale participants.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">What is the ticker?</h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                The ticker is <span className="text-green-600 font-bold">$taxes</span>.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Is there utility?</h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                No.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Is there a roadmap?</h3>
              <p className="text-lg sm:text-xl text-gray-600 mb-6">
                No, though I&apos;ll continue to write a song a day and was thinking it&apos;d be fun to try to make <span className="text-green-600 font-bold">$taxes</span> pump at tax time each year.
              </p>
            </div>
          </div>
        </div>

        {/* ABOUT Accordion */}
        <button
          className="w-full text-2xl sm:text-3xl font-bold py-6 px-4 rounded-lg shadow-md bg-white text-gray-900 hover:bg-gray-100 transition mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-expanded={openAbout}
          aria-controls="about-accordion-content"
          onClick={() => setOpenAbout((prev) => !prev)}
        >
          {openAbout ? 'Hide About' : 'ABOUT'}
        </button>
        <div
          id="about-accordion-content"
          className={`transition-all duration-300 ease-in-out overflow-hidden ${openAbout ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
          aria-hidden={!openAbout}
        >
          <div className="prose prose-lg lg:prose-xl max-w-3xl bg-white p-8 sm:p-10 md:p-12 rounded-lg shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-900">WHO ARE YOU?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              Hi, I&apos;m Jonathan Mann.
            </p>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">Here&apos;s my lore:</h3>
            <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-600 mb-6 space-y-2">
              <li>I&apos;ve been writing a song a day since 1/1/09.</li>
              <li>I have the <a href="https://www.guinnessworldrecords.com/world-records/360609-most-consecutive-days-writing-a-song" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Guinness World Record</a>.</li>
              <li>I&apos;ve been <a href="https://songaday.world/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">minting songs daily</a> as NFTs since 1/1/22.</li>
              <li>I <a href="https://songaday.world/sec" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sued the SEC</a>.</li>
              <li>I wrote a <a href="https://x.com/songadaymann/status/909437173824442368" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">song about Cryptopunks</a> in 2017 (and <a href="https://etherscan.io/tx/0x0f1deab0f4c0f3edb05c95a68334fc65989416d89e6c1bb334fa9a6655108b30" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">bought one</a> for $87).</li>
              <li>I am building the worlds first truly <a href="https://hughmann.agency/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">autonomous songwriting ai</a>.</li>
              <li>I&apos;ve been <a href="https://www.youtube.com/watch?v=4m-JvGyxo0A&t=1s" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">on</a> <a href="https://www.youtube.com/watch?v=B8SBSmIwDx8" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">tv</a> <a href="https://www.youtube.com/watch?v=aW3e2vZT6Ys" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:underline">a</a> <a href="https://www.youtube.com/watch?v=hO1w2YVbHgU" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">few</a> <a href="https://www.youtube.com/watch?v=kWMJy3SCJXk" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">times</a>.</li>
              <li><a href="https://newsfeed.time.com/2010/07/20/qa-jonathan-mann-creator-of-the-iphone-antenna-song/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Steve Jobs used my song</a> to open an Apple Press conference.</li>
              <li>I <a href="https://www.youtube.com/watch?v=fA8u2tqwRLg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sang to Shigeru Miyamoto</a>.</li>
              <li>I was the first person on the west coast <a href="https://www.youtube.com/watch?v=KUd1HitECqQ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">to get a Wii</a>.</li>
              <li>I made a <a href="https://www.youtube.com/watch?v=oozLnk1BZ5g" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">rock opera based on Super Mario</a>.</li>
              <li>I have three kids.</li>
              <li>I&apos;m a foster dad.</li>
              <li>I prefer waffles to pancakes.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
} 