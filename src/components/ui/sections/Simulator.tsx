import { useState } from "react";

const SimulatorSection = () => {
  const [formData, setFormData] = useState({
    height: "",
    length: "",
    width: "",
    water: "",
    velocity: "",
    materialType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="form-section">
      <h2 style={{ textAlign: "center" }}>Test your defenses!</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          <div className="field-group">
            <label htmlFor="height">Height:</label>
            <input
              type="number"
              id="height"
              name="height"
              value={formData.height}
              onChange={handleChange}
              placeholder="in Meters"
              required
            />
          </div>
          <div className="field-group">
            <label htmlFor="length">Length:</label>
            <input
              type="number"
              id="length"
              name="length"
              value={formData.length}
              onChange={handleChange}
              placeholder="in Meters"
              required
            />
          </div>
          <div className="field-group">
            <label htmlFor="width">Width:</label>
            <input
              type="number"
              id="width"
              name="width"
              value={formData.width}
              onChange={handleChange}
              placeholder="in Meters"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="water">Water level:</label>
          <input
            type="number"
            id="water"
            name="water"
            value={formData.water}
            onChange={handleChange}
            placeholder="Height of the water level in meters"
            required
          />
        </div>
        <div>
          <label htmlFor="velocity">Velocity:</label>
          <input
            type="number"
            id="velocity"
            name="velocity"
            value={formData.velocity}
            onChange={handleChange}
            placeholder="Velocity of water in meters per seconds"
            required
          />
        </div>
        <div>
          <label htmlFor="materialType">Material Type:</label>
          <select
            id="materialType"
            name="materialType"
            value={formData.materialType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select the material type
            </option>
            <option value="wood">Wood</option>
            <option value="clay">Clay</option>
            <option value="stone">Stone</option>
            <option value="concrete">Concrete</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <style jsx>{`
        .form-section {
          padding: 30px; /* Added padding */
          margin: 20px auto; /* Added margin */
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
          max-width: 500px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Added shadow */
        }
        form div {
          margin-bottom: 15px;
        }
        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
        }
        input,
        textarea,
        select {
          width: 100%;
          padding: 10px; /* Increased padding */
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .name-fields {
          display: flex;
          gap: 10px;
        }
        .field-group {
          flex: 1;
        }
        button {
          background-color: #0070f3;
          color: white;
          padding: 12px 24px; /* Increased padding */
          border: none;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Added button shadow */
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default SimulatorSection;
