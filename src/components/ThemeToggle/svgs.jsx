const Moon = ({ className }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Sun = ({ className }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 2V4"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 20V22"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12L2 12"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M22 12L20 12"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.7778 4.22266L17.5558 6.25424"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.22217 4.22266L6.44418 6.25424"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.44434 17.5557L4.22211 19.7779"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19.7778 19.7773L17.5558 17.5551"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { Moon, Sun };
