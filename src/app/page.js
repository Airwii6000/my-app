"use client";

import { useState } from "react";
import users from "./data/users.json";

export default function Home() {
  const [searchId, setSearchId] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = () => {
    if (searchId === "") {
      setFilteredUsers(users);
      return;
    }

    const result = users.filter(
      (user) => user.id === Number(searchId)
    );

    setFilteredUsers(result);
  };

  const handleReset = () => {
    setSearchId("");
    setFilteredUsers(users);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="mb-8 text-center text-4xl font-bold">
        User List
      </h1>

      {/* Search */}
      <div className="mb-10 flex justify-center gap-3">
        <input
          type="number"
          placeholder="Enter ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="w-64 rounded-lg border bg-white px-4 py-3"
        />

        <button
          onClick={handleSearch}
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Search
        </button>

        <button
          onClick={handleReset}
          className="rounded-lg bg-gray-500 px-6 py-3 font-semibold text-white hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="rounded-xl bg-white p-6 shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {user.firstName} {user.lastName}
              </h2>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-600">
                ID: {user.id}
              </span>
            </div>

            <p>
              <b>Email:</b> {user.email}
            </p>

            <p>
              <b>Birth date:</b> {user.birth_date}
            </p>

            <p>
              <b>Type:</b> {user.type}
            </p>

            <p>
              <b>Created:</b> {user.created_at}
            </p>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="mt-10 text-center text-gray-500">
          User not found
        </p>
      )}

    </main>
  );
}