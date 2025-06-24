
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactInfo = ({ icon, label, value, link }: { icon: React.ReactNode, label: string, value: string, link?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex gap-4 items-start"
  >
    <div className="bg-primary/10 p-3 rounded-full text-primary">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-foreground">{label}</h3>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground">{value}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="font-display text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
          <div className="h-1 w-20 bg-accent mx-auto mt-8 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-1 space-y-8">
            <ContactInfo 
              icon={<Mail size={20} />} 
              label="Email" 
              value="ishamkmansoor@gmail.com" 
              link="mailto:ishamkmansoor@gmail.com" 
            />
            
            <ContactInfo 
              icon={<Phone size={20} />} 
              label="Phone" 
              value="(757) 505-5152"
              link="tel:+17575055152" 
            />
            
            <ContactInfo 
              icon={<MapPin size={20} />} 
              label="Location" 
              value="Chesapeake, Virginia, 23322" 
            />
            
            <ContactInfo 
              icon={<Linkedin size={20} />} 
              label="LinkedIn" 
              value="linkedin.com/in/isham-mansoor" 
              link="https://www.linkedin.com/in/isham-mansoor" 
            />
            
            <ContactInfo 
              icon={<Github size={20} />} 
              label="GitHub" 
              value="github.com/ishammansoor" 
              link="https://github.com/ishammansoor" 
            />
          </div>
          
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
