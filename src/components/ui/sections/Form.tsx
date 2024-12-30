// components/FormSection.tsx
import { useState } from "react";

const FormSection = () => {
  const [formData1, setFormData1] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formData2, setFormData2] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData1({ ...formData1, [name]: value });
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData2({ ...formData2, [name]: value });
  };

  const handleSubmit1 = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form 1 Submitted:", formData1);
  };

  const handleSubmit2 = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form 2 Submitted:", formData2);
  };

  return (
    <div className="forms-container">
      <div className="form-section">
        <h2 style={{ textAlign: "center" }}>Make Your Donation!</h2>
        <br />
        <form onSubmit={handleSubmit1}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData1.name}
              onChange={handleChange1}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData1.email}
              onChange={handleChange1}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Donation Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData1.message}
              onChange={handleChange1}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="form-section">
        <h2 style={{ textAlign: "center" }}>Become a Volunteer!</h2>
        <br />
        <form onSubmit={handleSubmit2}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData2.name}
              onChange={handleChange2}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData2.email}
              onChange={handleChange2}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Why do you want to become a volunteer?:</label>
            <textarea
              id="message"
              name="message"
              value={formData2.message}
              onChange={handleChange2}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <style jsx>{`
        .forms-container {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: flex-start;
          margin: 40px auto;
          max-width: 1200px;
        }
        .form-section {
          flex: 1;
          padding: 30px;
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          margin: 10px;
        }
        .form-section h2 {
          margin-bottom: 20px;
          font-size: 1.5rem;
          color: #333;
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
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
        }
        textarea {
          min-height: 100px;
        }
        button {
          background-color: #0070f3;
          color: white;
          padding: 12px 25px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default FormSection;
