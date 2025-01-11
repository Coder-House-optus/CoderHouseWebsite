import React, { useState } from 'react';

const SubmissionViewer = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const loadSubmissions = async () => {
    try {
      // Open file picker
      const [fileHandle] = await window.showOpenFilePicker({
        types: [{
          description: 'JSON Files',
          accept: {
            'application/json': ['.json']
          }
        }]
      });
      
      // Get the file
      const file = await fileHandle.getFile();
      setSelectedFile(file.name);
      
      // Read the contents
      const contents = await file.text();
      const data = JSON.parse(contents);
      setSubmissions(data);
    } catch (error) {
      console.error('Error loading file:', error);
      alert('Error loading submissions file. Please try again.');
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Form Submissions Viewer</h2>
        <button 
          onClick={loadSubmissions}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Load Submissions File
        </button>
        {selectedFile && (
          <p className="mt-2 text-gray-600">Current file: {selectedFile}</p>
        )}
      </div>

      {submissions.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border">Date</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">User Type</th>
                <th className="px-4 py-2 border">Program</th>
                <th className="px-4 py-2 border">LinkedIn</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">
                    {new Date(submission.submissionDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2 border">{submission.name}</td>
                  <td className="px-4 py-2 border">{submission.email}</td>
                  <td className="px-4 py-2 border">{submission.phone}</td>
                  <td className="px-4 py-2 border">{submission.userType}</td>
                  <td className="px-4 py-2 border">{submission.program || submission.otherType || '-'}</td>
                  <td className="px-4 py-2 border">
                    {submission.linkedin ? (
                      <a 
                        href={submission.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        View Profile
                      </a>
                    ) : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-600">
          No submissions loaded. Click the button above to load a submissions file.
        </div>
      )}
    </div>
  );
};

export default SubmissionViewer;