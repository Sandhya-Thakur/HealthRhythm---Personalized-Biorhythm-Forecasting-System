// app/dashboard/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();
  const [collapsed, setCollapsed] = useState(false);

  // Placeholder data for biorhythm chart
  const biorhythmData = [
    { time: "6 AM", physical: 45, mental: 65, emotional: 30 },
    { time: "9 AM", physical: 60, mental: 85, emotional: 40 },
    { time: "12 PM", physical: 75, mental: 70, emotional: 60 },
    { time: "3 PM", physical: 65, mental: 55, emotional: 75 },
    { time: "6 PM", physical: 80, mental: 45, emotional: 70 },
    { time: "9 PM", physical: 60, mental: 30, emotional: 65 },
  ];

  // Placeholder data for recommended activities
  const recommendations = [
    { 
      time: "6:00 - 8:00 AM", 
      activity: "Light Exercise", 
      reason: "Physical energy rising",
      icon: "🏃‍♂️" 
    },
    { 
      time: "9:00 - 11:30 AM", 
      activity: "Focused Work", 
      reason: "Peak mental clarity",
      icon: "💻" 
    },
    { 
      time: "2:00 - 3:30 PM", 
      activity: "Creative Tasks", 
      reason: "Good emotional energy",
      icon: "🎨" 
    },
    { 
      time: "5:00 - 7:00 PM", 
      activity: "Exercise", 
      reason: "Physical energy peak",
      icon: "🏋️‍♀️" 
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Sidebar navigation */}
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-gray-900 bg-indigo-50 rounded-md dark:text-white dark:bg-indigo-900/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              {!collapsed && <span className="ml-3">Dashboard</span>}
            </Link>
            
            <Link
              href="/data"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              {!collapsed && <span className="ml-3">Biometric Data</span>}
            </Link>
            
            <Link
              href="/activities"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {!collapsed && <span className="ml-3">Activities</span>}
            </Link>
            
            <Link
              href="/insights"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {!collapsed && <span className="ml-3">Insights</span>}
            </Link>
            
            <Link
              href="/settings"
              className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
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
                    <svg className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
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
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Your Biorhythm Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Welcome back{user?.firstName ? `, ${user.firstName}` : ""}! Here's your personalized biorhythm for today.
            </p>
          </div>
          
          {/* Dashboard content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Biorhythm chart card */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Today's Biorhythm Pattern
              </h2>
              
              {/* Simplified chart display */}
              <div className="h-64 w-full">
                <div className="flex h-full items-end pb-4 space-x-2">
                  {biorhythmData.map((entry, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div className="flex flex-col h-52 w-full justify-end space-y-1">
                        <div 
                          className="w-full bg-indigo-500 rounded-t"
                          style={{ height: `${entry.physical}%` }}
                        ></div>
                        <div 
                          className="w-full bg-rose-500 rounded-t"
                          style={{ height: `${entry.mental}%` }}
                        ></div>
                        <div 
                          className="w-full bg-amber-500 rounded-t"
                          style={{ height: `${entry.emotional}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                        {entry.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-4 space-x-6">
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-indigo-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Physical</span>
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-rose-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Mental</span>
                </div>
                <div className="flex items-center">
                  <span className="h-3 w-3 bg-amber-500 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Emotional</span>
                </div>
              </div>
            </div>
            
            {/* Recommendations card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Recommended Schedule
              </h2>
              
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 text-xl mr-3">
                        {rec.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {rec.activity}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {rec.time}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {rec.reason}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md text-sm font-medium transition-colors">
                Sync with Calendar
              </button>
            </div>
            
            {/* Daily summary card */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Daily Summary
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">Physical Energy</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">72%</h3>
                    </div>
                    <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    8% higher than yesterday
                  </p>
                </div>
                
                <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-rose-600 dark:text-rose-400">Mental Clarity</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">65%</h3>
                    </div>
                    <div className="h-10 w-10 bg-rose-100 dark:bg-rose-900/50 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    3% lower than average
                  </p>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-amber-600 dark:text-amber-400">Emotional Balance</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">81%</h3>
                    </div>
                    <div className="h-10 w-10 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    12% higher than average
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="font-medium text-blue-700 dark:text-blue-400 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  AI Insight
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Based on your patterns, your mental clarity peaks in the morning while your physical energy reaches its height in the late afternoon. Consider scheduling creative work between 2-4 PM when both your emotional balance and physical energy are moderately high.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}