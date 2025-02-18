import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminContact = () => {
  const [data, setData] = useState([]);

  const deleteContactById = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`https://soumik-server.onrender.com/api/form/contact/delete/${id}`, {
        method: "DELETE",
      });

      // console.log(response);
      if (response.ok) {
        const res = await response.json();
        console.log("Contact deleted successfully");
        deleteContactById();
      }
    } catch (error) {
      console.log("contact can't be deleted");
    }
  };

  const getAllContactData = async () => {
    try {
      const response = await fetch("https://soumik-server.onrender.com/api/form/contact-details", {
        method: "GET",
      });

      // console.log(response);
      if (response.ok) {
        const res_data = await response.json();
        setData(res_data.msg);
        console.log("data", res_data.msg[0]);
        // toast.success("See all the contact details");
      }
    } catch (error) {
      toast.error("You can't see the contacts");
    }

    // console.log("data:",data.msg);
  };

  useEffect(() => {
    getAllContactData();
  }, []);
  return (
    <div>
      <p className='text-3xl text-center p-4'>Only Admin can see Contact data</p>
      {data.length > 0 ? (
        data.map((contact) => (
          <div key={contact._id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            <p>
              <strong>Phone:</strong> {contact.phone}
            </p>
            <p>
              <strong>Message:</strong> {contact.message}
            </p>
            <button
              className='btn bg-green-500 hover:bg-green-700
                   text-white font-bold py-2 px-4
                     rounded-lg ml-8'
              onClick={() => deleteContactById(contact._id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default AdminContact;
