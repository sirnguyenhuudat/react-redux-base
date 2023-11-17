import React from 'react';

function DefaultLayout({ children }) {
  return (
    <div className="app-blank">
      {children}
      DEFAULT LAYOUT
    </div>
  );
}

export default DefaultLayout;
