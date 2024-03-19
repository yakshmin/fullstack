import React, { useState } from 'react';
import '../../assets/css/Service.css'; // Import CSS for card page styles
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import Navbar from './Navbar';

const Service = () => {
  // Define data for all the cards
  const allCardsData = [
    { 
      id: 1, 
      title: "Home Health Care", 
      content: [
        "Doctor Home Visit",
        "• Customized visits for needs",
        "• Consultation and treatment",
        "• T&C Apply"
      ],
      content1: [

      ],
      buttonLabel: "Book Service" 
    },
    { 
      id: 2, 
      title: "Physio Home Visit", 
      content: [
        "Physio Home Visit",
        "• Physio treatment at home",
        "• Specialized & expert staff",
        "• T&C Apply"
      ],
      buttonLabel: "Book Service" 
    },
    { 
      id: 3, 
      title: "Attendant", 
      content: [
        "Attendant",
        "• Experienced professional",
        "• Trusted by seniors",
        "• T&C Apply"
      ],
      buttonLabel: "Book Service" 
    },
    { 
      id: 4, 
      title: "Nurse", 
      content: [
        "Nurse",
        "• Trained eldercare professional",
        "• Quality, critical care at home",
        "• T&C Apply"
      ],
      buttonLabel: "Book Service" 
    },
    { 
      id: 5, 
      title: "Nursse", 
      content: [
        "Nurse",
        "• Trained eldercare professional",
        "• Quality, critical care at home",
        "• T&C Apply"
      ],
      buttonLabel: "Book Service" 
    },
    { 
      id: 6, 
      title: "Nurseee", 
      content: [
        "Nurse",
        "• Trained eldercare professional",
        "• Quality, critical care at home",
        "• T&C Apply"
      ],
      buttonLabel: "Book Service" 
    },
    // Add more card data as needed
  ];

  // Define state variables
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // State variable to track the selected card

  // Function to handle clicking the "Next" button
  const handleNextClick = () => {
    if (startIndex + 5 < allCardsData.length) {
      setStartIndex(startIndex + 5);
    }
  };

  // Function to handle clicking the "Previous" button
  const handlePrevClick = () => {
    if (startIndex - 5 >= 0) {
      setStartIndex(startIndex - 5);
    }
  };

  // Function to handle clicking a card
  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div>
<Navbar/>
    <div className="service-image"></div>
    
      <div className="howwehelp">How we help</div>
    <div className="card-page">
      <div className="scroll-container">
        <div className="card-container">
          {allCardsData.slice(startIndex, startIndex + 5).map((card, index) => (
            <div key={card.id} className={`card ${selectedCard === (startIndex + index) ? 'selected' : ''}`} onClick={() => handleCardClick(startIndex + index)}>
              <div className="card-content">
                <h3>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-buttons">
          <button onClick={handlePrevClick} disabled={startIndex === 0}><FaArrowLeft /></button>
          <button onClick={handleNextClick} disabled={startIndex + 5 >= allCardsData.length}><FaArrowRight /></button>
        </div>
        {selectedCard !== null && (
          <div className="selected-card-details">
            <h2 className="selected-card-title"style={{ marginRight: '30px', textAlign: 'left' }}>{allCardsData[selectedCard].title}</h2>
            <br></br>
            <p className="selected-card-description"style={{ marginRight: 0, textAlign: 'left' }}>{allCardsData[selectedCard].content}</p>
          </div>
        )}
      {selectedCard !== null && (
        <div className="book-service-button" >
          <button>{allCardsData[selectedCard].buttonLabel}</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Service;
