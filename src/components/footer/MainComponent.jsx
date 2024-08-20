import React from 'react';
import Newsletter from './Newsletter';
import Footer from './Footer';

const MainComponent = () => {
  return (
    <main className="flex flex-col">
      <Newsletter />
      <Footer />
    </main>
  );
};

export default MainComponent;