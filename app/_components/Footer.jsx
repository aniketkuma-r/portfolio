export default function Footer({ lastUpdated }) {
  return (
    <div className="p-2 pt-4 border-t-1 border-gray-400 border-opacity-25">
      <p className="text-center font-light text-sm">
        <span className="text-primary">© Copyright 2024</span>
        {" - All rights reserved. Developed by "}
        <span className="font-gustarydelight text-primary text-xl">
          Aniket Kumar
        </span>
      </p>
      <p className="text-end">Last Updated: {lastUpdated}</p>
    </div>
  );
}
