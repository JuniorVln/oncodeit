import { motion } from 'framer-motion';
import { useState, useId } from 'react';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
}

export function Tabs({ tabs, defaultTab }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);
    const tabsId = useId();

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (index + 1) % tabs.length;
            setActiveTab(tabs[nextIndex].id);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (index - 1 + tabs.length) % tabs.length;
            setActiveTab(tabs[prevIndex].id);
        }
    };

    return (
        <div className="w-full">
            {/* Tab List */}
            <div
                role="tablist"
                aria-label="Categorias de serviços"
                className="mx-auto mb-12 flex w-fit rounded-lg border border-white/10 bg-white/5 p-1 backdrop-blur-sm"
            >
                {tabs.map((tab, index) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            role="tab"
                            id={`${tabsId}-tab-${tab.id}`}
                            aria-selected={isActive}
                            aria-controls={`${tabsId}-panel-${tab.id}`}
                            tabIndex={isActive ? 0 : -1}
                            onClick={() => setActiveTab(tab.id)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className={`relative rounded-md px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-neon/50 ${isActive
                                    ? 'text-graphite-950'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId={`${tabsId}-active-tab`}
                                    className="absolute inset-0 rounded-md bg-neon"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Tab Panels */}
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    role="tabpanel"
                    id={`${tabsId}-panel-${tab.id}`}
                    aria-labelledby={`${tabsId}-tab-${tab.id}`}
                    hidden={activeTab !== tab.id}
                    className="focus:outline-none"
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
}
