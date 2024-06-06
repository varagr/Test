import React, { useState, useEffect } from 'react';

const APIProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let timer;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => {
          timer = setTimeout(resolve, 2000);
        });
        
        setProgress(50);
        await new Promise((resolve) => {
          timer = setTimeout(resolve, 3000); 
        });

        // Update progress
        setProgress(100);
      } catch (error) {
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const cancelRequest = () => {
    clearTimeout(timer);
    setLoading(false);
    setError('API request cancelled.');
  };

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
        <progress value={progress} max="100"></progress>
        <button onClick={cancelRequest}>Cancel</button>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <p>Data loaded successfully!</p>
      <progress value="100" max="100"></progress>
    </div>
  );
};

export default APIProgressBar;