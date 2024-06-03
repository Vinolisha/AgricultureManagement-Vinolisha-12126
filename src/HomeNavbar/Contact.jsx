import React from "react";
import "../Style/contact.css";
import { FaMessage } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";


function Contact() {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <br/><FaMessage /></h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, question, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community
        </p>
        <ul>
          <li><IoIosContacts />Contact@infor@Agriculture</li>
          <li><FaPhoneVolume />+1 1234-4567-23</li>
          <li><FaAddressBook />3/35 Attoor Puthu vittu vilai, Nagercoil, Pin Code: 629177, TamilNadu State
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
