import React, { useState } from "react";

// Define the type for an option with description
interface Option {
  id: number;
  text: string;
  description: string; // Added description
}

// Define the type for the voting state
interface Votes {
  [key: number]: number;
}

const options: Option[] = [
  { id: 1, text: "Project A", description: "Description for Project A" },
  { id: 2, text: "Project B", description: "Description for Project B" },
  { id: 3, text: "Project C", description: "Description for Project C" },
];

const Layout: React.FC = () => {
  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Voting System</h1>
      <Voting />
    </div>
  );
};

const Voting: React.FC = () => {
  const [votes, setVotes] = useState<Votes>(
    options.reduce((acc, option) => {
      acc[option.id] = 0;
      return acc;
    }, {} as Votes)
  );

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleVote = (id: number) => {
    setSelectedOption(id);
  };

  const confirmVote = () => {
    setVotes((prevVotes) => {
      const newVotes = { ...prevVotes };
      if (selectedOption !== null) {
        newVotes[selectedOption] += 1;
      }
      return newVotes;
    });
    setSelectedOption(null);
  };

  const selectedOptionDetails = options.find(
    (option) => option.id === selectedOption
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Select an option and vote</h2>
      {options.map((option) => (
        <Button
          key={option.id}
          option={option}
          onClick={() => handleVote(option.id)}
          isSelected={option.id === selectedOption}
        />
      ))}
      {selectedOption !== null && (
        <Button
          onClick={confirmVote}
          isSelected={true} // Set to true to apply the selected styles
          option={{ id: -1, text: "Confirm Vote", description: "" }} // Dummy option
        />
      )}
      {selectedOptionDetails && (
        <div className="mt-4 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">
            {selectedOptionDetails.text}
          </h3>
          <p>{selectedOptionDetails.description}</p>
        </div>
      )}
    </div>
  );
};

interface ButtonProps {
  option: Option;
  onClick: () => void;
  isSelected: boolean;
}

const Button: React.FC<ButtonProps> = ({ option, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`p-4 m-2 text-black border-2 cursor-pointer rounded-[20px] max-w-[390px] w-[70vw] md:w-[390px] max-h-[818px] mx-6 transition-colors 
                  ${
                    isSelected
                      ? "bg-green-200 border-green-500"
                      : "bg-white border-gray-300"
                  } 
                  hover:bg-green-100`}
    >
      {option.text}
    </div>
  );
};

export default Layout;
