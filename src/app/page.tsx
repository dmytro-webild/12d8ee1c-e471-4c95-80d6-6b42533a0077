"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Heart, Sparkles, Star, Tag } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="gradient-mesh"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Trust",
          id: "#trust",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=6ls7xa"
      logoAlt="Jai Maa Vaishno Ultrasound Centre Logo"
      brandName="Jai Maa Vaishno Ultrasound Centre"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogoBillboard
      background={{
        variant: "radial-gradient",
      }}
      logoText="Advanced Ultrasound Care With Compassion & Trust"
      description="Affordable, accurate, and patientfriendly ultrasound services with caring staff and modern technology. Every scan, every patient, treated with respect."
      buttons={[
        {
          text: "Book Your Appointment Now",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/african-employee-discusing-with-manager-sitting-desk-workplace-wearing-face-mask-against-covid19-diverse-group-business-people-working-communicating-together-creative-office-with-new_482257-10060.jpg"
      imageAlt="Pregnant woman getting an ultrasound scan with a compassionate doctor"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={false}
      imagePosition="right"
      title="About Jai Maa Vaishno Ultrasound Centre"
      description="At Jai Maa Vaishno, we are dedicated to providing state-of-the-art ultrasound diagnostics with a profound commitment to patient care. Our facility blends luxury standards with affordability, ensuring every patient receives accurate, timely, and compassionate service. We prioritize your comfort and trust, making your health journey a positive experience."
      tag="Our Commitment"
      tagIcon={Heart}
      bulletPoints={[
        {
          title: "Patient-Centric Approach",
          description: "Your comfort, dignity, and peace of mind are at the heart of everything we do, from scheduling to scan results.",
        },
        {
          title: "Advanced Technology",
          description: "Utilizing cutting-edge ultrasound equipment for precise and reliable diagnostic imaging.",
        },
        {
          title: "Experienced & Caring Staff",
          description: "Our team of certified sonographers and medical professionals are highly skilled and compassionate.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/nobody-waiting-room-with-front-desk-reception-wall-screen-tv-with-promotional-offer-private-practice-hopital-waiting-area-patients-with-doctor-appointments-modern-healthcare-clinic_482257-46743.jpg"
      imageAlt="Doctor consulting with a patient in a modern, clean medical office"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Outdated equipment",
          "Long wait times",
          "Unclear explanations",
          "Hidden charges",
        ],
      }}
      positiveCard={{
        items: [
          "State-of-the-art 3D/4D scans",
          "Quick appointments & reports",
          "Detailed, clear consultations",
          "Transparent, affordable pricing",
        ],
      }}
      title="Our Advanced Ultrasound Services"
      description="We offer a comprehensive range of diagnostic ultrasound services designed to meet diverse patient needs, combining precision with comfort."
      tag="Expert Care"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "99%",
          title: "Accuracy Rate",
          items: [
            "Precision diagnostics",
            "Reliable results",
          ],
        },
        {
          id: "m2",
          value: "24 Hrs",
          title: "Report Delivery",
          items: [
            "Fast turnaround",
            "Timely insights",
          ],
        },
        {
          id: "m3",
          value: "1000+",
          title: "Happy Patients",
          items: [
            "Positive experiences",
            "Compassionate care",
          ],
        },
      ]}
      title="Trusted Diagnostics, Exceptional Results"
      description="Our commitment to excellence is reflected in our unwavering standards for accuracy, patient satisfaction, and efficiency. We measure our success by your peace of mind."
      tag="Our Performance"
    />
  </div>

  <div id="trust" data-section="trust">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "National Medical Council",
        "Indian Association of Sonographers",
        "Healthcare Quality Forum",
        "Diagnostic Accreditation Board",
        "Local Health Alliance",
        "Patient Safety Institute",
        "Medical Research Group",
      ]}
      title="Our Trusted Partners & Affiliations"
      description="We collaborate with leading healthcare providers and are recognized by various medical bodies, reinforcing our commitment to quality and ethical practices."
      tag="Building Confidence"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Priya Sharma",
          role: "Expectant Mother",
          company: "Local Resident",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-having-videoconference_23-2147859235.jpg",
        },
        {
          id: "2",
          name: "Rajesh Kumar",
          role: "Family Head",
          company: "Community Member",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-holding-tablet-medium-shot_23-2148943518.jpg",
        },
        {
          id: "3",
          name: "Dr. Anjali Singh",
          role: "Referring Physician",
          company: "City Hospital",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-doctor-gp-white-medical-uniform-consult-male-patient-private-hospital-female-therapist-speak-talk-with-man-client-consultation-clinic_657921-863.jpg",
        },
        {
          id: "4",
          name: "Seema Devi",
          role: "Homemaker",
          company: "Local Resident",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224138.jpg",
        },
        {
          id: "5",
          name: "Akash Gupta",
          role: "Young Professional",
          company: "Tech Firm",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-pretty-medical-nurse-smiling-camera-hospital-office-wearing-blue-uniform-healthcare-practitioner-sitting-desk-using-computer-modern-clinic-looking-monitor-medicine_482257-15886.jpg",
        },
        {
          id: "6",
          name: "Meera Patel",
          role: "New Mother",
          company: "Local Resident",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/disappointed-young-doctor-female-physician-pointing-fingers-down-grimacing-with-dislike-disappro_1258-121767.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "5/5",
          label: "Patient Rating",
        },
        {
          value: "100%",
          label: "Care Satisfaction",
        },
        {
          value: "Trust",
          label: "Highly Recommended",
        },
      ]}
      title="Hear From Our Valued Patients"
      description="The stories of comfort, trust, and satisfaction from our patients speak volumes about our commitment to exceptional care. Read their experiences below."
      tag="Patient Stories"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Standard",
          badgeIcon: Tag,
          price: "₹999",
          subtitle: "Essential Diagnostic Scan",
          features: [
            "General abdomen scan",
            "Thyroid scan",
            "Report within 24 hrs",
            "Basic consultation",
          ],
        },
        {
          id: "premium",
          badge: "Popular",
          badgeIcon: Sparkles,
          price: "₹1999",
          subtitle: "Maternity & Advanced Scans",
          features: [
            "Pregnancy (2D, 3D/4D)",
            "Fetal anomaly scan",
            "Detailed report & consultation",
            "Priority scheduling",
          ],
        },
        {
          id: "family",
          badge: "Best Value",
          badgeIcon: Star,
          price: "₹2999",
          subtitle: "Comprehensive Family Package",
          features: [
            "Two advanced scans (any type)",
            "Additional follow-up consultation",
            "Digital report access",
            "Family discount on future scans",
          ],
        },
      ]}
      title="Affordable Ultrasound Packages"
      description="High-quality diagnostic imaging should be accessible to everyone. Explore our transparent and cost-effective pricing plans for various ultrasound services, designed with your budget in mind."
      tag="Transparent Pricing"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "How do I book an appointment?",
          content: "You can easily book an appointment through our website's 'Book Now' button, or by calling our reception directly during business hours. We recommend booking in advance to secure your preferred time slot.",
        },
        {
          id: "faq2",
          title: "What preparations are required for an ultrasound?",
          content: "Preparation varies depending on the type of ultrasound. For abdominal scans, you may need to fast for a few hours. For pelvic or pregnancy ultrasounds, you might need a full bladder. Specific instructions will be provided at the time of booking.",
        },
        {
          id: "faq3",
          title: "When will I receive my report?",
          content: "Most routine ultrasound reports are delivered within 24 hours of your scan. For more complex cases, our radiologist may require additional time, but we will keep you informed of the expected delivery time.",
        },
        {
          id: "faq4",
          title: "Are your services affordable?",
          content: "Yes, we are committed to providing high-quality diagnostic imaging at competitive and affordable prices. We offer various packages and transparent pricing with no hidden costs. Our goal is to make essential healthcare accessible.",
        },
        {
          id: "faq5",
          title: "Can I bring a family member with me?",
          content: "For your comfort and support, you are welcome to bring one adult family member or a close friend to your appointment. For pregnancy scans, children are also generally allowed, but please inform us in advance.",
        },
        {
          id: "faq6",
          title: "What should I do if I need to cancel or reschedule?",
          content: "If you need to cancel or reschedule your appointment, please notify us at least 24 hours in advance. You can do this by calling our clinic or replying to your confirmation email. Your cooperation helps us serve all patients efficiently.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our services, booking process, preparations for your scan, and what to expect during your visit."
      tag="Your Queries Answered"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Schedule Now"
      title="Book Your Compassionate Ultrasound Appointment Today"
      description="Ready to experience advanced care with trust and affordability? Contact us to schedule your ultrasound scan and join our family of satisfied patients."
      buttons={[
        {
          text: "Call Us Now",
          href: "tel:+1234567890",
        },
        {
          text: "Send an Inquiry",
          href: "mailto:info@jaimaavaishno.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Jai Maa Vaishno Ultrasound Centre"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Pregnancy Ultrasounds",
              href: "#services",
            },
            {
              label: "Fetal Anomaly Scans",
              href: "#services",
            },
            {
              label: "General Diagnostics",
              href: "#services",
            },
            {
              label: "Advanced Imaging",
              href: "#services",
            },
          ],
        },
        {
          title: "About Us",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Our Team",
              href: "#about",
            },
            {
              label: "Our Mission",
              href: "#about",
            },
            {
              label: "Accreditations",
              href: "#trust",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Book Appointment",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Jai Maa Vaishno Ultrasound Centre. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
