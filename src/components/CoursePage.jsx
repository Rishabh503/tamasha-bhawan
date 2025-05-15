import React, { useState, useEffect, useRef } from 'react';
import { FiEdit, FiTrash2, FiSave, FiPlus } from 'react-icons/fi';

export const CoursePage = () => {
  const [links, setLinks] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const nameRef = useRef();
  const urlRef = useRef();
  const detailsRef = useRef();

  useEffect(() => {
    const savedLinks = JSON.parse(localStorage.getItem('stickyLinks'));
    if (savedLinks) setLinks(savedLinks);
  }, []);

  useEffect(() => {
    localStorage.setItem('stickyLinks', JSON.stringify(links));
  }, [links]);

  const addLink = () => {
    const newLink = {
      id: Date.now(),
      name: nameRef.current.value,
      url: urlRef.current.value,
      details: detailsRef.current.value
    };
    if (newLink.name && newLink.url) {
      setLinks([...links, newLink]);
      nameRef.current.value = '';
      urlRef.current.value = '';
      detailsRef.current.value = '';
    }
  };

  const deleteLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrop = (index) => {
    const updatedLinks = [...links];
    const [draggedItem] = updatedLinks.splice(draggedIndex, 1);
    updatedLinks.splice(index, 0, draggedItem);
    setLinks(updatedLinks);
    setDraggedIndex(null);
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-6">Sticky Links</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6 flex gap-2">
        <input ref={nameRef} placeholder="Name" className="border p-2 rounded-lg w-32" />
        <input ref={urlRef} placeholder="URL" className="border p-2 rounded-lg w-48" />
        <input ref={detailsRef} placeholder="Details" className="border p-2 rounded-lg w-64" />
        <button onClick={addLink} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          <FiPlus />
        </button>
      </div>

      <div className="grid gap-4 w-full max-w-3xl">
        {links.map((link, index) => (
          <div
            key={link.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-700">{link.name}</h2>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {link.url}
              </a>
              <p className="text-gray-500 text-sm mt-1">{link.details}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => deleteLink(link.id)} className="text-red-500 hover:text-red-600">
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// export default StickyLinks;
