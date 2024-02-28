import React, { useState } from 'react';
import { google } from 'googleapis';
import emailjs from 'emailjs-com';

const ScheduleCall = () => {
  const [events, setEvents] = useState([]);
// let google
  // Function to fetch events from Google Calendar
  const fetchEventsFromCalendar = async () => {
    try {
      // Authenticate with Google API
      console.log( `hello iam google`)
      const auth = new google.auth.OAuth2({
        clientId: import.meta.env.VITE_APP_clientId,
        clientSecret:import.meta.env.VITE_APP_clientSecret,
        // redirectUri: '/contact',
      });

    // //   Set auth credentials
    //   auth.setCredentials({
    //     access_token: 'ACCESS_TOKEN', // Access token obtained after authentication
    //     refresh_token: 'REFRESH_TOKEN', // Refresh token obtained after authentication
    //   });

      // Create a calendar instance
      const calendar = google.calendar({ version: 'v3', auth });

      // Fetch events
      const response = await calendar.events.list({
        calendarId: 'primary', 
        timeMin: new Date().toISOString(), // events from now
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
      });

      // Set fetched events
      setEvents(response.data.items);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Function to send email to the user
  const sendEmail = () => {
    // Use EmailJS to send email
    // Prepare email template params
    const templateParams = {
      from_name: 'Your Name',
      to_name: 'User Email', // User's email address
      subject: 'Scheduled Events',
      message: JSON.stringify(events), // Attach events to the email
    };

    // Send the email
    // emailjs.send('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', templateParams, 'YOUR_EMAILJS_USER_ID')
  emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div>
      <button onClick={fetchEventsFromCalendar}  className="text-lg lg:text-2xl sm:text-[20px] text-center text-gray-900 underline w-auto font-montserrat font-semibold">Schedule Call</button>
     
      {/* <button onClick={sendEmail}>Send Email</button> */}
      {/* Display fetched events */}
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleCall;




// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ScheduleCall = () => {
//     const [email, setEmail] = useState('');

//     const handleScheduleClick = () => {
//         // Open Google Calendar event creation URL
//         window.open('https://calendar.google.com/calendar/render?action=TEMPLATE&text=Schedule%20a%20Call', '_blank');
//     };

//     const handleEmailSubmit = (e) => {
//         e.preventDefault();

//         emailjs.send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, { to_email: email }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY)
//             .then((response) => {
//                 console.log('Email sent:', response);
//                 // You can show a success message to the user
//             })
//             .catch((error) => {
//                 console.error('Email error:', error);
//                 // You can show an error message to the user
//             });
//     };

//     return (
//         <div>
//             <div>
//                 <p>PREFER TO TALK?</p>
//                 <button onClick={handleScheduleClick}>Schedule a call</button>
//             </div>
//             <div>
//                 <form onSubmit={handleEmailSubmit}>
//                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ScheduleCall;
