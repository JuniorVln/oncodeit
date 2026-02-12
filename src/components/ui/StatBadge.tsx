import { motion } from 'framer-motion';

interface StatBadgeProps {
    value: string;
    label: string;
    delay?: number;
}

export function StatBadge({ value, label, delay = 0 }: StatBadgeProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.6 }}
            className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm"
        >
            <div className="text-3xl font-bold text-white sm:text-4xl">{value}</div>
            <div className="mt-1 text-sm text-gray-400">{label}</div>
        </motion.div>
    );
}
