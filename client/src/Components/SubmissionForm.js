import React, { useState } from 'react'; // Importing useState for managing form state
import './SubmissionForm.css'; // Importing CSS for styling the form

function SubmissionForm() {
//State variables for form inputs
  const [name, setName] = useState('');
  const [dateOfIncident, setDateOfIncident] = useState('');
  const [location, setLocation] = useState('');
  const [causeOfDeath, setCauseOfDeath] = useState('');
  const [submittedBy, setSubmittedBy] = useState('');
  const [photo, setPhoto] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For now, just log the data to console
    console.log({
      name,
      dateOfIncident,
      location,
      causeOfDeath,
      submittedBy,
      photo
    });
    
    // Show confirmation
    alert('Thank you. Your submission is being reviewed to ensure it honors victims with dignity.');
    
    // Clear the form
    setName('');
    setDateOfIncident('');
    setLocation('');
    setCauseOfDeath('');
    setSubmittedBy('');
    setPhoto(null);
  };

  return (
    <div className="form-container">
      <h2>Honor a Victim</h2>
      <p className="form-description">
        Submit a name to be added to the memorial. All submissions are reviewed before being displayed.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Victim's Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

       <div className="form-group">
          <label htmlFor="date">Date of Incident (Optional)</label>
          <input
            type="date"
            id="date"
            value={dateOfIncident}
            onChange={(e) => setDateOfIncident(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location (Optional)</label>
          <input
            type="text"
            id="location"
            placeholder="City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

       
         <div className="form-group">
          <label htmlFor="cause">Cause of Death (Optional)</label>
          <textarea
            id="cause"
            rows="3"
            placeholder="Brief description (optional, sensitive)"
            value={causeOfDeath}
            onChange={(e) => setCauseOfDeath(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="submittedBy">Your Relationship (Optional)</label>
          <input
            type="text"
            id="submittedBy"
            placeholder="e.g., Sister, Friend, Advocate, or leave blank for Anonymous"
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
          />
        </div>

          <div className="form-group">
          <label htmlFor="photo">Upload Photo (Optional)</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
          <p className="help-text">
            By uploading, you confirm you have permission to share this photo publicly.
          </p>
        </div>
<button type="submit" className="submit-btn">
          Submit for Review
        </button>
      </form>
    </div>
  );
}//Function to handle form submission

export default SubmissionForm;