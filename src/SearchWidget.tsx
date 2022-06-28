import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchWidget() {
  const [complexWidgetVisibilityRef, setComplexWidgetVisibility] = useState('none');
  const widgetHeaderOptionsList = ["Settings", "Invite Developers", "Create new docs", "Manage APIs"];
  return (
    <React.Fragment>
      <div className='complex-widget-container relative'>
        <button className="cursor-default px-8 py-2 rounded shadow bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm
          flex flex-row items-center justify-center gap-2
        "
          onClick={() => {
            complexWidgetVisibilityRef && complexWidgetVisibilityRef.toLowerCase() === 'none'
              ? setComplexWidgetVisibility('block')
              : setComplexWidgetVisibility('none')
          }}
        >
          <FaSearch /> Search
        </button>
        <div className="absolute w-[520px] h-fit p-4 rounded-sm border border-gray-100 shadow-sm mt-2"
          style={{
            display: complexWidgetVisibilityRef
          }}
        >
          <div className='flex flex-row items-center justify-start gap-3 w-fit h-fit'>
            {widgetHeaderOptionsList.map((widgetOption, widgetOptionIndex) => (
              <button className='px-3 py-1 text-xs text-gray-400 border border-gray-400 font-normal rounded-md bg-white hover:bg-gray-100 hover:text-gray-500'
                key={widgetOptionIndex}
              >
                {widgetOption}
              </button>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}