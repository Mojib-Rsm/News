import React from 'react';
import { BREAKING_NEWS } from '../constants';

const BreakingNewsTicker: React.FC = () => {
  return (
    <div className="bg-primary text-white flex items-center h-10 overflow-hidden">
      <div className="bg-red-800 px-4 h-full flex items-center font-bold z-10 shrink-0 shadow-lg">
        ব্রেকিং নিউজ
      </div>
      <div className="ticker-wrap flex-1 flex items-center bg-primary">
        <div className="ticker pl-4 text-sm font-medium">
          {BREAKING_NEWS.map((item, index) => (
            <span key={index} className="mx-8 relative">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 mb-0.5"></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsTicker;