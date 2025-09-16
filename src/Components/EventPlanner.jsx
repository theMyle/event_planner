import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

function EventPlanner() {
    return (
        <div className="event-planner-container">
            {/* header */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className='description'>
                <p>Plan and organize your events offortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.
                </p>
                <button className='get-started-button'>Get Started</button>
            </section>

            <section className='events_categories'>
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday</li>
                    <li>Anniversary</li>
                    <li>Wedding</li>
                    <li>Baby</li>
                    <li>Graduation</li>
                    <li>Family</li>
                </ul>

                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music</li>
                    <li>Film</li>
                    <li>Comedy</li>
                    <li>Art</li>
                    <li>Cultural</li>
                </ul>

                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising</li>
                    <li>Charity</li>
                    <li>Volunteer</li>
                    <li>Neighorhood</li>
                    <li>Community</li>
                    <li>Cultural</li>
                </ul>
            </section>

            <section className='features'></section>
            <section className='testimonials'></section>
            <section className='contact'></section>
        </div>
    );
};

export default EventPlanner;
