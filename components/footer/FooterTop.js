import React from 'react';
import Link from 'next/link';

const FooterTop = ({ rows }) => {
  return (
    <div className="bg-gh-primary pt-10">
      <div className="max-w-7xl mx-auto flex gap-6 pb-16 mt-8 text-sm px-4">
        <div className="w-1/3 text-gh-secondary">
          <h4 className="mt-6 font-bold">Altitude80</h4>
          <h5 className="mt-6 font-bold">Subscribe to our newsletter</h5>
          <p className="mb-4 font-light">
            Get product updates, company news, and more.
          </p>
          <button className="px-5 py-3 rounded-md border-2 border-slate-600 hover:border-slate-300 font-bold">
            Subscribe
          </button>
        </div>
        {rows?.map((row, index) => (
          <ul key={index} className="flex flex-col gap-4 w-2/12 mb-1">
            <li className="text-gh-secondary">{row.title}</li>
            {row?.links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <a className="text-gh-secondary hover:text-gh-link hover:underline">
                    {link.text}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
