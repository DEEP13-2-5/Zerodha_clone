import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import  RightSection from './RightSection';
import Universal from './Universal';

function ProductsPage() {
    return ( 
    <>
      <Hero />
      <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="media/trukish.svg"
        learnMore="media/leanpub.svg"
        googlePlay="media/googleplay.svg"
        appStore="media/app-store.svg"
      />
      <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="media/leanpub.svg"
      />
      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="media/trukish.svg"
        learnMore="media/leanpub.svg"
        googlePlay="media/googleplay.svg"
        appStore="media/app-store.svg"
      />
      <RightSection
        imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="media/leanpub.svg"
      />
      <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="media/trukish.svg"
        learnMore="media/leanpub.svg"
        googlePlay="media/googleplay.svg"
        appStore="media/app-store.svg"
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universal />
    </>
  );
}

export default ProductsPage;