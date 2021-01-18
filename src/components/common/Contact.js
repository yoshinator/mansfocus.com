import React, { useEffect, useState } from 'react';

export const Contact = () => {
  const [values, setValues]   = useState({name: "", email: ""});

  const updateValues = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
      <div className="form-container">
        <h4>Get exclusive monthly content to get ahead of the crowd</h4>
          <form name="contact" method="POST" data-netlify="true">
              <p>
                  <label>
                      Your Email:{" "}
                      <input
                          type="email"
                          name="email"
                          value={values.value}
                          onChange={updateValues}
                          placeholder="you@mail.com"
                      />
                  </label>
              </p>
              <button type="submit">Get It!</button>
          </form>
      </div> 
  );
}

