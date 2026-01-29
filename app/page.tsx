"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, MessageCircle, Clock, MapPin, Award } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero entrance animation
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-line", {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
      });

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "power3.out",
      });

      gsap.from(".hero-cta", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: "power3.out",
      });

      gsap.from(".hero-image", {
        scale: 0.9,
        opacity: 0,
        duration: 1.4,
        delay: 0.4,
        ease: "power4.out",
      });

      // Features scroll animation
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Menu items scroll animation
      gsap.from(".menu-item", {
        scrollTrigger: {
          trigger: menuRef.current,
          start: "top 75%",
        },
        x: -80,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
      });

      // CTA section animation
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const trackWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "Contact",
        event_label: "WhatsApp Click",
      });
    }
  };

  const trackInstagramClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "Social",
        event_label: "Instagram Click",
      });
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="text-2xl font-display tracking-tight">BURGERHAUS</div>
        <div className="flex gap-6">
          <a
            href="https://instagram.com/burgerhaus"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInstagramClick}
            className="hover:text-orange-500 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://wa.me/34600000000?text=Hola!%20Quiero%20pedir%20una%20hamburguesa"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackWhatsAppClick}
            className="hover:text-orange-500 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-900/10" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <h1 className="text-[clamp(3rem,12vw,10rem)] leading-[0.9] font-display">
                <div className="hero-title-line">EL ARTE</div>
                <div className="hero-title-line text-gradient">DE LA</div>
                <div className="hero-title-line">BURGER</div>
              </h1>
            </div>

            <p className="hero-subtitle text-xl text-gray-400 max-w-lg text-balance">
              Cada hamburguesa es una obra maestra. Carne 100% Angus, pan
              artesanal horneado cada mañana, ingredientes premium
              seleccionados.
            </p>

            <div className="hero-cta flex flex-wrap gap-4">
              <a
                href="https://wa.me/34600000000?text=Hola!%20Quiero%20pedir%20una%20hamburguesa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-none font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
              >
                <MessageCircle size={24} />
                PEDIR AHORA
              </a>

              <a
                href="https://instagram.com/burgerhaus"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInstagramClick}
                className="inline-flex items-center gap-3 border-2 border-white/20 hover:border-orange-500 text-white px-8 py-4 rounded-none font-semibold text-lg transition-all hover:scale-105"
              >
                <Instagram size={24} />
                SÍGUENOS
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative hero-image">
            <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-orange-500/30 shadow-2xl shadow-orange-500/20 rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent z-10" />
              <div className="w-full h-full bg-gradient-to-br from-orange-900 to-red-950 flex items-center justify-center">
                <span className="text-9xl">🍔</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="bg-gradient-to-b from-black to-brown-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-display mb-16 text-center">
            POR QUÉ SOMOS{" "}
            <span className="text-gradient">DIFERENTES</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "INGREDIENTES PREMIUM",
                desc: "Solo trabajamos con proveedores locales certificados. Carne Angus madurada 21 días.",
              },
              {
                icon: Clock,
                title: "PAN ARTESANAL",
                desc: "Horneado cada mañana en nuestra panadería. Fermentación lenta, masa madre natural.",
              },
              {
                icon: MapPin,
                title: "KM CERO",
                desc: "Verduras frescas de huertos locales. Apoyamos a productores de la región.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="feature-card p-8 bg-gradient-to-br from-brown-dark to-black border border-orange-500/20 hover:border-orange-500/50 transition-all group cursor-default"
              >
                <feature.icon
                  size={48}
                  className="text-orange-500 mb-6 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-2xl font-display mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section ref={menuRef} className="bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-display mb-16">
            NUESTRO <span className="text-gradient">MENÚ</span>
          </h2>

          <div className="space-y-6 max-w-4xl">
            {[
              {
                name: "LA CLÁSICA",
                desc: "180g Angus, lechuga, tomate, cebolla caramelizada, salsa secreta",
                price: "12€",
              },
              {
                name: "TRUFFLE KING",
                desc: "200g Angus, queso gruyere, trufa negra, rúcula, reducción balsámica",
                price: "18€",
              },
              {
                name: "PICANTE INFERNO",
                desc: "180g Angus, jalapeños, queso pepper jack, salsa chipotle, crispy onions",
                price: "14€",
              },
              {
                name: "BBQ AMERICANA",
                desc: "200g Angus, bacon ahumado, cheddar, cebolla crispy, salsa BBQ casera",
                price: "15€",
              },
              {
                name: "LA VERDE",
                desc: "Hamburguesa vegetal premium, aguacate, tomate seco, pesto de albahaca",
                price: "13€",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="menu-item flex justify-between items-start gap-8 p-6 border-b border-orange-500/20 hover:bg-orange-500/5 transition-colors group"
              >
                <div className="flex-1">
                  <h3 className="text-3xl font-display mb-2 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
                <div className="text-3xl font-display text-orange-500 whitespace-nowrap">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-red-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="cta-content text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display mb-8">
              ¿LISTO PARA LA MEJOR BURGER DE TU VIDA?
            </h2>

            <p className="text-xl mb-12 text-white/90">
              Pide ahora por WhatsApp o visítanos. Abierto todos los días de
              12:00 a 23:00
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://wa.me/34600000000?text=Hola!%20Quiero%20pedir%20una%20hamburguesa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-flex items-center gap-3 bg-black hover:bg-black/80 text-white px-10 py-5 rounded-none font-bold text-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <MessageCircle size={28} />
                PEDIR POR WHATSAPP
              </a>

              <a
                href="https://instagram.com/burgerhaus"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInstagramClick}
                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black px-10 py-5 rounded-none font-bold text-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <Instagram size={28} />
                @BURGERHAUS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-4xl font-display mb-4">BURGERHAUS</div>
          <p className="text-gray-500 mb-6">
            La mejor hamburguesa gourmet de España
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <a
              href="https://instagram.com/burgerhaus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              WhatsApp
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            © 2026 BurgerHaus. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
