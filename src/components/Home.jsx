import React, { useState, useEffect } from "react";
import {
  UserIcon,
  HeartIcon,
  EyeIcon,
  SunIcon,
  BeakerIcon,
  MoonIcon,
  CloudDownloadIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Footer from "./Footer";

const LifeStatsPage = () => {
  const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" });
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false); // Preloader state

  const calculateStats = () => {
    const { day, month, year } = birthDate;
    if (!day || !month || !year) return null;

    const birth = new Date(`${year}-${month}-${day}`);
    const now = new Date();
    const milliseconds = now - birth;
    const days = milliseconds / (1000 * 60 * 60 * 24);
    const years = days / 365.25;
    const seconds = milliseconds / 1000;

    const personalStats = {
      secondsLived: Math.floor(seconds),
      daysLived: Math.floor(days),
      heartbeats: Math.floor(days * 24 * 60 * 80),
      hoursSlept: Math.floor(days * 8),
      bloodProduced: Math.floor(days * 5 * 1000),
      blinks: Math.floor(days * 24 * 60 * 60 * 15),
      stepsTaken: Math.floor(days * 7000),
      breathsTaken: Math.floor(days * 24 * 60 * 16),
      mealsEaten: Math.floor(days * 3),
    };

    const globalStats = {
      moonDistanceChange: Math.floor(years * 3.78),
      co2Increase: Math.floor(years * 2.5),
      birthsWorldwide: Math.floor(years * 140000000),
      netPopulationChange: Math.floor(years * 80000000),
      dataTransferred: Math.floor(years * 1000000 * 1024 * 1024 * 1024),
      cloudStorageUsage: Math.floor(years * 1000 * 1024 * 1024 * 1024),
    };

    return { personalStats, globalStats };
  };

  useEffect(() => {
    if (birthDate.day && birthDate.month && birthDate.year) {
      setLoading(true);
      setTimeout(() => {
        setStats(calculateStats());
        setLoading(false); // Hide preloader when stats are ready
      }, 1000); // Simulate loading delay
    }
  }, [birthDate]);

  const statItems = [
    {
      icon: UserIcon,
      label: "Ditët e jetuara",
      value: `${stats?.personalStats.daysLived.toLocaleString()} ditë`,
      iconColor: "text-blue-500",
    },
    {
      icon: HeartIcon,
      label: "Rrahjet e zemrës",
      value: `${stats?.personalStats.heartbeats.toLocaleString()} rrahje`,
      iconColor: "text-red-500",
    },
    {
      icon: BeakerIcon,
      label: "Gjak i prodhuar",
      value: `${stats?.personalStats.bloodProduced.toLocaleString()} ml`,
      iconColor: "text-pink-500",
    },
    {
      icon: SunIcon,
      label: "Sekondat e jetuara",
      value: `${stats?.personalStats.secondsLived.toLocaleString()} sekonda`,
      iconColor: "text-indigo-500",
    },
    {
      icon: SunIcon,
      label: "Orët e gjumit",
      value: `${stats?.personalStats.hoursSlept.toLocaleString()} orë`,
      iconColor: "text-yellow-500",
    },
    {
      icon: EyeIcon,
      label: "Hapja-mbyllja e syve",
      value: `${stats?.personalStats.blinks.toLocaleString()} herë`,
      iconColor: "text-green-500",
    },
    {
      icon: MoonIcon,
      label: "Ndryshimi i distancës së Hënës",
      value: `${stats?.globalStats.moonDistanceChange.toLocaleString()} cm`,
      iconColor: "text-gray-500",
    },
    {
      icon: UserGroupIcon,
      label: "Lindje globale",
      value: `${stats?.globalStats.birthsWorldwide.toLocaleString()} lindje`,
      iconColor: "text-teal-500",
    },
    {
      icon: CloudDownloadIcon,
      label: "Të dhënat e transferuara",
      value: `${stats?.globalStats.dataTransferred.toLocaleString()} GB`,
      iconColor: "text-purple-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white p-0 pt-10">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      )}

      <div className="w-full max-w-3xl">
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <UserIcon className="w-20 h-20 text-gray-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">
            Statistikat e jetës & Botës
          </h1>
          <p className="text-gray-500">
            Zbuloni statistikat tuaja të jetës dhe si ka ndryshuar bota me ju
          </p>
          <p className="pt-10">
Shkruani ditëlindjen tuaj          </p>
        </div>

        {/* Birth Date Input Section */}
        <div className="mb-8 flex flex-row justify-between space-x-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Dita:
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={birthDate.day}
              onChange={(e) =>
                setBirthDate({ ...birthDate, day: e.target.value })
              }
              max={31}
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Muaji:
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={birthDate.month}
              onChange={(e) =>
                setBirthDate({ ...birthDate, month: e.target.value })
              }
              max={12}
            />
          </div>

          <div className="w-full">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Viti:
            </label>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={birthDate.year}
              onChange={(e) =>
                setBirthDate({ ...birthDate, year: e.target.value })
              }
            />
          </div>
        </div>

        {/* Stats Display Section with Fade-Up Animation */}
        {!loading && stats && (
          <div className="flex flex-col items-center space-y-6">
            {statItems.map((item, index) => (
              <div
                key={index}
                className="w-full bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col items-center space-y-4 border border-gray-200 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon
                  className={`h-12 w-12 animate-pulse ${item.iconColor}`}
                />
                <div className="flex flex-col items-center">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    {item.label}
                  </h3>
                  <p className="text-gray-600 text-lg">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LifeStatsPage;
