import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

export default props => {
  return (
    <div>
      <Header />
      <main className="Content">{props.children}</main>
      <Footer />
    </div>
  );
};
