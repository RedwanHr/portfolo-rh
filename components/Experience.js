import React from "react";

export default function Internship() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left text-gray-700 dark:text-gray-100">
          Internship Project
        </h1>
      </div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 py-20 pb-40">
          <div className="p-6 dark:bg-gray-800 z-10">
            <h1 className="font-semibold text-2xl mb-2 text-gray-800 dark:text-white">
              Sensor To Savior – Water Monitoring System
            </h1>
            <h2 className="text-gray-500 dark:text-gray-400">EpicData | (24/02 - 23/05) 2025</h2>

            

            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
              The Problem
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
              Catalonia faces an escalating water emergency, with rainfall 30-50% below 
              historical averages and reservoirs at dangerously low levels. While the regional 
              government's 310+ IoT sensors (piezometers, pluviometers, capacity and gauge sensors) generate 
              valuable data, it remains complex because the data are numerical sensor readings in CSV files and APIs. The next two figures illustrate the meta-data and sensor reading of the piezometer. This gives a clear example of the complexity of the data and how difficult it is to interpret.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-4 mb-6">

  {/* Image 1 - Example of raw sensor data */}
  <div className=" p-3 rounded-lg">
    <img 
      src="/Screenshot1.png" 
      alt="Example of raw CSV sensor data showing complex numerical readings"
      className="dark:border-gray-600"
    />
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
      Figure 1: Raw sensor meta-data in CSV format. the meta-data tells us more about the sensor, such as its location, type, and other attributes, but does not provide the actual readings.
    </p>
  </div>

  {/* Image 2 - Drought impact visualization */}
  <div className="p-3 rounded-lg">
    <img 
      src="/Screenshot2.png" 
      alt="Map showing drought conditions in Catalonia with low reservoir levels"
      className=" dark:border-gray-600"
    />
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
      Figure 2: Raw sensor reading. This shows the actual sensor readings, which are numerical values that need to be interpreted in the context of the sensor's meta-data.
      The readings are complex and require processing to extract meaningful insights.
    </p>
  </div>
</div>

            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
              The Goal
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
              This project aimed to develop a comprehensive data solution that would bridge the critical gap between Catalonia's complex water monitoring infrastructure and actionable policy decisions. The system needed to transform raw, fragmented sensor data - trapped in technical CSV files and APIs with inconsistent formats - into clear,combined , reliable insights for water management authorities. Using Microsoft Fabric as our foundation, we established an end-to-end pipeline that could handle the region's diverse IoT sensor network spanning piezometers, pluviometers, and reservoir monitoring devices.

            </p>
            

            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
              The Solution
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
              The solution was designed to meet three critical requirements: complete automation of data workflows from ingestion to visualization, rigorous standardization of measurements and timestamps across all data sources, and intuitive presentation through interactive Power BI dashboards. I built a complete end-to-end pipeline using Microsoft Fabric, transforming raw water data into 
              actionable insights. Key features included:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Layered processing via the Bronze–Silver–Gold Lakehouse architecture (Medallion Architecture)</li>
              <li>Integration of both historical (CSV) and live (API) data</li>
              <li>Interactive dashboards with insights on water levels, rainfall, and sensor coverage</li>
              <li>Time-series forecasting using ARIMA for predicting reservoir trends</li>
            </ul>

            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
              Technical Implementation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Core Technologies:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Microsoft Fabric (Lakehouse architecture)</li>
                  <li>PySpark & Notebooks for data processing</li>
                  <li>Power BI for data visualization</li>
                  <li>ARIMA for time-series modeling</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                  <li>Fully automated daily data refreshes</li>
                  <li>Star-schema data modeling for reporting</li>
                  <li>Bilingual processing (Spanish ↔ English)</li>
                  <li>Geospatial mapping of sensor activity</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
              Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
              This project shows how data engineering and BI analysts can help address real-world environmental issues. 
              The system empowers decision-makers with:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>Real-time visibility on water availability</li>
              <li>Early warning indicators for drought risk</li>
              <li>Reliable insights to support sustainable water policies</li>
            </ul>

            <div className="mt-8">
{/* Notice about dashboard availability */}
            <div className="flex items-center bg-yellow-100 dark:bg-yellow-900 rounded-md p-3 my-4">
              <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 8v4m0 4h.01" />
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <span className="text-sm text-yellow-800 dark:text-yellow-200">
                The interactive dashboard is only available on workdays between <b>9AM and 6PM</b> due to EpicData's limited Microsoft Fabric capacity.
              </span>
            </div>
<div className="mt-5">
  <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-4">Result: Interactive Dashboard</h3>
  <p className="text-gray-600 dark:text-gray-400 mb-4">
    Sounds interesting isn't it? You can explore the interactive dashboard I created for this project yourself down below. Press on 'Explore' to start exploring the dashboard.
  </p>
  <div className="relative w-full mb-12">
<iframe title="SensorToSavior - kopie" width="800" height="600" src="https://app.fabric.microsoft.com/view?r=eyJrIjoiODM0OWFlZWMtMWI1Ni00YjI0LWFjYWItODlmMTViMmMwNmVmIiwidCI6IjM0M2MzNWU2LWExMjItNDM1Zi1iZDFkLTQyNDFlOTA1MGY4OCIsImMiOjl9" frameborder="0" allowFullScreen="true"></iframe>  </div>
</div>


              <h4 className="font-medium text-gray-800 dark:text-white">Documentation:</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
    Download the full implementation report containing a 
    <br />
    realisation document, project-plans, and a self reflection:
  </p>
  <a 
    href="/Documentation_SensorToSavior.zip" 
    download
    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-200"
  >
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    Download Report (.Zip)
  </a>
            </div>
            {/* Azure OpenAI Training Section */}
            <h3 className="mt-10 text-xl font-medium text-gray-800 dark:text-white">
              Azure OpenAI Training
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
              As part of the internship, EpicData provided me with an official Microsoft-certified training focused on Azure OpenAI and its enterprise applications. This 4-day intensive training covered key concepts such as GPT fine-tuning, prompt engineering, deploying large language models (LLMs) securely in Azure, and integrating OpenAI services within business applications. It offered hands-on labs and real-world examples of how AI can transform data insights and operational efficiency.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This training helped deepen my understanding of secure AI implementation in cloud environments and expanded my skill set in natural language processing and enterprise AI integration.
            </p>
            <a 
              href="/MICROSOFT_AZOAI_1342517.pdf" 
              download
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-500 dark:hover:bg-green-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Certification PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
