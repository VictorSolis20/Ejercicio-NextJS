import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home(props) {

  const [peoples, setPeoples] = useState([]);
  const getInitialData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=6");
    const { results } = await res.json();
    setPeoples(results);
    console.log("results", results);
  };

  useEffect(() => {
    getInitialData();
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Next Js SSR
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Consumo de API randomuser
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {peoples.map((person) => (
            <li key={person.email}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-16 w-16 rounded-full"
                  src={person.picture.thumbnail}
                  width={50}
                  height={50}
                  alt={person.name.first}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name.first}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.gender}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
