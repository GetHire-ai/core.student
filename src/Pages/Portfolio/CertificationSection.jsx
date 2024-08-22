import React, { useState } from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { RiEditLine } from "react-icons/ri";


function CertificationSection() {
  const [certifications, setCertifications] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    id: '',
    image: null,
    description: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedCertifications = [...certifications];
      updatedCertifications[editIndex] = {
        ...formData,
        image: formData.image || certifications[editIndex].image,
      };
      setCertifications(updatedCertifications);
      setEditIndex(null);
    } else {
      setCertifications([...certifications, formData]);
    }

    setFormData({
      title: '',
      id: '',
      image: null,
      description: '',
    });
    setFormVisible(false);
  };

  const handleEdit = (index) => {
    setFormData(certifications[index]);
    setEditIndex(index);
    setFormVisible(true);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };


  // for award section
  const [awards, setAwards] = useState([]);
  const [newAward, setNewAward] = useState({
    title: "",
    givenBy: "",
    description: "",
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editIndex1, setEditIndex1] = useState(null);

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setNewAward((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editIndex !== null) {
      // Editing an existing award
      const updatedAwards = [...awards];
      updatedAwards[editIndex] = newAward;
      setAwards(updatedAwards);
      setEditIndex(null);
    } else {
      // Adding a new award
      setAwards([...awards, newAward]);
    }
    setNewAward({ title: "", givenBy: "", description: "" });
    setIsFormOpen(false);
  };

  const handleEdit1 = (index) => {
    setEditIndex(index);
    setNewAward(awards[index]);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-6 ml-3 ">
       <h2 className="text-xl font-semibold mt-10 mb-4">Certifications</h2>
      <div className="mb-6 ">
        <button
          onClick={() => setFormVisible(true)}
          className="text-blue-600 flex items-center text-[14px] hover:bg-blue-200 px-4 py-2 rounded-lg"
        >
           Add Your Certification +
        </button>
      </div>

      {formVisible && (
        <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg mb-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-700 font-semibold">Certificate Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 font-semibold">Certificate ID</label>
              <input
                type="text"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
                className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-700 font-semibold">Upload Certificate Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full mt-2 p-2 border-2 border-dashed border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              accept="image/jpeg, image/jpg"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-700 font-semibold ">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              rows="2"
              required
            ></textarea>
          </div>
          <div className="mt-6 flex justify-between">
            <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              {editIndex !== null ? 'Update' : 'Save'}
            </button>
            <button
              type="button"
              onClick={() => {
                setFormVisible(false);
                setEditIndex(null);
                setFormData({
                  title: '',
                  id: '',
                  image: null,
                  description: '',
                });
              }}
              className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded-lg shadow-md flex hover:shadow-xl gap-4"
        >
          <div className="w-1/4">
            {cert.image && (
              <img
                src={cert.image}
                alt="Certificate"
                className="w-full h-32 object-cover rounded-md cursor-pointer"
                onClick={() => handleImageClick(cert.image)}
              />
            )}
          </div>
          <div className="flex-1">
            <div className="text-lg font-semibold">{cert.title}</div>
            <div className="text-sm text-gray-600 mb-2">ID: {cert.id}</div>
            <div className="text-sm text-gray-700">{cert.description}</div>
          </div>
          <button
            onClick={() => handleEdit(index)}
            className="text-blue-600 hover:text-blue-800 self-start"
          >
            <RiEditLine size={20} />
          </button>
        </div>
      ))}

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" p-4 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={20} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="max-w-full max-h-screen rounded-md"
            />
          </div>
        </div>
      )}
       

       {/* award section */}
       <div className=" ">
      <div
        className="text-blue-600 mt-16 flex items-center text-[15px] w-[160px] hover:bg-blue-200 px-4 py-2 rounded-lg hover:cursor-pointer"
        onClick={() => setIsFormOpen(!isFormOpen)}
      >
        Add your Awards +
      </div>

      {isFormOpen && (
        <div className="border p-4 rounded-md mb-4 mt-5">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="title"
              placeholder="Award Title"
              value={newAward.title}
              onChange={handleInputChange1 }
              className="border-b-2 p-2 rounded-md w-full"
            />
            <input
              type="text"
              name="givenBy"
              placeholder="Given By"
              value={newAward.givenBy}
              onChange={handleInputChange1}
              className="border-b-2 p-2 rounded-md w-full"
            />
          </div>
          <textarea
            name="description"
            placeholder="Description"
            value={newAward.description}
            onChange={handleInputChange1}
            className="border p-2 rounded-md w-full mb-4"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      )}

      <div>
        {awards.map((award, index) => (
          <div
            key={index}
            className="border p-4 rounded-md mb-4 flex bg-gray-100 shadow-lg hover:shadow-xl justify-between items-center"
          >
            <div>
              <h3 className=" font-semibold">{award.title}</h3>
              <p className="text-sm font-thin">Given By: {award.givenBy}</p>
              <p className="text-sm">{award.description}</p>
            </div>
            <button
              onClick={() => handleEdit1(index)}
              className="text-blue-500 hover:text-blue-600"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>




    </div>
  );
}

export default CertificationSection;