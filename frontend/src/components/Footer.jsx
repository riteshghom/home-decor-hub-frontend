import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center text-white">
      © {new Date().getFullYear()} Home Decor Hub. All rights reserved.
    </footer>
  );
}

export default Footer;
