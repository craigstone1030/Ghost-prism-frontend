import { useState } from "react";

type FaqItemProps = {
  title: string;
  description: string;
};

export default function FaqItem(props: FaqItemProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`flex flex-col p-10 cursor-pointer rounded-[40px] neumorphic-shadows bg-[#080B13] ${
        expanded && "neumorphic-shadows-active"
      }`}
    >
      <div className="flex flex-row items-center text-xl text-[#C4E2FE]">
        <p className={`flex-auto font-chakraPetch ${expanded ? "font-medium" : "font-normal"}`}>
          {props.title}
        </p>
        {expanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-dash-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        )}
      </div>
      <div
        className={`transition-max-height text-lg font-chakraPetch duration-500 overflow-hidden ${
          expanded ? "max-h-auto pt-2" : "max-h-0 p-0"
        }`}
      >
        <p className="text-[#C4E2FE]">{props.description}</p>
      </div>
    </div>
  );
}
