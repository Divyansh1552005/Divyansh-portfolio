import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const Github_heatmap = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] font-sans flex items-center justify-center min-h-[50vh]">
            <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Github Activity
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 mt-4 rounded-full mx-auto"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-full flex justify-center"
                >
                    <div className="w-full max-w-full flex flex-col items-end">
                        <div
                            className="w-full overflow-x-auto pb-4 custom-scrollbar"
                        >
                            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                  height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: #0d0d0d;
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #333333;
                  border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #444444;
                }
                /* Firefox */
                .custom-scrollbar {
                  scrollbar-width: thin;
                  scrollbar-color: #333333 #0d0d0d;
                }
              `}</style>
                            <div className="flex justify-start min-w-max">
                                <div className="bg-[#0d0d0d] p-6 md:p-8 rounded-2xl border border-gray-800/50">
                                    <GitHubCalendar
                                        username="Divyansh1552005"
                                        colorScheme="dark"
                                        fontSize={14}
                                        blockSize={14}
                                        blockMargin={5}
                                        theme={{
                                            dark: ['#161b22', '#1e3a8a', '#1d4ed8', '#2563eb', '#3b82f6'],
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-2 pr-2">
                            <a
                                href="https://github.com/Divyansh1552005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
                            >
                                Follow me on GitHub <FiGithub size={16} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Github_heatmap;
