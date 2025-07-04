import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from "lucide-react";

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <MapPin className="text-primary" />,
      title: "Office Address",
      content: "IIT Bhubaneswar, Bhubaneswar, Odisha, 751013"
    },
    {
      icon: <Mail className="text-primary" />,
      title: "Email",
      content: "info@twinverse.in"
    },
    {
      icon: <Phone className="text-primary" />,
      title: "Phone",
      content: "+91 93326 31181 / +91 74798 44459"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/company/twinversetech",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/twinversetech",
      label: "Twitter"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/twinversetech",
      label: "Instagram"
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      url: "https://www.facebook.com/twinversetech",
      label: "Facebook"
    }
  ];

  return (
    <div>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              {item.icon}
            </div>
            <div>
              <h3 className="font-medium text-dark mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-medium text-dark mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* <div className="mt-10 bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h3 className="font-medium text-dark mb-4">Business Hours</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span className="text-gray-600">Monday - Friday:</span>
            <span className="font-medium">9:00 AM - 6:00 PM IST</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600">Saturday:</span>
            <span className="font-medium">10:00 AM - 2:00 PM IST</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-600">Sunday:</span>
            <span className="font-medium">Closed</span>
          </li>
        </ul>
      </div> */}
    </div>
  );
}
