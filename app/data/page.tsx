// app/data/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function BiometricData() {
  const { user } = useUser();
  const [collapsed, setCollapsed] = useState(false);

  // Placeholder data for heart rate over time
  const heartRateData = [
    { date: "Apr 4", value: 72 },
    { date: "Apr 5", value: 68 },
    { date: "Apr 6", value: 74 },
    { date: "Apr 7", value: 75 },
    { date: "Apr 8", value: 71 },
    { date: "Apr 9", value: 69 },
    { date: "Apr 10", value: 72 },
  ];

  // Placeholder data for sleep metrics
  const sleepData = [
    { date: "Apr 4", deep: 1.5, light: 5.2, rem: 1.8 },
    { date: "Apr 5", deep: 1.8, light: 4.8, rem: 1.6 },
    { date: "Apr 6", deep: 1.2, light: 5.0, rem: 1.5 },
    { date: "Apr 7", deep: 1.7, light: 5.5, rem: 1.9 },
    { date: "Apr 8", deep: 1.4, light: 4.9, rem: 1.7 },
    { date: "Apr 9", deep: 1.6, light: 5.1, rem: 1.8 },
    { date: "Apr 10", deep: 1.9, light: 5.3, rem: 2.0 },
  ];

  // Placeholder data for biometric summary
  const biometricSummary = {
    heartRate: {
      resting: 68,
      max: 142,
      min: 58,
      trend: "stable",
    },
    hrv: {
      average: 42,
      trend: "improving",
    },
    sleep: {
      average: 7.2,
      quality: 78,
      trend: "stable",
    },
    activity: {
      steps: 8240,
      activeMinutes: 42,
      trend: "decreasing",
    },
    temperature: {
      current: 98.2,
      trend: "stable",
    },
    bloodOxygen: {
      average: 97,
      min: 95,
      trend: "stable",
    },
  };

  // Function to determine trend icon and color
  const getTrendIndicator = (trend: string) => {
    switch (trend) {
      case "improving":
        return {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                clipRule="evenodd"
              />
            </svg>
          ),
          color: "text-green-500",
        };
      case "decreasing":
        return {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                clipRule="evenodd"
              />
            </svg>
          ),
          color: "text-red-500",
        };
      case "stable":
      default:
        return {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ),
          color: "text-blue-500",
        };
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar - same as in Dashboard */}
      <div
        className={`${
          collapsed ? "w-20" : "w-64"
        } bg-white dark:bg-gray-800 h-full transition-all duration-300 border-r border-gray-200 dark:border-gray-700`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            {!collapsed && (
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <Image
                    src="/healthlogo.png"
                    alt="HealthRhythm Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  HealthRhythm
                </span>
              </div>
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400"
            >
              {collapsed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Sidebar navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              {!collapsed && <span className="ml-3">Dashboard</span>}
            </Link>

            <Link
              href="/data"
              className="flex items-center px-4 py-2 text-gray-900 bg-indigo-50 rounded-md dark:text-white dark:bg-indigo-900/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-indigo-600 dark:text-indigo-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              {!collapsed && <span className="ml-3">Biometric Data</span>}
            </Link>

            <Link
              href="/activities"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {!collapsed && <span className="ml-3">Activities</span>}
            </Link>

            <Link
              href="/insights"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              {!collapsed && <span className="ml-3">Insights</span>}
            </Link>

            <Link
              href="/settings"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              {!collapsed && <span className="ml-3">Settings</span>}
            </Link>
          </nav>

          {/* User profile section */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <Link href="/profile" className="flex items-center">
              <div className="flex-shrink-0">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  {user?.imageUrl ? (
                    <Image
                      src={user.imageUrl as string}
                      alt="User profile"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <svg
                      className="h-10 w-10 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
              {!collapsed && (
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {user?.fullName || "User Name"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    View Profile
                  </p>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Biometric Data
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              View and analyze your biometric trends and patterns.
            </p>
          </div>

          {/* Data source selection */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Data Sources
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your connected biometric data sources
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-green-600 dark:text-green-400 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Connected
                </span>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition-colors">
                  Add Source
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3 flex items-center">
                <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Fitbit
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Last synced: 2 hours ago
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3 flex items-center">
                <div className="h-10 w-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Apple Health
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Last synced: 30 minutes ago
                  </p>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-3 flex items-center">
                <div className="h-10 w-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Add New Source
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Connect a new device or app
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biometric summary cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Heart rate card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Heart Rate
                </h2>
                <div className="h-8 w-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Resting
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {biometricSummary.heartRate.resting}{" "}
                    <span className="text-sm font-normal">bpm</span>
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Range
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {biometricSummary.heartRate.min}-
                    {biometricSummary.heartRate.max}{" "}
                    <span className="text-sm font-normal">bpm</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Trend
                </p>
                <div
                  className={`flex items-center ${
                    getTrendIndicator(biometricSummary.heartRate.trend).color
                  }`}
                >
                  <span className="text-sm mr-1">
                    {biometricSummary.heartRate.trend}
                  </span>
                  {getTrendIndicator(biometricSummary.heartRate.trend).icon}
                </div>
              </div>
            </div>

            {/* Sleep card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Sleep
                </h2>
                <div className="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Average
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {biometricSummary.sleep.average}{" "}
                    <span className="text-sm font-normal">hrs</span>
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Quality
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {biometricSummary.sleep.quality}
                    <span className="text-sm font-normal">%</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Trend
                </p>
                <div
                  className={`flex items-center ${
                    getTrendIndicator(biometricSummary.sleep.trend).color
                  }`}
                >
                  <span className="text-sm mr-1">
                    {biometricSummary.sleep.trend}
                  </span>
                  {getTrendIndicator(biometricSummary.sleep.trend).icon}
                </div>
              </div>
            </div>

            {/* Activity card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Activity
                </h2>
                <div className="h-8 w-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Steps
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {biometricSummary.activity.steps.toLocaleString()}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Active Minutes
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    {biometricSummary.activity.activeMinutes}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Trend
                </p>
                <div
                  className={`flex items-center ${
                    getTrendIndicator(biometricSummary.activity.trend).color
                  }`}
                >
                  <span className="text-sm mr-1">
                    {biometricSummary.activity.trend}
                  </span>
                  {getTrendIndicator(biometricSummary.activity.trend).icon}
                </div>
              </div>
            </div>
          </div>

          {/* Charts section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Heart rate chart */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Heart Rate Over Time
              </h2>

              {/* Simplified heart rate chart */}
              <div className="h-64 w-full">
                <div className="flex h-full items-end pb-4 space-x-1">
                  {heartRateData.map((entry, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-red-500 rounded-t"
                        style={{ height: `${(entry.value - 50) * 2}%` }}
                      ></div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        {entry.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center">
                  View Detailed Report
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Sleep chart */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Sleep Quality
              </h2>

              {/* Simplified sleep chart */}
              <div className="h-64 w-full">
                <div className="flex h-full items-end pb-4 space-x-1">
                  {sleepData.map((entry, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div className="w-full flex flex-col">
                        <div
                          className="w-full bg-purple-300 dark:bg-purple-600"
                          style={{ height: `${entry.rem * 12}px` }}
                        ></div>
                        <div
                          className="w-full bg-indigo-300 dark:bg-indigo-600"
                          style={{ height: `${entry.light * 12}px` }}
                        ></div>
                        <div
                          className="w-full bg-blue-500 dark:bg-blue-700"
                          style={{ height: `${entry.deep * 12}px` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        {entry.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <span className="h-3 w-3 bg-blue-500 dark:bg-blue-700 rounded-sm mr-2"></span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Deep
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-3 w-3 bg-indigo-300 dark:bg-indigo-600 rounded-sm mr-2"></span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Light
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-3 w-3 bg-purple-300 dark:bg-purple-600 rounded-sm mr-2"></span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        REM
                      </span>
                    </div>
                  </div>
                  <button className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center">
                    View Sleep Log
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional metrics section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* HRV card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Heart Rate Variability
                </h2>
                <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-4 mb-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Average HRV
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {biometricSummary.hrv.average}{" "}
                      <span className="text-sm font-normal">ms</span>
                    </p>
                  </div>
                  <div
                    className={`flex items-center ${
                      getTrendIndicator(biometricSummary.hrv.trend).color
                    }`}
                  >
                    <span className="text-sm mr-1">
                      {biometricSummary.hrv.trend}
                    </span>
                    {getTrendIndicator(biometricSummary.hrv.trend).icon}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your HRV score is improving, which suggests better stress
                management and recovery. Continue with your current routine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
