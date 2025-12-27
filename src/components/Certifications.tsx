import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { name: "VT Hacks 13 Winner -- Best Hack Supporting Diversity & Inclusion", issueDate: "2025-09-15" },
  { name: "AWS Machine Learning Foundations", issueDate: "2025-06-17" },
  { name: "AWS Generative AI", issueDate: "2025-05-25" },
  { name: "AWS Cloud 101", issueDate: "2025-05-21" },
  { name: "Deep Learning Specialization (Coursera)", issueDate: "2024-03-31" },
  { name: "CompTIA IT Fundamentals+ (ITF+)", issueDate: "2023-05-17" },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
      >
        <Award className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
        <h2 className="text-xl sm:text-2xl font-display font-bold">Certifications</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.1 * idx }}
            className="glass-card p-4 sm:p-6 rounded-xl shadow-2xl transform-gpu hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{cert.name}</h3>
            <div className="text-sm text-muted-foreground">Issued: {new Date(cert.issueDate).toLocaleDateString()}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications; 