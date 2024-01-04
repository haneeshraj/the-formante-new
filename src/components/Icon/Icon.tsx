import clsx from "clsx";

const Icon = {
  indicator: ({
    height = "24",
    width = "24",
    className,
  }: {
    height?: string;
    width?: string;
    className?: string;
  }) => {
    return (
      <svg
        className={className}
        height={height}
        width={width}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 7L20 12M20 12L15 17M20 12L8 12C6.93913 12 5.92172 11.5786 5.17157 10.8284C4.42143 10.0783 4 9.06086 4 8L4 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },

  navigate: ({
    color = "black",
    className,
    height = "24",
    width = "24",
  }: {
    color?: string;
    className?: string;
    height?: string;
    width?: string;
  }) => {
    return (
      <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 5H19M19 5V11M19 5L5 19"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
};

export default Icon;
