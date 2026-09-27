export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      <h5>Basic info</h5>
      <label htmlFor="wd-your-form-first-name">First name:</label>
      <input
        type="text"
        defaultValue="Barath Keshav"
        id="wd-your-form-first-name"
      />
      <br />
      <label htmlFor="wd-your-form-last-name">Last name:</label>
      <input
        type="text"
        defaultValue="Basavapatna Keshav"
        id="wd-your-form-last-name"
      />
      <br />
      <label htmlFor="wd-your-form-student-id">Student ID:</label>
      <input
        type="password"
        placeholder="001234567"
        id="wd-your-form-student-id"
      />

      <h5>About me</h5>
      <label>Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-form-bio"
        cols={30}
        rows={6}
        defaultValue="I'm from India, currently studying Computer Science, and I want to get better at building well-architected web applications from the frontend down to the backend."
      />

      <h5>Class standing</h5>
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-freshman"
      />
      <label htmlFor="wd-your-form-standing-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-sophomore"
      />
      <label htmlFor="wd-your-form-standing-sophomore">Sophomore</label>
      <br />
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-junior"
      />
      <label htmlFor="wd-your-form-standing-junior">Junior</label>
      <br />
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-senior"
      />
      <label htmlFor="wd-your-form-standing-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="wd-your-form-standing"
        id="wd-your-form-standing-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-form-standing-graduate">Graduate</label>

      <h5>Living situation</h5>
      <input
        type="radio"
        name="wd-your-form-living"
        id="wd-your-form-living-oncampus"
        defaultChecked
      />
      <label htmlFor="wd-your-form-living-oncampus">On-campus</label>
      <br />
      <input
        type="radio"
        name="wd-your-form-living"
        id="wd-your-form-living-commuter"
      />
      <label htmlFor="wd-your-form-living-commuter">Commuter</label>

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="wd-your-form-interests"
        id="wd-your-form-interest-webdev"
        defaultChecked
      />
      <label htmlFor="wd-your-form-interest-webdev">Web development</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-form-interests"
        id="wd-your-form-interest-ml"
        defaultChecked
      />
      <label htmlFor="wd-your-form-interest-ml">Machine learning</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-form-interests"
        id="wd-your-form-interest-cloud"
      />
      <label htmlFor="wd-your-form-interest-cloud">Cloud computing</label>
      <br />
      <input
        type="checkbox"
        name="wd-your-form-interests"
        id="wd-your-form-interest-running"
      />
      <label htmlFor="wd-your-form-interest-running">Running</label>

      <h5>Major</h5>
      <label htmlFor="wd-your-form-major">Major: </label>
      <br />
      <select id="wd-your-form-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="IS">Information Systems</option>
        <option value="EE">Electrical Engineering</option>
        <option value="DS">Data Science</option>
      </select>

      <h5>Topics I want to deepen this term</h5>
      <label htmlFor="wd-your-form-topics">Topics: </label>
      <br />
      <select
        multiple
        id="wd-your-form-topics"
        defaultValue={["ARCHITECTURE", "REACT"]}
      >
        <option value="REACT">React</option>
        <option value="NODE">Node.js</option>
        <option value="DATABASES">Databases</option>
        <option value="ARCHITECTURE">Web Architecture</option>
        <option value="SECURITY">Security</option>
      </select>

      <h5>Contact and dates</h5>
      <label htmlFor="wd-your-form-email">School email: </label>
      <input
        type="email"
        defaultValue="basavapatnakeshav.b@northeastern.edu"
        id="wd-your-form-email"
      />
      <br />
      <label htmlFor="wd-your-form-grad-year">Expected graduation year: </label>
      <input
        type="number"
        defaultValue="2027"
        min={2024}
        max={2032}
        id="wd-your-form-grad-year"
      />
      <br />
      <label htmlFor="wd-your-form-birthday">Birthday: </label>
      <input
        type="date"
        defaultValue="2002-11-18"
        id="wd-your-form-birthday"
      />
      <br />
      <label htmlFor="wd-your-form-excitement">
        Excitement about this course (0-10):{" "}
      </label>
      <input
        type="range"
        defaultValue="8"
        min="0"
        max="10"
        id="wd-your-form-excitement"
      />

      <h5>Actions</h5>
      <button id="wd-your-form-save" type="submit">
        Save
      </button>
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
