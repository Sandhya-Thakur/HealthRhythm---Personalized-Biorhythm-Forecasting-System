// app/settings/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components /Sidebar"

export default function Settings() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState("account");
  
  // Account settings state
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.emailAddresses?.[0]?.emailAddress || "");
  const [timezone, setTimezone] = useState("America/New_York");
  
  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [dailyDigest, setDailyDigest] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [biorhythmAlerts, setBiorhythmAlerts] = useState(true);
  const [activityReminders, setActivityReminders] = useState(true);
  
  // Data integration settings state
  const [connectedServices, setConnectedServices] = useState([
    { id: 1, name: "Fitbit", connected: true, lastSync: "2 hours ago" },
    { id: 2, name: "Apple Health", connected: true, lastSync: "30 minutes ago" },
    { id: 3, name: "Google Fit", connected: false, lastSync: null },
    { id: 4, name: "Garmin Connect", connected: false, lastSync: null },
    { id: 5, name: "Oura Ring", connected: false, lastSync: null },
  ]);
  
  // Appearance settings state
  const [theme, setTheme] = useState("system");
  const [chartColorScheme, setChartColorScheme] = useState("default");
  const [dataDisplayDensity, setDataDisplayDensity] = useState("comfortable");
  
  // Privacy settings state
  const [dataSharing, setDataSharing] = useState(false);
  const [anonymousAnalytics, setAnonymousAnalytics] = useState(true);
  const [storeHistoricalData, setStoreHistoricalData] = useState("1year");
  
  // Advanced settings state
  const [syncFrequency, setSyncFrequency] = useState("hourly");
  const [calculationPriority, setCalculationPriority] = useState("balanced");
  
  // Handle connect/disconnect service
  const handleServiceToggle = (serviceId: number) => {
    setConnectedServices(
      connectedServices.map((service) =>
        service.id === serviceId
          ? { ...service, connected: !service.connected }
          : service
      )
    );
  };
  
  // Handle save settings
  const handleSaveSettings = () => {
    // In a real app, this would save settings to the backend
    alert("Settings saved successfully!");
  };
  
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Use the reusable sidebar component */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Settings
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your account preferences and application settings
            </p>
          </div>
          
          {/* Settings navigation and content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            {/* Tabs navigation */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab("account")}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === "account"
                      ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  Account
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === "notifications"
                      ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab("data")}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === "data"
                      ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  Data Sources
                </button>
                <button
                  onClick={() => setActiveTab("appearance")}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === "appearance"
                      ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  Appearance
                </button>
                <button
                  onClick={() => setActiveTab("privacy")}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === "privacy"
                      ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  Privacy
                </button>
                <button
                  onClick={() => setActiveTab("advanced")}
                  className={`py-4 px-6 text-sm font-medium ${
                    activeTab === "advanced"
                      ? "border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  }`}
                >
                  Advanced
                </button>
              </nav>
            </div>
            
            {/* Tab content */}
            <div className="p-6">
              {/* Account Settings */}
              {activeTab === "account" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                    Account Information
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Profile info */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-6">
                      <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                        {user?.imageUrl ? (
                          <Image
                            src={user.imageUrl}
                            alt="User profile"
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <svg
                            className="h-24 w-24 text-gray-400"
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
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                          {user?.fullName || "Your Name"}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          {user?.emailAddresses?.[0]?.emailAddress || "email@example.com"}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition-colors">
                            Change Profile Picture
                          </button>
                          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm rounded-md transition-colors">
                            Update Account with Clerk
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Form fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Timezone
                        </label>
                        <select
                          id="timezone"
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        >
                          <option value="America/New_York">Eastern Time (ET)</option>
                          <option value="America/Chicago">Central Time (CT)</option>
                          <option value="America/Denver">Mountain Time (MT)</option>
                          <option value="America/Los_Angeles">Pacific Time (PT)</option>
                          <option value="Europe/London">Greenwich Mean Time (GMT)</option>
                          <option value="Europe/Paris">Central European Time (CET)</option>
                          <option value="Asia/Tokyo">Japan Standard Time (JST)</option>
                          <option value="Australia/Sydney">Australian Eastern Time (AET)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                        Account Management
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <button className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 text-sm font-medium">
                            Change Password
                          </button>
                        </div>
                        <div>
                          <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Notification Settings */}
              {activeTab === "notifications" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                    Notification Preferences
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Notification Channels
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-700 dark:text-gray-300">Email Notifications</span>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Receive notifications via email
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={emailNotifications}
                              onChange={() => setEmailNotifications(!emailNotifications)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-700 dark:text-gray-300">Push Notifications</span>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Receive push notifications on your device
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={pushNotifications}
                              onChange={() => setPushNotifications(!pushNotifications)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Notification Types
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-700 dark:text-gray-300">Daily Digest</span>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              A summary of your daily biorhythm and performance
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={dailyDigest}
                              onChange={() => setDailyDigest(!dailyDigest)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-700 dark:text-gray-300">Weekly Report</span>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              A detailed analysis of your weekly performance and trends
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={weeklyReport}
                              onChange={() => setWeeklyReport(!weeklyReport)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-700 dark:text-gray-300">Biorhythm Alerts</span>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Notifications for significant changes in your biorhythm
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={biorhythmAlerts}
                              onChange={() => setBiorhythmAlerts(!biorhythmAlerts)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-gray-700 dark:text-gray-300">Activity Reminders</span>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Reminders for scheduled activities and optimal windows
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={activityReminders}
                              onChange={() => setActivityReminders(!activityReminders)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Data Source Settings */}
              {activeTab === "data" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                    Connect Data Sources
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      Connect your devices and apps to automatically import your biometric data.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {connectedServices.map((service) => (
                        <div
                          key={service.id}
                          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <div className="h-12 w-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mr-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-600 dark:text-gray-300"
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
                                {service.name}
                              </h3>
                              {service.connected && service.lastSync && (
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  Last synced: {service.lastSync}
                                </p>
                              )}
                            </div>
                          </div>
                          <div>
                            <button
                              onClick={() => handleServiceToggle(service.id)}
                              className={`px-4 py-2 rounded-md text-sm font-medium ${
                                service.connected
                                  ? "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                  : "bg-indigo-600 text-white hover:bg-indigo-700"
                              }`}
                            >
                              {service.connected ? "Disconnect" : "Connect"}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Manual Data Import
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-md transition-colors">
                          Upload Data File
                        </button>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Supported formats: CSV, JSON, or Excel files from compatible devices
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Appearance Settings */}
              {activeTab === "appearance" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                    Customize Appearance
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Theme
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            theme === "light"
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setTheme("light")}
                        >
                          <div className="h-20 bg-white border border-gray-200 rounded-md mb-3 flex items-center justify-center">
                            <div className="w-12 h-6 bg-gray-100 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="light"
                              name="theme"
                              checked={theme === "light"}
                              onChange={() => setTheme("light")}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor="light" className="ml-2 block text-sm text-gray-900 dark:text-white">
                              Light Mode
                            </label>
                          </div>
                        </div>
                        
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            theme === "dark"
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setTheme("dark")}
                        >
                          <div className="h-20 bg-gray-800 border border-gray-700 rounded-md mb-3 flex items-center justify-center">
                            <div className="w-12 h-6 bg-gray-700 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="dark"
                              name="theme"
                              checked={theme === "dark"}
                              onChange={() => setTheme("dark")}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor="dark" className="ml-2 block text-sm text-gray-900 dark:text-white">
                              Dark Mode
                            </label>
                          </div>
                        </div>
                        
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            theme === "system"
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setTheme("system")}
                        >
                          <div className="h-20 bg-gradient-to-r from-white to-gray-800 border border-gray-200 rounded-md mb-3 flex items-center justify-center">
                            <div className="w-12 h-6 bg-gradient-to-r from-gray-100 to-gray-700 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="system"
                              name="theme"
                              checked={theme === "system"}
                              onChange={() => setTheme("system")}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor="system" className="ml-2 block text-sm text-gray-900 dark:text-white">
                              System Default
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Chart Color Scheme
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            chartColorScheme === "default"
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setChartColorScheme("default")}
                        >
                          <div className="flex space-x-1 mb-2">
                            <div className="w-6 h-6 bg-indigo-500 rounded"></div>
                            <div className="w-6 h-6 bg-rose-500 rounded"></div>
                            <div className="w-6 h-6 bg-amber-500 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="colorDefault"
                              name="chartColorScheme"
                              checked={chartColorScheme === "default"}
                              onChange={() => setChartColorScheme("default")}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor="colorDefault" className="ml-2 block text-sm text-gray-900 dark:text-white">
                              Default
                            </label>
                          </div>
                        </div>
                        
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            chartColorScheme === "pastel"
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setChartColorScheme("pastel")}
                        >
                          <div className="flex space-x-1 mb-2">
                            <div className="w-6 h-6 bg-blue-300 rounded"></div>
                            <div className="w-6 h-6 bg-pink-300 rounded"></div>
                            <div className="w-6 h-6 bg-yellow-300 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="colorPastel"
                              name="chartColorScheme"
                              checked={chartColorScheme === "pastel"}
                              onChange={() => setChartColorScheme("pastel")}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor="colorPastel" className="ml-2 block text-sm text-gray-900 dark:text-white">
                              Pastel
                            </label>
                          </div>
                        </div>
                        
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            chartColorScheme === "monochrome"
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setChartColorScheme("monochrome")}
                        >
                          <div className="flex space-x-1 mb-2">
                            <div className="w-6 h-6 bg-blue-900 rounded"></div>
                            <div className="w-6 h-6 bg-blue-600 rounded"></div>
                            <div className="w-6 h-6 bg-blue-300 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="colorMonochrome"
                              name="chartColorScheme"
                              checked={chartColorScheme === "monochrome"}
                              onChange={() => setChartColorScheme("monochrome")}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor="colorMonochrome" className="ml-2 block text-sm text-gray-900 dark:text-white">
                              Monochrome
                            </label>
                          </div>
                        </div>
                        
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            chartColorScheme === "colorblind"
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setChartColorScheme("colorblind")}
                        >
                          <div className="flex space-x-1 mb-2">
                            <div className="w-6 h-6 bg-blue-600 rounded"></div>
                            <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                            <div className="w-6 h-6 bg-green-700 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="colorColorblind"
                              name="chartColorScheme"
                              checked={chartColorScheme === "colorblind"}
                              onChange={() => setChartColorScheme("colorblind")}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor="colorColorblind" className="ml-2 block text-sm text-gray-900 dark:text-white">
                              Colorblind Friendly
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Data Display Density
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            dataDisplayDensity === "comfortable"
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setDataDisplayDensity("comfortable")}
                        >
                          <div className="h-16 w-32 border border-gray-200 dark:border-gray-700 rounded-md mb-2 flex flex-col p-2 space-y-2">
                            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="densityComfortable"
                              name="dataDisplayDensity"
                              checked={dataDisplayDensity === "comfortable"}
                              onChange={() => setDataDisplayDensity("comfortable")}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor="densityComfortable" className="ml-2 block text-sm text-gray-900 dark:text-white">
                              Comfortable
                            </label>
                          </div>
                        </div>
                        
                        <div
                          className={`border rounded-lg p-4 cursor-pointer ${
                            dataDisplayDensity === "compact"
                              ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                          onClick={() => setDataDisplayDensity("compact")}
                        >
                          <div className="h-16 w-32 border border-gray-200 dark:border-gray-700 rounded-md mb-2 flex flex-col p-1 space-y-1">
                            <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-1.5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-1.5 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                            <div className="h-1.5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="densityCompact"
                              name="dataDisplayDensity"
                              checked={dataDisplayDensity === "compact"}
                              onChange={() => setDataDisplayDensity("compact")}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <label htmlFor="densityCompact" className="ml-2 block text-sm text-gray-900 dark:text-white">
                              Compact
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Privacy Settings */}
              {activeTab === "privacy" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                    Privacy & Data Settings
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            Data Sharing for Service Improvement
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Allow anonymous data sharing to help improve our algorithms and services
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={dataSharing}
                            onChange={() => setDataSharing(!dataSharing)}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                      
                      <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
                        <p className="text-xs text-blue-700 dark:text-blue-300">
                          We never share personally identifiable information. Shared data is anonymized and aggregated.
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            Anonymous Usage Analytics
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Allow collection of anonymous usage data to improve user experience
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={anonymousAnalytics}
                            onChange={() => setAnonymousAnalytics(!anonymousAnalytics)}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                        </label>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Data Storage Duration
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="store1year"
                            name="storeHistoricalData"
                            type="radio"
                            checked={storeHistoricalData === "1year"}
                            onChange={() => setStoreHistoricalData("1year")}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          />
                          <label htmlFor="store1year" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                            Store data for 1 year
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="store2years"
                            name="storeHistoricalData"
                            type="radio"
                            checked={storeHistoricalData === "2years"}
                            onChange={() => setStoreHistoricalData("2years")}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          />
                          <label htmlFor="store2years" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                            Store data for 2 years
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="store5years"
                            name="storeHistoricalData"
                            type="radio"
                            checked={storeHistoricalData === "5years"}
                            onChange={() => setStoreHistoricalData("5years")}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          />
                          <label htmlFor="store5years" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                            Store data for 5 years
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="storeIndefinitely"
                            name="storeHistoricalData"
                            type="radio"
                            checked={storeHistoricalData === "indefinitely"}
                            onChange={() => setStoreHistoricalData("indefinitely")}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                          />
                          <label htmlFor="storeIndefinitely" className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                            Store data indefinitely
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium">
                        Download My Data
                      </button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Download a complete export of all your personal data
                      </p>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium">
                        Delete All My Data
                      </button>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Permanently delete all your data from our servers
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Advanced Settings */}
              {activeTab === "advanced" && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                    Advanced Settings
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Data Synchronization Frequency
                      </h3>
                      <div className="max-w-xs">
                        <select
                          id="syncFrequency"
                          value={syncFrequency}
                          onChange={(e) => setSyncFrequency(e.target.value)}
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        >
                          <option value="realtime">Real-time (when possible)</option>
                          <option value="hourly">Hourly</option>
                          <option value="daily">Daily</option>
                          <option value="manual">Manual only</option>
                        </select>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Determines how often we sync data from connected devices and services
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Calculation Priority
                      </h3>
                      <div className="max-w-xs">
                        <select
                          id="calculationPriority"
                          value={calculationPriority}
                          onChange={(e) => setCalculationPriority(e.target.value)}
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        >
                          <option value="accuracy">Accuracy (more compute intensive)</option>
                          <option value="balanced">Balanced</option>
                          <option value="speed">Speed (less compute intensive)</option>
                        </select>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Balance between prediction accuracy and calculation speed
                        </p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        API Access
                      </h3>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-4 mb-4">
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          <span className="font-medium">Your API Key:</span>
                        </p>
                        <div className="flex">
                          <input
                            type="text"
                            value="••••••••••••••••••••••••••••••"
                            readOnly
                            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                          />
                          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm rounded-r-md transition-colors">
                            Show
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          Use this key to access the HealthRhythm API from external applications
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm rounded-md transition-colors">
                          Regenerate API Key
                        </button>
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm rounded-md transition-colors">
                          API Documentation
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                        Data Export & Import
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm rounded-md transition-colors">
                          Export All Data
                        </button>
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm rounded-md transition-colors">
                          Import Data
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Save settings button */}
            <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-end">
                <button
                  onClick={handleSaveSettings}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}