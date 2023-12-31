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
    <div className="flex flex-col items-center h-screen text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      <div className="mb-4">{displayedText}</div>
      <Link to="/try-now">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Try Now
        </button>
      </Link>
    </div>
  );
};

const EntryPage = () => {
  return (
    <div className="min-h-screen">
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
