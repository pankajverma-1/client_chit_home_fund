import React from 'react';

const DocumentViewer = ({ isOpen }) => {
  return (
    <>
      <div>DocumentViewer</div>
      <div className={isOpen ? 'd-flex' : 'd-none'}>
        <div className="h6">AadharXXXXXX</div>
        <img
          src="https://images.unsplash.com/photo-1663081692819-bcc628d5c9b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
          alt="aaaaaaaa"
          className=""
        />
      </div>
    </>
  );
};

export default DocumentViewer;
