import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ExternalLink, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResearchPublications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const publication = [
    {
      title:
        "Harnessing the Power of Artificial Intelligence in Clinical Trials and Disease Modeling: Challenges and Future Directions",
      authors: ["Isham Kalappurackal Mansoor", "Mansoor Veliyathnadu Ebrahim"],
      publishedDate: "2025-04-18",
      journal: "Journal of Technology and Society (JTS)",
      volume: "Vol. 4, Issue 1",
      doi: "https://doi.org/10.47941/jts.2657",
      abstract:
        'Purpose: This article explores the potential of artificial intelligence (AI) to transform clinical trials and disease modeling, focusing on how AI can enhance healthcare efficiency, precision, and personalization. Methodology: The study involves reviewing existing literature and conducting detailed investigations of various AI models, ranging from basic machine learning algorithms to sophisticated deep learning models like convolutional neural networks (CNNs), recurrent neural networks (RNNs), generative adversarial networks (GANs), and transformer models. Findings: Our analysis demonstrates that AI algorithms can significantly reduce human screening time, improve risk stratification, and provide more accurate predictions compared to conventional techniques [17], [18]. However, these benefits are accompanied by challenges, including data quality issues, algorithmic bias, understanding the "black box" nature of AI tools, regulatory constraints, and patient privacy and consent concerns. Unique Contribution to Theory, Practice, and Policy: The article highlights AI\'s enormous potential to revolutionize clinical research. It recommends that successful implementation requires collaboration with the medical community to ensure ethical and responsible use, addressing the challenges of data quality, transparency, regulatory compliance, and patient rights.',
      keywords: [
        "Artificial Intelligence",
        "Clinical Trials",
        "Disease Modeling",
        "Machine Learning",
        "Precision Medicine",
        "Risk Stratification",
        "Personalized Medicine",
        "Efficiency",
        "Ethical Challenges",
        "Privacy",
        "Prediction",
      ],
    },
    {
      title:"Transforming Financial Planning with Generative AI: A Framework for Proactive and Adaptive Strategies",
      authors: ["Isham Kalappurackal Mansoor", "Mansoor Veliyathnadu Ebrahim"],
      publishedDate: "2025-04-18",
      journal: "Journal of Technology and Society (JTS)",
      volume: "Vol. 7, Issue 2",
      doi: "https://doi.org/10.47941/jts.2652",
      abstract:
        "This paper explores the transformative potential of Generative AI in financial planning, addressing limitations of traditional approaches such as inflexibility, lack of scenario-based planning, and short-term focus. The research highlights how AI systems can process vast amounts of financial data to identify patterns and correlations, enabling personalized financial strategies and proactive risk management. Through analysis of current financial workflows and implementation challenges, we demonstrate that Generative AI can significantly reduce time spent on data consolidation and analysis while increasing planning accuracy through simulation capabilities. The paper presents a case study of an AI-driven financial planning assistant that creates comprehensive financial profiles from user documents. Despite challenges related to data security, privacy concerns, and algorithmic bias, we propose that with proper frameworks and ethical considerations, Generative AI has the potential to democratize financial planning, making it more accessible to everyone. This research contributes to understanding how AI technologies can enhance financial decision-making and foster greater financial inclusion and security.",
      keywords: [
        "Financial Planning",
        "Generative AI",
        "Personalized Finance",
        "Risk Management",
        "Scenario Modeling",
        "Proactive Planning",
      ],
    },
    {
      title:"The Significance of AI in Evidence-based Practice in Healthcare",
      authors: ["Isham Kalappurackal Mansoor", "Mansoor Veliyathnadu Ebrahim"],
      publishedDate: "2025-06-25",
      journal: "European Journal of Computer Science and Information Technology",
      volume: "Vol. 13, Issue 44",
      doi: "https://doi.org/10.37745/ejcsit.2013/vol13n44111",
      abstract:
        "This paper examines the transformative potential of Artificial Intelligence (AI) in enhancing evidence-based practice (EBP) within healthcare. By leveraging AI-driven clinical decision support systems, natural language processing, and advanced diagnostic tools, the study explores how these technologies can streamline the synthesis and application of medical evidence to improve clinical decision-making and patient outcomes. Through a comprehensive literature review and analysis of case studies, we highlight the significant impact of AI on reducing administrative burdens, minimizing diagnostic errors, and enabling personalized care. In addition to these benefits, the paper also addresses key challenges such as ethical concerns, technical limitations, and potential biases. The findings underscore the need for continued interdisciplinary collaboration and the development of transparent and adaptive AI systems to ensure that these innovations effectively complement and enhance clinical workflows.",
      keywords: [
        "Artificial Intelligence",
        "Clinical Decision Support",
        "Evidence-Based Practice",
        "Healthcare",
        "Clinical Data Analysis",
        "Deep Learning",
        "Natural Language Processing",
        "Reinforcement Learning",
      ],
    },
  ];

  const keywordVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section ref={ref} className="py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
      >
        <BookOpen className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
        <h2 className="text-xl sm:text-2xl font-display font-bold">
          Research Publications
        </h2>
      </motion.div>

      {publication.map((pub, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="perspective-1000 mb-10"
        >
          <div className="glass-card p-4 sm:p-8 rounded-xl shadow-2xl transform-gpu hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
            {/* Publication Header */}
            <div className="mb-4 sm:mb-6">
              <motion.h3
                className="text-lg sm:text-2xl font-display font-bold text-foreground mb-3 sm:mb-4 leading-tight"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {pub.title}
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <motion.div
                  className="flex items-center gap-2 text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span>{pub.authors.join(", ")}</span>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 text-muted-foreground"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span>
                    Published:{" "}
                    {new Date(pub.publishedDate).toLocaleDateString()}
                  </span>
                </motion.div>

                <motion.div
                  className="text-primary font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  {pub.journal}
                </motion.div>

                <motion.div
                  className="text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  {pub.volume}
                </motion.div>
              </div>
            </div>

            {/* Abstract */}
            <motion.div
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Abstract
              </h4>
              <p className="text-xs sm:text-sm text-foreground leading-relaxed text-justify">
                {pub.abstract}
              </p>
            </motion.div>

            {/* Keywords with Staggered Animation */}
            <motion.div
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Keywords
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {pub.keywords.map((keyword, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={keywordVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(var(--primary), 0.1)",
                    }}
                  >
                    {keyword}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* DOI Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Button asChild variant="outline" size="sm" className="group">
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-xs sm:text-sm">View Publication</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ResearchPublications;
