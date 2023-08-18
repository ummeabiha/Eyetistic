import React, {useState} from 'react';
import {FaPlusCircle, FaTimes} from 'react-icons/fa';

export default function Faq(){
    return<div className="faq">
        <div id="FAQS">
            <h3>FAQ</h3>
            <h1>Frequently asked questions</h1>
        </div>

        <div id="faq-ques">
            <p>Find quick answers to common queries in our FAQ section or contact our customer support for assistance.</p>
            <ul>
                <li>Can I contribute to the eye blog on Eyetistic?
                    <Btn id={1}/>
                </li>

                <li> What is your return/exchange policy?
                    <Btn id={2}/>
                </li>

                <li>How can I contact your customer support?
                    <Btn id={3}/>
                </li>

                <li> Can online eye tests provide accurate results comparable to in-person eye exams?
                    <Btn id={4}/>
                </li>

                <li> What should I do if I encounter technical issues while using your eye web platform?
                    <Btn id={5}/>
                </li>
            </ul>
        </div>
    </div>
}


const Btn = ({ id }) => {
    const [clicked, setClicked] = useState(false);
    const [display, setDisplay] = useState('none');
  
    const handleClick = () => {
      setClicked(!clicked);
      setDisplay(display === 'none' ? 'block' : 'none');
    };
  
    return (
      <span>
        <span id="btn" onClick={handleClick}>
          {clicked ? <FaTimes size={16} /> : <FaPlusCircle size={16} />}
        </span>
  
        {id === 1 && (
          <div style={{ display }}>
            We appreciate your interest! Please contact us through our website's contact form or email us to discuss
            potential contributions to our eye blog. We welcome relevant and informative content from experts and
            enthusiasts in the field.
          </div>
        )}
        {id === 2 && (
          <div style={{ display }}>
            Our return/exchange policy allows returns within 30 days of delivery, with the item in its original condition.
            Contact our customer support for assistance and initiating the process.
          </div>
        )}
        {id === 3 && (
          <div style={{ display }}>
            Contact our customer support via phone, email, live chat, or the contact form on our website for prompt and
            helpful assistance with your inquiries and concerns. We prioritize providing excellent support for a smooth
            customer experience.
          </div>
        )}
        {id === 4 && (
          <div style={{ display }}>
            Online eye tests can provide a basic assessment but should not replace comprehensive in-person exams for
            accurate results and detection of eye conditions.
          </div>
        )}
        {id === 5 && (
          <div style={{ display }}>
            If you encounter technical issues on our eye web platform, try refreshing, checking your connection, or
            contacting our technical support for prompt assistance in resolving the problem.
          </div>
        )}
      </span>
    );
};