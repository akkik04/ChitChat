import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';

const ScrollingText = () => {
  const textToScroll = 'Summarize your meeting notes with this LLM tool!';
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setDisplayedText(textToScroll.substring(0, index));
      index = (index + 1) % (textToScroll.length + 1);

      if (index === 0) {
        clearInterval(intervalId);
        setTimeout(() => {
          const newIntervalId = setInterval(() => {
            setDisplayedText(textToScroll.substring(0, index));
            index = (index + 1) % (textToScroll.length + 1);

            if (index === 0) {
              clearInterval(newIntervalId);
            }
          }, 70);
        }, 9000);
      }
    }, 70);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [textToScroll]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bg-gray-100">
      <div className="mb-8">{displayedText}</div>
      <Link to="/try-now">
        <button className="mt-4 bg-gray-300 hover:bg-gray-100 text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg">
          Test it out!
        </button>
      </Link>
    </div>
  );
};

const EntryPage = () => {
  return (
    <div className="relative">
      <div className="mt-16">
        <Routes>
          <Route path="/" element={<ScrollingText />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default EntryPage;
