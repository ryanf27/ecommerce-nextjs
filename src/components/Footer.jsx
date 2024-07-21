import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaSpotify,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white py-12 mt-20">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Service
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="#support" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Support
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#payments" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Payments
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#delivery" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Delivery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#return" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Returns
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#contact" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Legal
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="/policies/legal-notice" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Imprint
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/policies/terms-of-service" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Terms and Conditions
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/policies/privacy-policy" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#cookies" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Privacy Settings
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Join Us Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Join us
            </h5>
            <ul className="space-y-2">
              <li>
                <Link href="/pages/partner-programm" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Affiliates
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pages/creators" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Creators
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pages/models" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Models
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/pages/service-jobs" legacyBehavior>
                  <a className="hover:text-gray-400 transition-colors duration-200">
                    Jobs
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
              Follow us
            </h5>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Impericon.de"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://twitter.com/impericon_de"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://www.instagram.com/impericon/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-600 transition-colors duration-200"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://www.youtube.com/user/ImpericonDE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-600 transition-colors duration-200"
              >
                <FaYoutube size={28} />
              </a>
              <a
                href="https://www.tiktok.com/@impericon.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                <FaTiktok size={28} />
              </a>

              <a
                href="https://open.spotify.com/user/impericon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="hover:text-green-500 transition-colors duration-200"
              >
                <FaSpotify size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Band Merch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
