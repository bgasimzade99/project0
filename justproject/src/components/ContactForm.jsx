import { useState } from "react";
import "../css/Contact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Gönderilen veri:", formData);

    // Burada API'ye gönderebilirsin
    // fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    alert("Message sent!");
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button className="contack" type="submit">Send</button>
    </form>
  );
}

export default ContactForm;