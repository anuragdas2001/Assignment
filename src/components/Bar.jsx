"use client";

export const Bar = ({id,totalQuestion}) => {
    console.log(id)
  return (
    <svg width="218" height="218" viewBox="0 0 218 218" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M218 109C218 48.801 169.199 0 109 0C48.801 0 0 48.801 0 109C0 169.199 48.801 218 109 218C169.199 218 218 169.199 218 109ZM16 109C16 57.6375 57.6375 16 109 16C160.362 16 202 57.6375 202 109C202 160.362 160.362 202 109 202C57.6375 202 16 160.362 16 109Z" fill="#F3F4FA"/>
      <mask id="mask0_268_67" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="218" height="218">
        <path fillRule="evenodd" clipRule="evenodd" d="M218 109C218 48.801 169.199 0 109 0C48.801 0 0 48.801 0 109C0 169.199 48.801 218 109 218C169.199 218 218 169.199 218 109ZM16 109C16 57.6375 57.6375 16 109 16C160.362 16 202 57.6375 202 109C202 160.362 160.362 202 109 202C57.6375 202 16 160.362 16 109Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_268_67)">
        <path fillRule="evenodd" clipRule="evenodd" d="M109 0H218V79L109 109V0Z" fill="#44B77B"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M109 16C113.418 16 117 12.4183 117 8C117 3.58172 113.418 0 109 0C104.582 0 101 3.58172 101 8C101 12.4183 104.582 16 109 16Z" fill="#44B77B"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M206.413 90.2563C210.831 90.2563 214.413 86.6746 214.413 82.2563C214.413 77.8381 210.831 74.2563 206.413 74.2563C201.994 74.2563 198.413 77.8381 198.413 82.2563C198.413 86.6746 201.994 90.2563 206.413 90.2563Z" fill="#44B77B"/>
      </g>
      {/* Centered Text */}
      <text 
        x="90" 
        y="110" 
        textAnchor="middle" 
        fill="#374151" 
        fontSize="96" 
        className="nunito-italic-900"

      >
        {id} 
      </text>
      <text 
        x="130" 
        y="140" 
        textAnchor="middle" 
        fill="#6B7280" 
        fontSize="32"
        className="nunito-normal-800"
      >
       /{totalQuestion}
      </text>
    </svg>
  );
};