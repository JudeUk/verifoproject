import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    idNo: "",
    maritalStatus: "",
    occupation: "",
    employer: "",
    workAddress: "",
    document: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, document: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission here, e.g., send the data to your server or perform any required actions.
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="idNo">ID No.:</label>
        <input
          type="text"
          id="idNo"
          name="idNo"
          value={formData.idNo}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="maritalStatus">Marital Status:</label>
        <input
          type="text"
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="employer">Employer:</label>
        <input
          type="text"
          id="employer"
          name="employer"
          value={formData.employer}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="workAddress">Work Address:</label>
        <input
          type="text"
          id="workAddress"
          name="workAddress"
          value={formData.workAddress}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="document">Upload Document:</label>
        <input
          type="file"
          id="document"
          name="document"
          accept=".pdf, .doc, .docx, .jpg, .png"
          onChange={handleDocumentUpload}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
