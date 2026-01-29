# 🍔 BURGERHAUS - Landing Page Gourmet

Landing page brutal y distintiva para hamburguesas gourmet. Diseño editorial oscuro con animaciones GSAP, SEO completo y contacto directo vía WhatsApp/Instagram.

## 🎨 Características

- **Diseño Editorial Brutal**: Tipografía masiva (DM Serif Display), fondos oscuros, composición asimétrica
- **Animaciones GSAP**: Transiciones suaves, scroll-triggered effects, staggered reveals
- **SEO Optimizado**: Meta tags completos, Open Graph, Twitter Cards, Schema.org structured data
- **Google Analytics 4**: Tracking de eventos (clicks en WhatsApp, Instagram, etc.)
- **Contacto Social**: WhatsApp click-to-chat, Instagram profile links
- **Responsive**: Diseño optimizado para mobile, tablet y desktop
- **Performance**: Next.js 15 App Router, Image optimization, lazy loading

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: GSAP + ScrollTrigger
- **Icons**: Lucide React
- **Analytics**: Google Analytics 4
- **Fonts**: DM Serif Display (display) + Inter (body)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔧 Configuración

### Google Analytics

1. Crea una propiedad GA4 en [Google Analytics](https://analytics.google.com/)
2. Obtén tu Measurement ID (formato: `G-XXXXXXXXXX`)
3. Reemplaza `G-XXXXXXXXXX` en `app/layout.tsx` con tu ID real

### Contacto Social

Actualiza los links de contacto en `app/page.tsx`:

```typescript
// WhatsApp (línea ~100 y otras)
href="https://wa.me/34600000000?text=Hola!%20Quiero%20pedir%20una%20hamburguesa"

// Instagram (línea ~90 y otras)
href="https://instagram.com/burgerhaus"
```

### Contenido

- **Menú**: Edita los items del menú en el array de `app/page.tsx` (línea ~280)
- **Características**: Modifica las features en el array (línea ~215)
- **Textos**: Cambia títulos, descripciones y CTAs directamente en `app/page.tsx`

## 🌐 Deploy en Vercel

### Método 1: CLI (Rápido)

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Login (primera vez)
vercel login

# Deploy a producción
vercel --prod
```

### Método 2: GitHub + Vercel Dashboard

1. **Crear repositorio en GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: BurgerHaus landing page"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/hamburguesas-landing.git
   git push -u origin main
   ```

2. **Conectar con Vercel**:
   - Ve a [vercel.com](https://vercel.com) y haz login
   - Click "Add New Project"
   - Importa tu repositorio de GitHub
   - Configuración detectada automáticamente (Next.js)
   - Click "Deploy"

3. **Variables de entorno** (opcional):
   - En Vercel Dashboard → Project Settings → Environment Variables
   - Añade `NEXT_PUBLIC_GA_ID` con tu ID de Google Analytics

### Dominio Personalizado

1. En Vercel Dashboard → Project Settings → Domains
2. Añade tu dominio personalizado (ej: `burgerhaus.com`)
3. Sigue las instrucciones DNS proporcionadas por Vercel

## 📁 Estructura del Proyecto

```
hamburguesas-landing/
├── app/
│   ├── layout.tsx          # Root layout con metadata y fuentes
│   ├── page.tsx            # Página principal con todas las secciones
│   ├── globals.css         # Estilos globales y variables CSS
│   └── favicon.ico
├── public/
│   └── (agregar imágenes aquí)
├── package.json
├── tailwind.config.ts      # Configuración Tailwind con colores custom
├── tsconfig.json
└── README.md
```

## 🎨 Personalización del Diseño

### Colores

Edita las variables CSS en `app/globals.css`:

```css
:root {
  --bg-dark: #0a0a0a;
  --accent-orange: #ff6b35;
  /* ... más colores */
}
```

### Tipografía

Cambia las fuentes en `app/layout.tsx`:

```typescript
import { TU_FUENTE_DISPLAY, TU_FUENTE_BODY } from "next/font/google";
```

### Animaciones

Ajusta las animaciones GSAP en `app/page.tsx` (useEffect):

```typescript
gsap.from(".hero-title-line", {
  y: 120,           // Distancia inicial
  opacity: 0,
  duration: 1.2,    // Duración
  stagger: 0.15,    // Delay entre elementos
});
```

## 📊 Analytics Events

Eventos rastreados automáticamente:

- **WhatsApp Click**: `event_category: "Contact"`, `event_label: "WhatsApp Click"`
- **Instagram Click**: `event_category: "Social"`, `event_label: "Instagram Click"`

Añade más eventos personalizados:

```typescript
if (typeof window !== "undefined" && (window as any).gtag) {
  (window as any).gtag("event", "tu_evento", {
    event_category: "Categoria",
    event_label: "Label",
  });
}
```

## 🖼️ Imágenes (Opcional)

Para agregar imágenes reales:

1. Coloca las imágenes en `public/images/`
2. Reemplaza el placeholder del hero en `page.tsx`:

```tsx
<Image
  src="/images/hero-burger.jpg"
  alt="Hamburguesa gourmet"
  fill
  className="object-cover"
  priority
/>
```

## 📱 Responsive Design

El diseño es completamente responsive:

- **Mobile**: < 768px (layout vertical, textos más pequeños)
- **Tablet**: 768px - 1024px (grid adaptativo)
- **Desktop**: > 1024px (layout completo, animaciones full)

## 🚦 Performance

- ✅ Next.js Image optimization automática
- ✅ Font optimization con `next/font`
- ✅ Code splitting automático
- ✅ CSS optimizado con Tailwind
- ✅ GSAP lazy loading
- ✅ Scroll-triggered animations (no cargan hasta ser visibles)

## 🐛 Troubleshooting

### Animaciones no funcionan

Verifica que GSAP esté instalado:
```bash
npm install gsap
```

### Errores de TypeScript con gtag

Instala los types:
```bash
npm install --save-dev @types/gtag.js
```

### Build falla en Vercel

Asegúrate de que todas las dependencias estén en `package.json`:
```bash
npm install
```

## 📄 Licencia

Este proyecto es una plantilla de landing page. Personalízalo libremente para tu negocio.

## 🤝 Soporte

¿Preguntas? Abre un issue en GitHub o contacta al desarrollador.

---

**Hecho con 🔥 y 🍔 para BurgerHaus**
