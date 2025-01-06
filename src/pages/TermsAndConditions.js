import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./shared-styles.css";
const TermsAndConditions = () => {
  const navigate = useNavigate();
  return (
    <div className="legal-page-container">
      <button 
                      className="back-button"
                      onClick={() => navigate(-1)}
                      aria-label="Go back"
                  >
                      <ArrowLeft size={24} />
                  </button>
      <h1>Terms and Conditions for Coder House</h1>
      <p><strong>Effective Date:</strong>1/01/2025</p>

      <p>
        Welcome to <strong>Coder House</strong>. By using our website and services, you
        agree to comply with and be bound by the following Terms and
        Conditions. Please review them carefully before accessing or using our
        services.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing and using the Coder House website or services, you
        acknowledge that you have read, understood, and agree to these Terms
        and Conditions. If you do not agree, please refrain from using our
        services.
      </p>

      <h2>2. Services Provided</h2>
      <p>
        Coder House provides offline campus recruitment training programs
        designed to prepare college students for job placements. Our services
        include training modules, mock tests, and guidance sessions. The
        content and scope of services are subject to change at our sole
        discretion.
      </p>

      <h2>3. User Responsibilities</h2>
      <ul>
        <li>You agree to use our services only for lawful purposes.</li>
        <li>You must not engage in activities that disrupt the functioning of
          our website or services.
        </li>
        <li>You are responsible for maintaining the confidentiality of any
          login credentials associated with your account.
        </li>
      </ul>

      <h2>4. Payment and Refund Policy</h2>
      <ul>
        <li>Payment for training courses must be made in full before accessing
          the services.
        </li>
        <li>Refunds will be provided only as per the guidelines specified in
          the refund policy section of the website.
        </li>
        <li>Late payments may result in suspension or cancellation of access to
          services.
        </li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All content, materials, logos, and trademarks on the Coder House
        website are owned by or licensed to us. You may not reproduce,
        distribute, or create derivative works without explicit permission from
        Coder House.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        Coder House will not be liable for:
        <ul>
          <li>Any indirect, incidental, or consequential damages arising from
            the use of our services.
          </li>
          <li>Delays or interruptions in service due to circumstances beyond
            our control.
          </li>
        </ul>
      </p>

      <h2>7. Changes to Terms</h2>
      <p>
        We reserve the right to update or modify these Terms and Conditions at
        any time. Changes will be effective immediately upon posting on the
        website. Continued use of our services constitutes your acceptance of
        the modified terms.
      </p>

      <h2>8. Termination of Services</h2>
      <p>
        We reserve the right to terminate or suspend your access to our
        services if we determine, in our sole discretion, that you have
        violated these Terms and Conditions.
      </p>

      <h2>9. Privacy Policy</h2>
      <p>
        Your use of Coder House is also governed by our Privacy Policy, which
        explains how we collect, use, and protect your personal information.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms will be resolved
        in the courts.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms and
        Conditions, please contact us at:
      </p>
      <ul>
        <li><strong>Email:</strong> coderhouseoptus@gmail.com</li>
        <li><strong>Phone:</strong>+91 99268 65740</li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;