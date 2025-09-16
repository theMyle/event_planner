import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

function EventPlanner() {
    return (
        <div className="event-planner-container">
            {/* header */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

            <section className='description'></section>
            <section className='event_categories'></section>
            <section className='features'></section>
            <section className='testimonials'></section>
            <section className='contact'></section>
        </div>
    );
};

export default EventPlanner;
