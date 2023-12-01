import React, { useState } from 'react';
import './Website.css';

const Website = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to MetaMask');
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask not detected. Please install MetaMask.');
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMergeClick = () => {
    // Add your logic for the "Merge" button click
    console.log('Merge button clicked');
  };

  const handleCreateArtClick = () => {
    // Add your logic for the "Create Art" button click
    console.log('Create Art button clicked');
  };

  return (
    <div className="website">
      <div className="all-copyrights-reserved">
        All Copyrights reserved @Poet.txt 2023
      </div>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <div className="frame-container">
              <div className="home-wrapper" onClick={() => {}}>
                <div className="home">Home</div>
              </div>
              <div className="home-wrapper" onClick={() => scrollToAbout()}>
                <div className="home">About</div>
              </div>
              <a
                href="https://opensea.io/collection/ai-autistic-intelligence"
                className="home-wrapper"
                target="_blank"
                rel=""
              >
                <div className="home">My Poems</div>
              </a>
            </div>
          </div>
          <div className="connect-wallet-wrapper" onClick={connectWallet}>
            <div className="connect-wallet">Connect Wallet</div>
          </div>
        </div>
        <div id="about-section" className="about-parent">
          <div className="merge" onClick={handleMergeClick}>
            Merge
          </div>
          <div className="autistic-intelligence-is">
            Autistic Intelligence is an experimental art project combining the
            power of AI and ML to generate beautiful landscape artworks from 1/1
            one-liners as input.
          </div>
        </div>
        <div className="frame-div">
          <div className="merge-parent">
            <div className="merge" onClick={handleMergeClick}>
              Merge
            </div>
            <div className="frame-parent1">
              <div className="lorem-ipsum-lorem-ipsumlorem-i-wrapper">
                <input
                  type="text"
                  className="home-input"
                  placeholder="Type anything..."
                  value={inputValue}
                  onChange={handleInputChange}
                  style={{ background: 'black', color: 'black' }}
                />
              </div>
              <div className="merge-wrapper" onClick={handleMergeClick}>
                <div className="merge1">Merge</div>
              </div>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="rectangle-parent" onClick={handleCreateArtClick}>
              <div className="frame-child" />
              <div className="create-art-wrapper">
                <div className="create-art">Create Art</div>
              </div>
            </div>
            <div className="rectangle-parent" onClick={handleCreateArtClick}>
              <div className="frame-child" />
              <div className="create-art-wrapper">
                <div className="create-art">Create Art</div>
              </div>
            </div>
          </div>
          <div className="frame-parent2">
            <div className="rectangle-parent" onClick={handleCreateArtClick}>
              <div className="frame-child" />
              <div className="create-art-wrapper">
                <div className="create-art">Create Art</div>
              </div>
            </div>
            <div className="rectangle-parent" onClick={handleCreateArtClick}>
              <div className="frame-child" />
              <div className="create-art-wrapper">
                <div className="create-art">Create Art</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;
