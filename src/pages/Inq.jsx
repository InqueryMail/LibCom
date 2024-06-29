import React, { useState, useEffect } from "react";
import axios from "axios";
import classNames from "classnames";
import { AiOutlineDelete, AiOutlineMail } from "react-icons/ai"; // Import delete and mail icons from React Icons

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get("https://inquerymail.onrender.com/inq");
      // Sort inquiries based on flag priority: new -> pending -> read -> finished
      const sortedInquiries = response.data.sort((a, b) => {
        const priority = { new: 1, pending: 2, read: 3, finished: 4 };
        return priority[a.flag] - priority[b.flag];
      });
      setInquiries(sortedInquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  const handleFlagChange = async (inquiryId, newFlag) => {
    try {
      await axios.put(`https://inquerymail.onrender.com/inq/${inquiryId}`, {
        flag: newFlag,
      });
      fetchInquiries(); // Refresh inquiries after flag update
    } catch (error) {
      console.error("Error updating flag:", error);
    }
  };

  const handleDeleteInquiry = async (inquiryId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`https://inquerymail.onrender.com/inq/${inquiryId}`);
        fetchInquiries(); // Refresh inquiries after deletion
      } catch (error) {
        console.error("Error deleting inquiry:", error);
      }
    }
  };

  const handleMailToInquiry = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleInquiryClick = (inquiry) => {
    // Check if the click target is the "Name" or "Organization" cell
    const clickedElement = window.event.target;
    if (
      clickedElement.tagName === "TD" &&
      (clickedElement.cellIndex === 0 || clickedElement.cellIndex === 1)
    ) {
      setSelectedInquiry(inquiry);
      setShowPopup(true);
      // Mark inquiry as read
      handleFlagChange(inquiry._id, "read");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedInquiry(null); // Clear selected inquiry
  };

  const flagColorClass = (flag) => {
    switch (flag) {
      case "new":
        return "bg-blue-500";
      case "read":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "finished":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const flagLabel = (flag) => {
    switch (flag) {
      case "new":
        return "New";
      case "read":
        return "Read";
      case "pending":
        return "Pending";
      case "finished":
        return "Finished";
      default:
        return "Unknown";
    }
  };

  const renderDropdownOptions = (currentFlag) => {
    switch (currentFlag) {
      case "new":
        return (
          <>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="pending">Pending</option>
            <option value="finished">Finished</option>
          </>
        );
      case "read":
        return (
          <>
            <option value="read">Read</option>
            <option value="pending">Pending</option>
            <option value="finished">Finished</option>
          </>
        );
      case "pending":
        return (
          <>
            <option value="pending">Pending</option>
            <option value="finished">Finished</option>
          </>
        );
      case "finished":
        return <option value="finished">Finished</option>;
      default:
        return null;
    }
  };

  // Filter inquiries based on search term
  const filteredInquiries = inquiries.filter(
    (inquiry) =>
      inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to format date without time
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white text-center">
        All Inquiries
      </h1>
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Name or Organization"
          className="px-3 py-2 border border-gray-300 rounded-md w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Organization
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Flags
              </th>
              <th className="pr-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mail
              </th>
              <th className="pr-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Registered
              </th>
              <th className="pr-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredInquiries.map((inquiry, index) => (
              <tr
                key={inquiry._id}
                className="transition-all hover:bg-gray-50 cursor-pointer"
                onClick={() => handleInquiryClick(inquiry)}
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{inquiry.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {inquiry.organization}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={classNames(
                      "inline-block h-4 w-4 rounded-full",
                      flagColorClass(inquiry.flag)
                    )}
                  ></span>
                  <span className="ml-2">{flagLabel(inquiry.flag)}</span>
                </td>
                <td className=" py-4 whitespace-nowrap text-sm font-medium">
                  <div className="relative inline-block text-center mr-2">
                    <select
                      className="rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                      onChange={(e) =>
                        handleFlagChange(inquiry._id, e.target.value)
                      }
                      value={inquiry.flag}
                    >
                      {renderDropdownOptions(inquiry.flag)}
                    </select>
                  </div>
                </td>
                <td className="items-right space-x-2">
                  <div>
                    <a
                      href={`mailto:${inquiry.email}`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <AiOutlineMail className="w-5 h-5" />
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(inquiry.date_registered)}
                </td>
                <td className="pr-5">
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click from propagating to the row
                      handleDeleteInquiry(inquiry._id);
                    }}
                  >
                    <AiOutlineDelete className="w-5 h-5" /> {/* Delete icon */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for displaying inquiry details */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-700 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 shadow-lg">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Inquiry Details</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={handleClosePopup}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="mb-4">
              <p className="mb-2">
                <strong>Name:</strong> {selectedInquiry.name}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {selectedInquiry.email}
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> {selectedInquiry.phone}
              </p>
              <p className="mb-2">
                <strong>Organization Name:</strong>{" "}
                {selectedInquiry.organization}
              </p>
              <p className="mb-2">
                <strong>Organization Type:</strong> {selectedInquiry.option}
              </p>
              <p className="mb-2">
                <strong>Message:</strong> {selectedInquiry.message}
              </p>
              <p className="mb-2">
                <strong>Date Registered:</strong>{" "}
                {formatDate(selectedInquiry.date_registered)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InquiryList;
