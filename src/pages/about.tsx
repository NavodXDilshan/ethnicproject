// pages/aqua-shield.tsx
import React from 'react';

const About = () => {
  return (
    <div className="aqua-shield-container">
      <h1 className="title">Purpose of Aqua Shield</h1>
      <p className="content">
        Aqua Shield is dedicated to addressing the unequal access to vital resources that creates disparities among different ethnic and socioeconomic groups. Not only is it harmful to have unequal access, but the inability to retain the resources one already possesses can also be devastating to society.
      </p>
      <h2 className="subtitle">Contribution to the Overall Goal</h2>
      <p className="content">
        Tackling social and ethnic divisions over resources cannot be achieved by focusing on just one aspect of the issue. Aqua Shield's mission is to eliminate the disruptions caused by natural events such as floods that impact resource distribution and retention. By harnessing natural forces to counter resource disparity, Aqua Shield works to level the playing field for everyone, regardless of their geographical location.
      </p>

      <style jsx>{`
        .aqua-shield-container {
          padding: 30px;
          background-color: #e3f2fd;
          border-radius: 8px;
          max-width: 800px;
          margin: 40px auto;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center; /* Center the content within the container */
        }

        .title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #0277bd;
        }

        .subtitle {
          margin-top: 20px;
          font-size: 1.8rem;
          font-weight: bold;
          color: #01579b;
        }

        .content {
          font-size: 1.1rem;
          line-height: 2; /* Increased line spacing */
          color: #333;
          margin-top: 10px;
        }

        @media (max-width: 768px) {
          .aqua-shield-container {
            padding: 20px;
          }

          .title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
