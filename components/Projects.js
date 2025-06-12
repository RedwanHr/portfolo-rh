import React from "react";
import userData from "@constants/data";
export default function Projects() {
return (
<section className="bg-white dark:bg-gray-800">
   <div className="max-w-6xl mx-auto py-20">
      <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left text-gray-700 dark:text-gray-100">
         Projects
      </h1>
   </div>
   {/* Project 1: Autonomous Driving AI */}
   <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 py-20 pb-40">
         <div className="p-6 dark:bg-gray-800 z-10">
            <h1 className="font-semibold text-2xl mb-2 text-gray-800 dark:text-white">
               Autonomous Driving AI for Trackmania
            </h1>
            <h2 className="text-gray-500 dark:text-gray-400">Course: Deep Learning | Computer Vision | PyTorch | 2024</h2>
            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
               Project Context
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
               This project focused on building an AI driver capable of playing the fast-paced racing game <em>Trackmania</em> entirely on its own. Alongside a fellow student, I developed a deep learning system using PyTorch and computer vision techniques that interprets visual input from the game in real-time and outputs driving commands like forward, left, or right.
            </p>
            <p className="text-gray-600 dark:text-gray-400 my-2">
               Our goal was to simulate real-world autonomous driving challenges within a controlled virtual environment. By training a convolutional neural network (CNN) on screenshots labeled with corresponding key presses, we taught the AI to recognize patterns in track layouts, curves, and obstacles—ultimately allowing it to complete races autonomously. The project highlights how game environments can serve as powerful sandboxes for experimenting with real-time deep learning, decision making, and computer vision systems.
            </p>
            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
               Technical Implementation
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
               <li><strong>Dataset Pipeline:</strong> Built automated image capture system with PyAutoGUI and OpenCV, collecting 1,000+ labeled screenshots synchronized with keyboard inputs (z/q/d)</li>
               <li><strong>Model Architecture:</strong> Evaluated ResNet34, EfficientNet-B0, and MobileNetV2 before selecting ResNet34 for its optimal balance of 94% accuracy and 8ms inference time</li>
               <li><strong>Training Process:</strong> Implemented FastAI's One Cycle Policy with learning rate finder (1e-4) and early stopping, achieving 97% validation accuracy</li>
               <li><strong>Augmentation Strategy:</strong> Customized transformations including perspective warp (max_warp=0.05) and lighting adjustments while excluding horizontal flips (non-realistic for driving)</li>
               <li><strong>Real-Time Integration:</strong> Developed prediction script with frame capture (PIL.ImageGrab) and keypress automation (keyboard lib) for seamless gameplay control</li>
            </ul>
            
            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
               Demonstration
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
               In this video, you can see the AI driving autonomously in Trackmania, processing game visuals and making steering decisions in real-time.
            </p>
            <div className="mt-4 mb-6 rounded-lg overflow-hidden">
               <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                     className="w-full h-96 rounded-lg border dark:border-gray-600"
                     src="https://www.youtube.com/embed/56eldtzQbXg" 
                     title="Trackmania Autonomous Driving Demo"
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen>
                  </iframe>
               </div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Video 1: Real-time demonstration of the AI completing a Trackmania course autonomously. 
                  The model processes game visuals at 60FPS and makes steering decisions (forward/left/right).
               </p>
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
               Key Achievements
            </h3>
            <div className="text-gray-600 dark:text-gray-400 my-2 space-y-2">
               <p>• Reduced prediction latency to <strong>12ms</strong> through model optimization, enabling real-time gameplay at 60FPS</p>
               <p>• Solved overfitting (initial 22% val/test gap) through strategic augmentation and layer unfreezing</p>
               <p>• Demonstrated practical AI integration by completing full game tracks autonomously</p>
            </div>
         </div>
         {/* Project 2: NLP Platform */}
         <div className="p-6 bg-white dark:bg-gray-800  z-10">
            <h1 className="font-semibold text-2xl mb-2 text-gray-800 dark:text-white">
               Advanced NLP Platform with Multi-Agent Framework
            </h1>
            <h2 className="text-gray-500 dark:text-gray-400">Course: Deep Learning | Natural Language Processing | RAG Systems | CrewAI | 2024</h2>
            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
               Project Context
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
               Developed a production-grade NLP platform that integrates Groq's cloud API with local Ollama LLMs, enabling users to dynamically switch between the two for answering questions. The system features document ingestion (PDF/audio), conversational memory, and CrewAI-based multi-agent orchestration. It achieved 92% accuracy on domain-specific queries by leveraging an innovative RAG pipeline powered by ChromaDB vector storage.
            </p>
            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
               Technical Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
               <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-white">Core Components</h4>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1 mt-2">
                     <li><strong>Streamlit</strong> interactive web interface</li>
                     <li><strong>Groq API</strong> (Llama3-8b) for low-latency inference</li>
                     <li><strong>Ollama</strong> local LLM fallback</li>
                     <li><strong>ChromaDB</strong> vector database with sentence-transformers</li>
                     <li><strong>CrewAI</strong> multi-agent framework</li>
                  </ul>
               </div>
               <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-white">Key Features</h4>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1 mt-2">
                     <li>PDF text extraction & vector embedding</li>
                     <li>Conversational memory (JSON persistence)</li>
                     <li>Speech-to-text via Whisper</li>
                     <li>Web search integration (Serper API)</li>
                     <li>Three specialized AI agents</li>
                  </ul>
               </div>
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
               Implementation Highlights
            </h3>
            <div className="space-y-4 mt-4">
               <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-white">1. Multi-Model RAG Pipeline</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                     Implemented hybrid retrieval using both Groq's API and local Ollama LLMs with shared ChromaDB vector store. 
                     The system dynamically selects context from uploaded PDFs (processed with PyPDF2) and conversation history 
                     (stored in memory.json) to generate accurate responses with source citations.
                  </p>
               </div>
               <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-white">2. CrewAI Agent Framework</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                     Designed three specialized agents:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                     <li><strong>Content Ingestion Agent:</strong> Processes PDFs into structured knowledge. This way our chatbot uses the given PDFs as a source.</li>
                     <li><strong>QA Agent:</strong> Handles contextual question answering. This agent is developed for creating QA, letting the user create a test exam or even the exam itself.</li>
                     <li><strong>Cheatsheet Agent:</strong> Generates one-page document summaries. This comes in handy after creating the QA test exam.</li>
                  </ul>
               </div>
               <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-800 dark:text-white">3. Voice Interface</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                     Added voice interaction capabilities using Streamlit's <code>st.audio</code> component for audio file handling. 
                     Users can upload audio files for transcription, which are then processed by the integrated Whisper STT model. This will be stored in the ChromaDB vector store for future reference and retrieval.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                     Integrated Whisper STT model for audio processing, enabling:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                     <li>Audio file upload transcription (WAV/MP3)</li>
                     <li>Automatic embedding of transcribed content</li>
                     <li>Real-time audio playback verification</li>
                  </ul>
               </div>
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
               System Demonstration
            </h3>
            <p className="text-gray-600 dark:text-gray-400 my-2">
               In the demo, we test our chatbot by uploading PDFs as reference material and an MP4 file for transcription, which returns the full podcast as text. We then use the summary agent to generate a one-page summary. For queries beyond its knowledge, the chatbot performs a web search and responds with sourced website references.
            </p>
            <div className="mt-4 mb-6 rounded-lg overflow-hidden">
               <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                     className="w-full h-96 rounded-lg border dark:border-gray-600"
                     src="https://www.youtube.com/embed/__CREnmwdeo" 
                     title="NLP Platform Demo"
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen>
                  </iframe>
               </div>
               <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Video: End-to-end demonstration showing PDF ingestion, voice query processing, and multi-agent collaboration.
                  The interface switches between Groq (cloud) and Ollama (local) models while maintaining conversation context.
               </p>
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">
               Technical Achievements
            </h3>
            <div className="text-gray-600 dark:text-gray-400 my-2 space-y-2">
               <p>•   Built an NLP platform using Groq and local Ollama models with document ingestion, memory, and CrewAI agents. A dropdown lets users switch between Groq and Ollama for responses.</p>
               <p>• Achieved fast response time for complex queries through optimized ChromaDB indexing</p>
               <p>• Implemented context-aware conversation handling with 20-message rolling window memory</p>
               <p>• Developed specialized agents that improved answer accuracy for domain-specific queries</p>
            </div>
            
         </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900">
               <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 py-20 pb-40">
                  <div className="p-6 dark:bg-gray-800   z-10">
                     <h1 className="font-semibold text-2xl mb-2 text-gray-800 dark:text-white">
                        AI-Assisted ANPR Monitoring System
                     </h1>
                     <h2 className="text-gray-500 dark:text-gray-400">
                        Course: Project 4.0 | IoT & Embedded Systems | AI | React Website | Team Project | 2025
                     </h2>
                     <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">Overview</h3>
                     <p className="text-gray-600 dark:text-gray-400 my-2">
                        In partnership with <strong>Cipal Schaubroeck</strong>, a Belgian leader in license plate recognition, 
                        our 6-person team built an advanced monitoring system for ANPR cameras. 
                        My role focused on designing and connecting a Raspberry Pi to detect and report electrical issues directly from the camera’s power box.
                     </p>
                     <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">Promotional Video</h3>
                     <div className="my-4">
                        <video
                           controls
                           className="w-full rounded-lg shadow-md"
                           poster="/thumbnail.jpg" // Optional preview image
                           >
                           <source src="/Aitris-promotional-video.mp4" type="video/mp4" />
                           Your browser does not support the video tag.
                        </video>
                     </div>
                     <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">My Role: Raspberry Pi Integration</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 dark:bg-gray-700 rounded-lg">
                           <h4 className="font-medium text-gray-800 dark:text-white">Hardware & Monitoring</h4>
                           <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1 mt-2">
                              <li>Installed a Raspberry Pi inside the ANPR camera’s electrical box for on-site monitoring</li>
                              <li>Captured electrical current data to detect drops and potential fuse failures</li>
                              <li>Connected an infrared camera for visual fuse inspection - even in the dark</li>
                              <li>Enabled remote reboot capability to solve internet issues without physical access</li>
                           </ul>
                        </div>
                        <div className="p-4 dark:bg-gray-700 rounded-lg">
                           <h4 className="font-medium text-gray-800 dark:text-white">Communication & UI</h4>
                           <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-1 mt-2">
                              <li>Linked the Raspberry Pi to our secure backend via TailScale for live data streaming</li>
                              <li>Collaborated on a React-based interface to display live camera and sensor feeds</li>
                           </ul>
                        </div>
                     </div>
                     <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">How It Works</h3>
                     <div className="space-y-4 mt-4">
                        <div className="p-4  dark:bg-gray-700 rounded-lg">
                           <h4 className="font-medium text-gray-800 dark:text-white">1. Smart Fuse Monitoring</h4>
                           <p className="text-gray-600 dark:text-gray-400 mt-2">
                              The Raspberry Pi collects current data and camera footage. If a fuse blows, an AI model running on the backend sends an instant notification to our dashboard.
                           </p>
                        </div>
                        <div className="p-4 dark:bg-gray-700 rounded-lg">
                           <h4 className="font-medium text-gray-800 dark:text-white">2. Remote Troubleshooting</h4>
                           <p className="text-gray-600 dark:text-gray-400 mt-2">
                              Field technicians can view the fuse status remotely and even trigger a safe reboot of the system—no need for a site visit.
                           </p>
                        </div>
                     </div>
                     <h3 className="mt-6 text-xl font-medium text-gray-800 dark:text-white">What I Learned</h3>
                     <div className="text-gray-600 dark:text-gray-400 my-2 space-y-2">
                        <p>• Hands-on experience connecting hardware (Raspberry Pi + sensors + camera) to cloud services</p>
                        <p>• Built secure, real-time data flows using TailScale</p>
                        <p>• Worked closely with teammates to integrate live data into the UI</p>
                        <p>• Delivered a working hardware-software prototype in just a few weeks</p>
                     </div>
                  </div>
               </div>
            </div>
   </div>
</section>
);
}