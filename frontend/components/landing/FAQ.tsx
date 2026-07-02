"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is HirePilot built for?",
    answer:
      "HirePilot is designed for startups and companies that receive job applications directly in mailboxes like hiring@company.com, careers@company.com or jobs@company.com.",
  },
  {
    question: "Do I have to share my email password?",
    answer:
      "No. HirePilot uses Google and Microsoft OAuth. Your password is never stored or shared.",
  },
  {
    question: "Can HirePilot reject candidates automatically?",
    answer:
      "No. AI only assists by summarizing resumes, matching job descriptions and ranking applicants. Every hiring decision is made by your team.",
  },
  {
    question: "Can I connect multiple hiring mailboxes?",
    answer:
      "Yes. You can connect multiple hiring inboxes and manage them from one dashboard.",
  },
  {
    question: "Does it work only for software hiring?",
    answer:
      "No. HirePilot works for any hiring process where candidates apply through email.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Everything you need to know before connecting your hiring inbox.
          </p>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-slate-800 bg-slate-900 px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-white hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="pb-6 text-slate-400 leading-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}