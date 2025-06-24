import React from 'react';

interface ResearchPaperProps {
  title: string;
  authors: string;
  publicationDetails: string;
  doi?: string;
  link?: string;
  abstract: string;
  keywords: string;
  publishedDate: string;
}

const ResearchPaper: React.FC<ResearchPaperProps> = ({
  title,
  authors,
  publicationDetails,
  doi,
  link,
  abstract,
  keywords,
  publishedDate
}) => (
  <div className="glass-card p-6 rounded-lg mb-6">
    <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-2"><strong>Authors:</strong> {authors}</p>
    <p className="text-sm text-gray-600 mb-2"><strong>Published:</strong> {publishedDate}</p>
    <p className="text-sm text-gray-600 mb-2"><strong>Publication Details:</strong> {publicationDetails}</p>
    {doi && <p className="text-sm text-gray-600 mb-2"><strong>DOI:</strong> <a href={doi} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{doi}</a></p>}
    {link && <p className="text-sm text-gray-600 mb-2"><strong>Link:</strong> <a href={link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{link}</a></p>}
    <p className="text-sm text-gray-700 mt-4 mb-4"><strong>Abstract:</strong> {abstract}</p>
    <p className="text-sm text-gray-600"><strong>Keywords:</strong> {keywords}</p>
  </div>
);

const researchPapersData: ResearchPaperProps[] = [
  {
    title: "Harnessing the Power of Artificial Intelligence in Clinical Trials and Disease Modeling: Challenges and Future Directions",
    authors: "Isham Kalappurackal Mansoor, Mansoor Veliyathnadu Ebrahim",
    publicationDetails: "Journal of Technology and Society (JTS), Vol. 4, Issue 1", // Assuming JTS based on DOI format
    doi: "https://doi.org/10.47941/jts.2657",
    abstract: "Purpose: This article explores the potential of artificial intelligence (AI) to transform clinical trials and disease modeling, focusing on how AI can enhance healthcare efficiency, precision, and personalization.\n\nMethodology: The study involves reviewing existing literature and conducting detailed investigations of various AI models, ranging from basic machine learning algorithms to sophisticated deep learning models like convolutional neural networks (CNNs), recurrent neural networks (RNNs), generative adversarial networks (GANs), and transformer models.\n\nFindings: Our analysis demonstrates that AI algorithms can significantly reduce human screening time, improve risk stratification, and provide more accurate predictions compared to conventional techniques [17], [18]. However, these benefits are accompanied by challenges, including data quality issues, algorithmic bias, understanding the \"black box\" nature of AI tools, regulatory constraints, and patient privacy and consent concerns.\n\nUnique Contribution to Theory, Practice, and Policy: The article highlights AI's enormous potential to revolutionize clinical research. It recommends that successful implementation requires collaboration with the medical community to ensure ethical and responsible use, addressing the challenges of data quality, transparency, regulatory compliance, and patient rights.",
    keywords: "Artificial Intelligence, Clinical Trials, Disease Modeling, Machine Learning, Precision Medicine, Risk Stratification, Personalized Medicine, Efficiency, Ethical Challenges, Privacy, Prediction.",
    publishedDate: "2025-04-18",
  },
  // Add more papers here as needed
];

const ResearchPapersSection = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-display font-bold mb-6">Research Papers</h2>
      {researchPapersData.map((paper, index) => (
        <ResearchPaper key={index} {...paper} />
      ))}
    </div>
  );
};

export default ResearchPapersSection; 