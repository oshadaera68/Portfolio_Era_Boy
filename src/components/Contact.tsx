import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Facebook, Youtube, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-32 bg-surface text-surface-text">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-accent font-mono text-sm uppercase tracking-widest mb-4 block">Get in Touch</span>
            <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-none text-surface-text">Let's <br /><span className="italic font-normal">Connect</span></h2>
            
            <div className="space-y-8">
              <a href="mailto:oshadaeranga919@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-surface-text/10 flex items-center justify-center group-hover:bg-surface-text group-hover:text-surface transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-surface-text/40">Email</p>
                  <p className="text-xl font-medium">oshadaeranga919@gmail.com</p>
                </div>
              </a>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Github, href: 'https://github.com/oshadaera68' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/oshada-eranga-wijerathna/' },
                  { icon: Facebook, href: 'https://www.facebook.com/oshada.eranga.39' },
                  { icon: Youtube, href: 'https://www.youtube.com/@ERAMUSICLK' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-surface-text/10 flex items-center justify-center hover:bg-surface-text hover:text-surface transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="glass bg-surface-text/5 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-surface-text/60 max-w-xs mx-auto">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm uppercase tracking-widest font-bold text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold flex justify-between">
                        Name
                        {errors.name && <span className="text-red-500 font-normal normal-case flex items-center gap-1"><AlertCircle size={10} /> {errors.name}</span>}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500' : 'border-surface-text/10'} py-3 focus:border-accent outline-none transition-colors text-surface-text`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold flex justify-between">
                        Email
                        {errors.email && <span className="text-red-500 font-normal normal-case flex items-center gap-1"><AlertCircle size={10} /> {errors.email}</span>}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-transparent border-b ${errors.email ? 'border-red-500' : 'border-surface-text/10'} py-3 focus:border-accent outline-none transition-colors text-surface-text`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-surface-text/10 py-3 focus:border-accent outline-none transition-colors text-surface-text"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold flex justify-between">
                      Message
                      {errors.message && <span className="text-red-500 font-normal normal-case flex items-center gap-1"><AlertCircle size={10} /> {errors.message}</span>}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full bg-transparent border-b ${errors.message ? 'border-red-500' : 'border-surface-text/10'} py-3 focus:border-accent outline-none transition-colors resize-none text-surface-text`}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-surface-text text-surface py-6 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-accent transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
