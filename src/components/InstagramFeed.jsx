import React, { useEffect } from 'react';
import '../style/instagramFeed.css';

const InstagramFeed = () => {
  const posts = [
    { id: 1, type: 'video', videoSrc: '/images/video/v1.mp4', link: 'https://instagram.com/offxsagr' },
    { id: 2, type: 'video', videoSrc: '/images/video/v2.mp4', link: 'https://instagram.com/offxsagr' },
    { id: 3, type: 'video', videoSrc: '/images/video/v3.mp4', link: 'https://instagram.com/offxsagr' },
    { id: 4, type: 'video', videoSrc: '/images/video/v4.mp4', link: 'https://instagram.com/offxsagr' },
  ];

  useEffect(() => {
    // Add a delay before autoplay starts
    const autoplayDelay = setTimeout(() => {
      const videos = document.querySelectorAll('.instagram-video');
      videos.forEach((video) => {
        video.muted = true; // Ensure videos are muted for autoplay
        video.play(); // Play the video
      });
    }, 3000); // 3-second delay before autoplay starts

    // Clear the timeout when component unmounts
    return () => clearTimeout(autoplayDelay);
  }, []);

  return (
    <div className="instagram-feed">
      <h2>Our Instagram Favourites</h2>
      <div className="instagram-grid">
        {posts.map(post => (
          <a key={post.id} href={post.link} target="_blank" rel="noopener noreferrer" className="instagram-post">
            <div className="video-wrapper">
              <video
                src={post.videoSrc}
                className="instagram-video"
                loop
                muted
                playsInline
              />
              {/* <div className="play-overlay">
                <span className="play-button">▶</span>
              </div> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
