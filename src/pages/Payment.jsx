/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { TbCurrencyCent } from "react-icons/tb";
import { AiOutlineEye, AiOutlinePrinter } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { PaystackButton } from "react-paystack";
import { updatePaymentPercentage } from "../slices/functionSlice";
 import "./Payment.css";

const Payment = () => {
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
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="idNo">ID No.:</label>
        <input
          type="text"
          id="idNo"
          name="idNo"
          value={formData.idNo}
          onChange={handleInputChange}
          required
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="maritalStatus">Marital Status:</label>
        <input
          type="text"
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="employer">Employer:</label>
        <input
          type="text"
          id="employer"
          name="employer"
          value={formData.employer}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="workAddress">Work Address:</label>
        <input
          type="text"
          id="workAddress"
          name="workAddress"
          value={formData.workAddress}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="document">Upload Document:</label>
        <input
          type="file"
          id="document"
          name="document"
          accept=".pdf, .doc, .docx, .jpg, .png"
          onChange={handleDocumentUpload}
          className="form-control-file"
        />
      </div>

      <button type="submit" className="submit-button">Submit</button>
    </form>
  );

};

export default Payment;
