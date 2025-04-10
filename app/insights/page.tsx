// app/insights/page.tsx
"use client";

import { useState } from "react";

import { useUser } from "@clerk/nextjs";
import Sidebar from "@/components /Sidebar";
export default function Insights() {
  const { user } = useUser();
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedInsightType, setSelectedInsightType] = useState("performance");

  // Placeholder data for pattern insights
  const patternInsights = [
    {
      id: 1,
      title: "Morning Productivity Peak",
      description:
        "Your mental energy consistently peaks between 9-11 AM, making this the optimal time for demanding cognitive tasks.",
      score: 92,
      recommendation:
        "Schedule your most challenging work during mid-morning hours.",
      icon: "💡",
      impactLevel: "high",
    },
    {
      id: 2,
      title: "Afternoon Exercise Benefit",
      description:
        "Physical activities performed between 4-6 PM show 27% better performance metrics compared to morning workouts.",
      score: 87,
      recommendation: "Plan your workouts for late afternoon when possible.",
      icon: "🏋️‍♀️",
      impactLevel: "medium",
    },
    {
      id: 3,
      title: "Sleep-Performance Correlation",
      description:
        "Days following 7+ hours of sleep show a 34% improvement in all performance metrics compared to days after less than 6 hours.",
      score: 89,
      recommendation:
        "Prioritize sleep consistency to maintain optimal performance.",
      icon: "😴",
      impactLevel: "high",
    },
    {
      id: 4,
      title: "Creative Flow State Pattern",
      description:
        "Your creative performance metrics peak in the early afternoon hours, particularly after physical activity.",
      score: 82,
      recommendation:
        "Schedule creative tasks for early afternoon, ideally after light exercise.",
      icon: "🎨",
      impactLevel: "medium",
    },
    {
      id: 5,
      title: "Weekly Energy Cycle",
      description:
        "Your energy levels follow a consistent pattern, with peaks on Tuesday and Wednesday, and a natural dip on Friday.",
      score: 78,
      recommendation:
        "Plan high-intensity tasks for mid-week and recovery activities for Friday.",
      icon: "📊",
      impactLevel: "medium",
    },
  ];

  // Placeholder data for performance trends
  const performanceTrends = {
    // Data for physical, mental, emotional trends over time
    physical: [65, 68, 62, 70, 72, 75, 71, 73, 76, 78, 75, 80],
    mental: [72, 75, 80, 78, 76, 74, 79, 82, 84, 80, 86, 88],
    emotional: [60, 65, 62, 70, 72, 68, 74, 76, 75, 80, 78, 82],
    dates: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  // Placeholder data for biorhythm correlation data
  const correlationData = [
    { factor: "Sleep Quality", correlation: 0.82, impact: "high" },
    { factor: "Exercise Frequency", correlation: 0.76, impact: "high" },
    { factor: "Work Hours", correlation: -0.65, impact: "medium" },
    { factor: "Screen Time", correlation: -0.58, impact: "medium" },
    { factor: "Outdoor Time", correlation: 0.54, impact: "medium" },
    { factor: "Social Interaction", correlation: 0.48, impact: "low" },
    { factor: "Meditation Practice", correlation: 0.45, impact: "low" },
    { factor: "Caffeine Intake", correlation: -0.42, impact: "low" },
  ];

  // Placeholder data for improvement recommendations
  const improvementRecommendations = [
    {
      id: 1,
      title: "Optimize Your Sleep Schedule",
      description:
        "Align your sleep times with your natural circadian rhythm by going to bed at 10:30 PM and waking up at 6:30 AM.",
      potential: "Could improve overall performance by up to 15%",
      implementation:
        "Gradually adjust your bedtime by 15 minutes earlier each day until you reach the target time.",
      category: "sleep",
    },
    {
      id: 2,
      title: "Strategic Exercise Timing",
      description:
        "Shift your workouts to the 4-6 PM window when your physical biorhythm typically peaks.",
      potential: "Could improve exercise performance by up to 22%",
      implementation:
        "Rearrange your schedule to accommodate afternoon workouts at least 3 days per week.",
      category: "exercise",
    },
    {
      id: 3,
      title: "Cognitive Task Batching",
      description:
        "Group similar mental tasks together during your peak mental clarity periods (9-11 AM).",
      potential: "Could improve productivity by up to 30%",
      implementation:
        "Block off your morning calendar for focused deep work sessions.",
      category: "productivity",
    },
    {
      id: 4,
      title: "Introduce Meditation Breaks",
      description:
        "Add short 5-minute meditation sessions between intense work periods to reset your mental energy.",
      potential: "Could reduce mental fatigue by up to 25%",
      implementation:
        "Use a timer app to remind you to take meditation breaks every 90 minutes of work.",
      category: "mindfulness",
    },
  ];

  // Helper function to render the impact level badge
  const renderImpactBadge = (impact: string) => {
    let bgColor = "";
    let textColor = "";

    switch (impact) {
      case "high":
        bgColor = "bg-green-100 dark:bg-green-900/30";
        textColor = "text-green-800 dark:text-green-300";
        break;
      case "medium":
        bgColor = "bg-blue-100 dark:bg-blue-900/30";
        textColor = "text-blue-800 dark:text-blue-300";
        break;
      case "low":
        bgColor = "bg-yellow-100 dark:bg-yellow-900/30";
        textColor = "text-yellow-800 dark:text-yellow-300";
        break;
      default:
        bgColor = "bg-gray-100 dark:bg-gray-800";
        textColor = "text-gray-800 dark:text-gray-300";
    }

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
      >
        {impact.charAt(0).toUpperCase() + impact.slice(1)} Impact
      </span>
    );
  };

  // Helper function to render correlation bar
  const renderCorrelationBar = (correlation: number) => {
    const absCorrelation = Math.abs(correlation);
    const width = Math.round(absCorrelation * 100);
    const isPositive = correlation >= 0;

    return (
      <div className="flex items-center">
        {!isPositive && (
          <div className="w-20 text-right pr-2">
            <span className="text-red-600 dark:text-red-400 text-sm">
              Negative
            </span>
          </div>
        )}
        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${
              isPositive ? "bg-green-500" : "bg-red-500"
            }`}
            style={{ width: `${width}%` }}
          ></div>
        </div>
        {isPositive && (
          <div className="w-20 pl-2">
            <span className="text-green-600 dark:text-green-400 text-sm">
              Positive
            </span>
          </div>
        )}
      </div>
    );
  };

  // Helper function to determine recommendation category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "sleep":
        return "😴";
      case "exercise":
        return "🏋️‍♀️";
      case "productivity":
        return "⚡";
      case "mindfulness":
        return "🧘‍♂️";
      default:
        return "📝";
    }
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
              Biorhythm Insights & Analysis
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Discover patterns and optimize your daily performance based on
              your personal data
            </p>
          </div>

          {/* Time period selector */}
          <div className="mb-6 flex flex-wrap justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => setSelectedPeriod("week")}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    selectedPeriod === "week"
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  } border border-gray-200 dark:border-gray-600`}
                >
                  Week
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPeriod("month")}
                  className={`px-4 py-2 text-sm font-medium ${
                    selectedPeriod === "month"
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  } border-t border-b border-gray-200 dark:border-gray-600`}
                >
                  Month
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPeriod("quarter")}
                  className={`px-4 py-2 text-sm font-medium ${
                    selectedPeriod === "quarter"
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  } border border-gray-200 dark:border-gray-600`}
                >
                  Quarter
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPeriod("year")}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    selectedPeriod === "year"
                      ? "bg-indigo-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  } border border-gray-200 dark:border-gray-600`}
                >
                  Year
                </button>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedInsightType("performance")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedInsightType === "performance"
                    ? "bg-indigo-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
                }`}
              >
                Performance Trends
              </button>
              <button
                onClick={() => setSelectedInsightType("patterns")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedInsightType === "patterns"
                    ? "bg-indigo-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
                }`}
              >
                Pattern Insights
              </button>
              <button
                onClick={() => setSelectedInsightType("recommendations")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  selectedInsightType === "recommendations"
                    ? "bg-indigo-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
                }`}
              >
                Recommendations
              </button>
            </div>
          </div>

          {/* Performance Trends Content */}
          {selectedInsightType === "performance" && (
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Biorhythm Performance Trends
                </h2>

                {/* Simple trend visualization (would be replaced with Recharts in a real implementation) */}
                <div className="h-80 w-full mb-4">
                  <div className="h-64 w-full mb-2 relative">
                    {/* Chart grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-full h-px bg-gray-200 dark:bg-gray-700"
                        ></div>
                      ))}
                    </div>

                    {/* Chart lines */}
                    <div className="absolute inset-0 flex">
                      {performanceTrends.dates.map((date, index) => {
                        const physicalHeight =
                          (performanceTrends.physical[index] / 100) * 100;
                        const mentalHeight =
                          (performanceTrends.mental[index] / 100) * 100;
                        const emotionalHeight =
                          (performanceTrends.emotional[index] / 100) * 100;

                        return (
                          <div
                            key={index}
                            className="flex-1 flex flex-col justify-end items-center"
                          >
                            {/* Data points */}
                            <div className="relative w-full h-full">
                              {/* Physical line */}
                              <div
                                className="absolute w-2 h-2 rounded-full bg-indigo-500 transform -translate-x-1"
                                style={{ bottom: `${physicalHeight}%` }}
                              ></div>

                              {/* Mental line */}
                              <div
                                className="absolute w-2 h-2 rounded-full bg-rose-500 transform -translate-x-1"
                                style={{ bottom: `${mentalHeight}%` }}
                              ></div>

                              {/* Emotional line */}
                              <div
                                className="absolute w-2 h-2 rounded-full bg-amber-500 transform -translate-x-1"
                                style={{ bottom: `${emotionalHeight}%` }}
                              ></div>

                              {/* Connect lines (simplified) */}
                              {index < performanceTrends.dates.length - 1 && (
                                <>
                                  <div
                                    className="absolute h-px bg-indigo-500"
                                    style={{
                                      bottom: `${physicalHeight}%`,
                                      left: "50%",
                                      width: "100%",
                                    }}
                                  ></div>
                                  <div
                                    className="absolute h-px bg-rose-500"
                                    style={{
                                      bottom: `${mentalHeight}%`,
                                      left: "50%",
                                      width: "100%",
                                    }}
                                  ></div>
                                  <div
                                    className="absolute h-px bg-amber-500"
                                    style={{
                                      bottom: `${emotionalHeight}%`,
                                      left: "50%",
                                      width: "100%",
                                    }}
                                  ></div>
                                </>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Chart labels */}
                  <div className="flex justify-between">
                    {performanceTrends.dates.map((date, index) => (
                      <div
                        key={index}
                        className="text-xs text-gray-500 dark:text-gray-400"
                      >
                        {date}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4 space-x-6">
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-indigo-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Physical
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-rose-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Mental
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="h-3 w-3 bg-amber-500 rounded-full mr-2"></span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Emotional
                    </span>
                  </div>
                </div>
              </div>

              {/* Correlations section */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Performance Correlation Factors
                </h2>

                <div className="space-y-6">
                  {correlationData.map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item.factor}
                          </span>
                          {renderImpactBadge(item.impact)}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {Math.abs(item.correlation).toFixed(2)}
                        </span>
                      </div>
                      {renderCorrelationBar(item.correlation)}
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="font-medium text-blue-700 dark:text-blue-400 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    AI Insight
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    Sleep quality shows the strongest correlation with your
                    performance metrics. Over the past {selectedPeriod}, your
                    mental performance has improved by 14%, which correlates
                    strongly with your recent improvements in sleep consistency
                    and exercise frequency.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Pattern Insights Content */}
          {selectedInsightType === "patterns" && (
            <div className="space-y-6">
              {patternInsights.map((insight) => (
                <div
                  key={insight.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border-l-4 border-indigo-500"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-2xl mr-4">
                      {insight.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {insight.title}
                        </h3>
                        <div className="flex items-center">
                          <div className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded text-sm font-medium">
                            Confidence: {insight.score}%
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {insight.description}
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <div>{renderImpactBadge(insight.impactLevel)}</div>
                        <div className="text-sm text-indigo-600 dark:text-indigo-400">
                          <span className="font-medium">Recommendation:</span>{" "}
                          {insight.recommendation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
                  Pattern Detection Methodology
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our AI analyzes your biorhythm data using advanced pattern
                  recognition algorithms to identify correlations between your
                  activities, environmental factors, and performance metrics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Data Collection
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Continuous monitoring of biometric data, activity
                      tracking, and environmental factors.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Pattern Analysis
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Machine learning algorithms identify recurring patterns
                      and correlations in your data.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Insight Generation
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Insights are created based on statistically significant
                      patterns with confidence scores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recommendations Content */}
          {selectedInsightType === "recommendations" && (
            <div className="space-y-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-indigo-800 dark:text-indigo-300">
                      AI-Generated Optimization Recommendations
                    </h3>
                    <p className="text-indigo-700 dark:text-indigo-400 mt-1">
                      These personalized recommendations are based on your
                      unique biorhythm patterns and identified areas for
                      potential improvement. Each suggestion is designed to help
                      you optimize your daily routines for peak performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {improvementRecommendations.map((rec) => (
                  <div
                    key={rec.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 text-2xl mr-4">
                        {getCategoryIcon(rec.category)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {rec.title}
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                          {rec.description}
                        </p>
                        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                          <p className="text-sm text-green-700 dark:text-green-400">
                            <span className="font-medium">
                              Potential Impact:
                            </span>{" "}
                            {rec.potential}
                          </p>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-medium">Implementation:</span>{" "}
                            {rec.implementation}
                          </p>
                        </div>
                        <div className="mt-4">
                          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                            Add to Plan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
                  Your Optimization Progress
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Exercise Timing Adherence
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        42%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: "42%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Cognitive Task Batching
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        85%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Meditation Integration
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        23%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: "23%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="inline-flex items-center px-4 py-2 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                    View Detailed Progress Report
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
          )}

          {/* Export report button */}
          <div className="mt-8 flex justify-center">
            <button className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Export Insights Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
