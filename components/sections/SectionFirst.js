import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const SectionFirst = ({ data }) => {
  return (
    <div className="pt-24 pb-6 md:pb-12 px-6 flex flex-col items-center text-center">
      <h1
        className="text-4xl text-center font-extrabold"
        dangerouslySetInnerHTML={{ __html: data.title }}
      />
      <p className="text-gh-secondary text-xl mt-5">{data.description}</p>
      <div className="mt-6 md:mt-10 mb-6">
        <a href="#" className="get-started-button">
          Get started <IoIosArrowForward className="-mb-[3px]" />
        </a>
      </div>
    </div>
  );
};

export default SectionFirst;
