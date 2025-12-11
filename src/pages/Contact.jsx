import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import axiosInstance from "../../api";
import FadeIn from "../effects/FadeIn";
import SlideIn from "../effects/SlideIn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/api/contact", formData);
      alert("Thank you for your message! We will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "Salt Brook School, Tuibuong, Churachandpur, Manipur.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 8798539293",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "info.sbsccpur@gmail.com",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/40 via-white to-gray-50 pointer-events-none" />
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] bg-green-100/60 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn delay={0}>
            <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.20em] text-green-700">
              Contact
            </span>
          </FadeIn>

          <FadeIn delay={0.04}>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-[1.15] text-gray-900 tracking-tight">
              Contact Us
            </h1>
          </FadeIn>

          <FadeIn delay={0.04}>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed font-light">
              Have a question about admissions, academics, or school life? Reach
              out to us — we&apos;re happy to help you with any queries you may
              have.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SlideIn direction="up" delay={0.04}>
              <div>
                <h2 className="text-3xl font-light mb-8 text-black">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="+91 8837368736"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors"
                      placeholder="Inquiry about admissions"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-700/90 text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </SlideIn>

            {/* Contact Information + Map */}
            <SlideIn direction="up" delay={0.04}>
              <div>
                <h2 className="text-3xl font-light mb-8 text-black">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <SlideIn
                      key={info.title}
                      direction="up"
                      delay={0.02 * (index + 1)}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-700">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-black mb-1 uppercase tracking-wide">
                            {info.title}
                          </h3>
                          <p className="text-gray-500 text-sm whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </SlideIn>
                  ))}
                </div>

                {/* Map */}
                <SlideIn direction="up" delay={0.04}>
                  <div className="mt-12">
                    <h3 className="text-lg font-medium mb-4 text-black">
                      Location
                    </h3>
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                      <iframe
                        title="Salt Brook School Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.0386456374932!2d93.7074139822243!3d24.358690353513623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374eb30b6038b6a5%3A0x202a16e2a87de77b!2sSalt%20Brook%20School%2C%20Churachandpur%2C%20Manipur%20795128!5e1!3m2!1sen!2sin!4v1765195348435!5m2!1sen!2sin"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-64 md:h-80"
                        style={{ border: 0 }}
                        allowFullScreen
                      />
                    </div>
                  </div>
                </SlideIn>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
