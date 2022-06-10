import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchWidget() {
  const [complexWidgetVisibilityRef, setComplexWidgetVisibility] = useState('none');
  useEffect(() => {
    complexWidgetVisibilityRef && complexWidgetVisibilityRef.toLowerCase() === "block" 
      ? setComplexWidgetVisibility('none') 
      : setComplexWidgetVisibility('block');

  }, [complexWidgetVisibilityRef]);
  return (
    <React.Fragment>
      <button className="cursor-default px-8 py-2 rounded shadow bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm
        flex flex-row items-center justify-center gap-2
      ">
        <FaSearch /> Search
      </button>
      <div className="position"
        style={{
          display: complexWidgetVisibilityRef
        }}
      >

      </div>
    </React.Fragment>
  )
}