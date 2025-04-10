// app/activities/page.tsx
"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components /Sidebar"
export default function Activities() {
  useUser();
  const [selectedTab, setSelectedTab] = useState("scheduled");
  const [showActivityModal, setShowActivityModal] = useState(false);

  // Placeholder data for scheduled activities
  const scheduledActivities = [
    {
      id: 1,
      title: "Morning Run",
      date: "Today",
      time: "6:30 - 7:15 AM",
      type: "exercise",
      biorhythmMatch: "high",
      location: "Local Park",
      notes: "5km easy pace",
    },
    {
      id: 2,
      title: "Strategy Meeting",
      date: "Today",
      time: "10:00 - 11:00 AM",
      type: "work",
      biorhythmMatch: "high",
      location: "Conference Room B",
      notes: "Prepare quarterly plan",
    },
    {
      id: 3,
      title: "Creative Writing",
      date: "Today",
      time: "2:30 - 3:30 PM",
      type: "creative",
      biorhythmMatch: "medium",
      location: "Home Office",
      notes: "Work on chapter 3",
    },
    {
      id: 4,
      title: "Evening Yoga",
      date: "Today",
      time: "6:00 - 7:00 PM",
      type: "exercise",
      biorhythmMatch: "medium",
      location: "Yoga Studio",
      notes: "Relaxation focus",
    },
    {
      id: 5,
      title: "Team Brainstorming",
      date: "Tomorrow",
      time: "9:30 - 10:30 AM",
      type: "work",
      biorhythmMatch: "high",
      location: "Innovation Lab",
      notes: "New product ideas",
    },
    {
      id: 6,
      title: "HIIT Workout",
      date: "Tomorrow",
      time: "5:00 - 5:45 PM",
      type: "exercise",
      biorhythmMatch: "high",
      location: "Gym",
      notes: "Focus on upper body",
    },
  ];

  // Placeholder data for activity history
  const activityHistory = [
    {
      id: 101,
      title: "Deep Work Session",
      date: "Yesterday",
      time: "9:00 - 11:30 AM",
      type: "work",
      biorhythmMatch: "high",
      rating: 9,
      notes: "Very productive, completed project ahead of schedule",
    },
    {
      id: 102,
      title: "Strength Training",
      date: "Yesterday",
      time: "5:30 - 6:30 PM",
      type: "exercise",
      biorhythmMatch: "medium",
      rating: 7,
      notes: "Good energy but not peak performance",
    },
    {
      id: 103,
      title: "Team Meeting",
      date: "2 days ago",
      time: "2:00 - 3:00 PM",
      type: "work",
      biorhythmMatch: "low",
      rating: 5,
      notes: "Felt tired and unfocused, not the best time for meetings",
    },
    {
      id: 104,
      title: "Evening Run",
      date: "3 days ago",
      time: "6:00 - 7:00 PM",
      type: "exercise",
      biorhythmMatch: "high",
      rating: 9,
      notes: "Personal best time, felt energized throughout",
    },
    {
      id: 105,
      title: "Meditation Session",
      date: "3 days ago",
      time: "8:00 - 8:30 AM",
      type: "mindfulness",
      biorhythmMatch: "high",
      rating: 8,
      notes: "Great focus and clarity",
    },
  ];

  // Placeholder data for recommended activities
  const recommendedActivities = [
    {
      id: 201,
      title: "Deep Focus Work",
      optimalTime: "9:00 - 11:30 AM",
      type: "work",
      reason: "Peak mental clarity period",
      biorhythmScore: 92,
      icon: "💻",
    },
    {
      id: 202,
      title: "High-Intensity Workout",
      optimalTime: "5:00 - 6:30 PM",
      type: "exercise",
      reason: "Physical energy peak",
      biorhythmScore: 88,
      icon: "🏋️‍♀️",
    },
    {
      id: 203,
      title: "Creative Project Work",
      optimalTime: "2:00 - 4:00 PM",
      type: "creative",
      reason: "Balanced emotional and mental energy",
      biorhythmScore: 85,
      icon: "🎨",
    },
    {
      id: 204,
      title: "Team Collaboration",
      optimalTime: "10:30 AM - 12:00 PM",
      type: "social",
      reason: "Good communication energy",
      biorhythmScore: 83,
      icon: "👥",
    },
    {
      id: 205,
      title: "Learning & Study",
      optimalTime: "8:00 - 10:00 AM",
      type: "education",
      reason: "High information retention period",
      biorhythmScore: 81,
      icon: "📚",
    },
  ];

  // Helper function to get activity type icon
  const getActivityTypeIcon = (type: string) => {
    switch (type) {
      case "exercise":
        return "🏃‍♂️";
      case "work":
        return "💼";
      case "creative":
        return "🎨";
      case "mindfulness":
        return "🧘‍♂️";
      case "social":
        return "👥";
      case "education":
        return "📚";
      default:
        return "📝";
    }
  };

  // Helper function to get biorhythm match badge
  const getBiorhythmMatchBadge = (match: string) => {
    switch (match) {
      case "high":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Optimal Time
          </span>
        );
      case "medium":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            Good Time
          </span>
        );
      case "low":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
            Suboptimal Time
          </span>
        );
      default:
        return null;
    }
  };

  // Helper function to get rating stars
  const getRatingStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(10)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${
              i < rating
                ? "text-yellow-500 dark:text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Use the reusable Sidebar component */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Activity Management
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Plan and track your activities based on your biorhythm patterns
              </p>
            </div>
            <button
              onClick={() => setShowActivityModal(true)}
              className="mt-4 sm:mt-0 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add New Activity
            </button>
          </div>

          {/* Tab navigation */}
          <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button
                className={`pb-4 px-1 ${
                  selectedTab === "scheduled"
                    ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
                onClick={() => setSelectedTab("scheduled")}
              >
                Scheduled Activities
              </button>
              <button
                className={`pb-4 px-1 ${
                  selectedTab === "history"
                    ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
                onClick={() => setSelectedTab("history")}
              >
                Activity History
              </button>
              <button
                className={`pb-4 px-1 ${
                  selectedTab === "recommended"
                    ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                    : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                }`}
                onClick={() => setSelectedTab("recommended")}
              >
                Recommended Activities
              </button>
            </nav>
          </div>

          {/* Tab content */}
          <div className="mt-6">
            {/* Scheduled Activities Tab */}
            {selectedTab === "scheduled" && (
              <div className="space-y-6">
                {/* Group by date */}
                {["Today", "Tomorrow"].map((date) => (
                  <div key={date}>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                      {date}
                    </h2>
                    <div className="space-y-4">
                      {scheduledActivities
                        .filter((activity) => activity.date === date)
                        .map((activity) => (
                          <div
                            key={activity.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 text-2xl mr-4">
                                {getActivityTypeIcon(activity.type)}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {activity.title}
                                  </h3>
                                  <div className="flex space-x-2">
                                    <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                      </svg>
                                    </button>
                                    <button className="text-gray-400 hover:text-red-500 dark:hover:text-red-400">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                  <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 mr-1"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    {activity.time}
                                  </div>
                                  {activity.location && (
                                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 mr-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                      </svg>
                                      {activity.location}
                                    </div>
                                  )}
                                </div>
                                <div className="mt-3 flex justify-between items-center">
                                  {getBiorhythmMatchBadge(
                                    activity.biorhythmMatch
                                  )}
                                  {activity.notes && (
                                    <span className="text-xs text-gray-500 dark:text-gray-400 italic">
                                      {activity.notes}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}

                {/* Calendar view button */}
                <div className="flex justify-center mt-8">
                  <button className="flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View Full Calendar
                  </button>
                </div>
              </div>
            )}

            {/* Activity History Tab */}
            {selectedTab === "history" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                    Recent Activities
                  </h2>
                  <div className="relative">
                    <select className="pl-3 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none">
                      <option>All Activities</option>
                      <option>Exercise</option>
                      <option>Work</option>
                      <option>Creative</option>
                      <option>Mindfulness</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {activityHistory.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 text-2xl mr-4">
                          {getActivityTypeIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                              {activity.title}
                            </h3>
                            <div>
                              {getBiorhythmMatchBadge(activity.biorhythmMatch)}
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {activity.date}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {activity.time}
                            </div>
                          </div>
                          <div className="mt-3">
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                              Rating:
                            </p>
                            {getRatingStars(activity.rating)}
                          </div>
                          {activity.notes && (
                            <div className="mt-3 bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                <span className="font-medium">Notes:</span>{" "}
                                {activity.notes}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-6">
                  <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors">
                    Load More
                  </button>
                </div>
              </div>
            )}

            {/* Recommended Activities Tab */}
            {selectedTab === "recommended" && (
              <div className="space-y-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-800 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-600 dark:text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-indigo-800 dark:text-indigo-300">
                        About Activity Recommendations
                      </h3>
                      <p className="text-sm text-indigo-700 dark:text-indigo-400 mt-1">
                        These recommendations are based on your unique biorhythm
                        pattern and historical performance data. Activities are
                        suggested for time periods when you're likely to perform
                        at your best.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {recommendedActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 hover:shadow-md transition-shadow border-l-4 border-indigo-500"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 text-2xl mr-4">
                          {activity.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                              {activity.title}
                            </h3>
                            <div className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded text-sm font-medium">
                              Score: {activity.biorhythmScore}%
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              Optimal time: {activity.optimalTime}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                              </svg>
                              Type: {activity.type}
                            </div>
                          </div>
                          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                            {activity.reason}
                          </p>
                          <div className="mt-4 flex space-x-3">
                            <button className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition-colors">
                              Schedule
                            </button>
                            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm rounded-md transition-colors">
                              See Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Activity Modal - Hidden by default */}
      {showActivityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md mx-4">
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 p-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Add New Activity
              </h3>
              <button
                onClick={() => setShowActivityModal(false)}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Activity Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter activity title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Activity Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white">
                  <option>Exercise</option>
                  <option>Work</option>
                  <option>Creative</option>
                  <option>Mindfulness</option>
                  <option>Social</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Duration
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    min="0"
                    className="w-24 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Duration"
                  />
                  <select className="ml-2 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white">
                    <option>minutes</option>
                    <option>hours</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Enter location (optional)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Notes
                </label>
                <textarea
                  rows={3} // Change from rows="3" to rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Add notes (optional)"
                ></textarea>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-md flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2 mt-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-xs text-indigo-700 dark:text-indigo-300">
                  This time slot has an <strong>85%</strong> compatibility with
                  your biorhythm pattern for this activity type.
                </p>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t border-gray-200 dark:border-gray-700 gap-3">
              <button
                onClick={() => setShowActivityModal(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none">
                Add Activity
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
