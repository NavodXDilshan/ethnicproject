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

  const [result, setResult] = useState<string | null>(null);

  // Material properties (strength in MPa, drag coefficient)
  const materialProperties: Record<string, { strength: number; dragCoefficient: number }> = {
    wood: { strength: 5, dragCoefficient: 1.8 },
    clay: { strength: 2, dragCoefficient: 1.5 },
    stone: { strength: 20, dragCoefficient: 1.6 },
    concrete: { strength: 30, dragCoefficient: 1.5 },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Parse form data
    const height = parseFloat(formData.height);
    const length = parseFloat(formData.length);
    const width = parseFloat(formData.width);
    const waterLevel = parseFloat(formData.water);
    const velocity = parseFloat(formData.velocity);
    const material = formData.materialType;

    // Validate numeric fields
    if (
      isNaN(height) || isNaN(length) || isNaN(width) || 
      isNaN(waterLevel) || isNaN(velocity) || !material
    ) {
      setResult("Please fill in all fields with valid numbers.");
      return;
    }

    // Validate material exists
    if (!(material in materialProperties)) {
      setResult("Invalid material selected.");
      return;
    }

    // Constants
    const rho = 1000; // Density of water (kg/m³)
    const g = 9.81; // Gravity (m/s²)
    const safetyFactor = 1.5;

    // Calculate hydrostatic pressure and force
    const hydrostaticPressure = rho * g * waterLevel; // Pa
    const exposedArea = height * width; // m²
    const hydrostaticForce = hydrostaticPressure * exposedArea; // N

    // Calculate hydrodynamic (drag) force
    const { strength, dragCoefficient } = materialProperties[material];
    const dragForce = 0.5 * rho * velocity ** 2 * dragCoefficient * exposedArea; // N

    // Total force on the structure
    const totalForce = hydrostaticForce + dragForce; // N
    const forcePressure = totalForce / exposedArea; // Pa
    const materialStrength = strength * 1e6; // Convert MPa to Pa
    const safePressure = materialStrength / safetyFactor;

    // Check if the structure can withstand the pressure
    const canWithstand = forcePressure <= safePressure;

    // Display result
    setResult(
      canWithstand
        ? `The shelter can withstand the flood. Total force: ${totalForce.toFixed(2)} N.`
        : `The shelter may fail under these conditions. Total force: ${totalForce.toFixed(2)} N exceeds material capacity.`
    );
  };

  return (
    <div className="form-section">
      <h2 style={{ textAlign: "center" }}>Test your defenses!</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="name-fields">
          {["height", "length", "width"].map((field) => (
            <div key={field} className="field-group">
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <input
                type="number"
                id={field}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder="in Meters"
                required
                step="0.01"
              />
            </div>
          ))}
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
            step="0.01"
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
            placeholder="Velocity of water in meters per second"
            required
            step="0.01"
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
            {Object.keys(materialProperties).map((mat) => (
              <option key={mat} value={mat}>
                {mat.charAt(0).toUpperCase() + mat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {result && (
        <div className="result">
          <p>{result}</p>
        </div>
      )}
      <style jsx>{`
        .form-section {
          padding: 30px;
          margin: 20px auto;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
          max-width: 500px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
        select {
          width: 100%;
          padding: 10px;
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
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        button:hover {
          background-color: #005bb5;
        }
        .result {
          background-color: #f0f8ff;
          padding: 10px;
          border-radius: 4px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default SimulatorSection;
