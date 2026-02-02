// components/common/ChatWidget.tsx
"use client";

import { MessageCircle, Send, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatWidget() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-72 right-6 z-50 flex flex-col items-end gap-4"
        >


            {/* Expanded options (can be toggled) */}
            <div className="flex flex-col gap-3">
                <a
                    href="https://t.me/laaffic"
                    target="_blank"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0088cc] text-white shadow-lg hover:scale-110 transition-transform"
                >
                    <Send className="h-6 w-6" />
                </a>
                <a
                    href="https://wa.me/88017xxxxxxxx"
                    target="_blank"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
                >
                    <Phone className="h-6 w-6" />
                </a>
            </div>
          
        </motion.div>
    );
}