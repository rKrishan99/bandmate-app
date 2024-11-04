import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import Post from "../../components/post/Post";
import axios from "axios";

const Feed = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [vacancies, setVacancies] = useState([]);
  const [filteredVacancies, setFilteredVacancies] = useState([]); // Added state for filtered vacancies

  const category = [
    { name: "All" },
    { name: "Bass Guitarist" },
    { name: "Rhythm Guitarist" },
    { name: "Drummer" },
    { name: "Percussionist" },
    { name: "Keyboardist" },
    { name: "Vocalists" },
  ];

  const fetchVacancies = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/vacancy`);
      setVacancies(response.data);
      setFilteredVacancies(response.data); // Set all vacancies by default
    } catch (error) {
      console.error("Error fetching vacancies:", error);
    }
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  useEffect(() => {
    if (selectedOption) {
      const filtered = vacancies.filter((vacancy) =>
        selectedOption.name === "All"
          ? true
          : vacancy.category === selectedOption.name
      );
      setFilteredVacancies(filtered);
    } else {
      setFilteredVacancies(vacancies);
    }
  }, [selectedOption, vacancies]);

  return (
    <div className="flex flex-col items-center bg-background min-h-screen">
      <div className="w-full bg-slate-100 px-8 lg:px-cusPadding shadow-md h-auto py-3 flex items-center justify-start gap-4 flex-wrap md:flex-nowrap">
        <span className="text-sm font-bold w-auto shadow-md bg-cardBg px-4 py-[10px] rounded-md text-gray-800 md:text-lg text-center">
          Filter Ads
        </span>
        <Dropdown
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.value)}
          options={category}
          optionLabel="name"
          placeholder="Filter by category"
          className="w-full md:w-[500px] shadow-md"
        />
      </div>

      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8 mt-4 mb-4">
        <Post vacancies={filteredVacancies} /> {/* Pass filtered vacancies */}
      </div>
    </div>
  );
};

export default Feed;
