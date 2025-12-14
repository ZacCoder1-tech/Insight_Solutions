import "./Homepage.css";

export default function HomaPage() {
  return (
    <div className="demo">
      {/* HERO */}
      <section className="demo-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>INSIGHT SOLUTIONS</h1>
          <p>
            A specialized trading company delivering world-class aluminium
            manufacturing & global sourcing solutions.
          </p>
          <button>Explore Our Capabilities</button>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="demo-section light">
  <h2>What We Do</h2>
  <p className="center-text">
    We offer comprehensive sourcing solutions ensuring the highest standards of
    quality, reliability, and cost efficiency across all business verticals.
  </p>

  <div className="services-overview">
    <div className="service-item">
      <img src="https://metalsourcingservices.com/assets/images/blog/Aluminium-Foil1.jpg" alt="Sourcing" className="service-img"/>
      <h3>Sourcing & Procurement</h3>
      <p>
        Our team identifies, evaluates, and secures the best aluminum products
        and raw materials to meet your project requirements while ensuring
        competitive pricing and quality assurance.
      </p>
    </div>

    {/* Manufacturing & Fabrication */}
    <div className="service-item">
      <img src="https://metalsourcingservices.com/assets/images/blog/SS-Structural.jpg" alt="Fabrication" className="service-img"/>
      <h3>Manufacturing & Fabrication</h3>
      <p>
        We specialize in precision aluminum fabrication, including windows,
        doors, panels, frames, and custom solutions tailored to client
        specifications.
      </p>
    </div>

    {/* Installation & Support */}
    <div className="service-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ayjuaoei0MCDdUbolKSrxZIaakTnJ_p5IQ&s" alt="Installation" className="service-img"/>
      <h3>Installation & On-Site Support</h3>
      <p>
        Our skilled technicians provide efficient installation and on-site
        support to ensure that every product functions perfectly and meets
        your project timelines.
      </p>
    </div>

    {/* Quality & Compliance */}
    <div className="service-item">
      <img src="https://ndt-int.com/wp-content/uploads/2024/02/Aluminum-installation-1.jpeg" alt="Quality" className="service-img"/>
      <h3>Quality Assurance & Compliance</h3>
      <p>
        Every product undergoes rigorous quality checks and complies with
        international standards, ensuring durability, safety, and customer
        satisfaction.
      </p>
    </div>
  </div>
</section>


      {/* ADVANTAGE */}
      <section className="advantage-section">
  <h2>Insight Solutions Advantage</h2>

  <div className="advantage-list">

    <div className="advantage-item">
      <span className="adv-number">01</span>

      <div className="adv-content">
        <h3>Factories & Mills</h3>
        <p>
          Global sources certified with ISO, BS, EN, DIN & ASTM standards,
          ensuring full traceability and consistent quality.
        </p>
      </div>

      <img
        src="https://promfgmedia.com/images/Vedanta_Alum.png"
        alt="Factories and Mills"
        className="adv-image"
      />
    </div>

    <div className="advantage-item reverse">
      <span className="adv-number">02</span>

      <div className="adv-content">
        <h3>Technical Expertise</h3>
        <p>
          Highly qualified engineers and trained professionals delivering
          precision-driven aluminum solutions.
        </p>
      </div>

      <img
        src="https://www.epcworld.in/wp-content/uploads/2025/05/1601796555vedanda-jharsuguda-aluminium.jpg"
        alt="Technical Expertise"
        className="adv-image"
      />
    </div>
  </div>
</section>


      {/* PRODUCTS */}
      <section className="products-section">
  <h2>Our Products</h2>

  <div className="product-cards">
    <div className="product-card">
      <img
        src="https://www.reuters.com/resizer/v2/TT5KR2BJV5LBHOXVSGCFQZ35TM.jpg?auth=9e3eaa8a9665a3b9ca19a2032becca15b57ff862ae450c2787b403a696218aa2&width=1920&quality=80"
        alt="Industrial Aluminium Products"
      />
      <div className="product-content">
        <h3>Industrial Sector</h3>
        <p>
          Aluminium profiles, pipes, sheets and fabricated products for Oil &
          Gas, Marine, Transport, Scaffolding and Construction.
        </p>
      </div>
    </div>

    <div className="product-card">
      <img
        src="https://www.sme.in/jmindustries/img/portfolio/1.jpg"
        alt="Architectural Aluminium Solutions"
      />
      <div className="product-content">
        <h3>Architectural Sector</h3>
        <p>
          Curtain wall systems, doors & windows, balustrades, pergola and façade
          solutions.
        </p>
      </div>
    </div>

    <div className="product-card">
      <img
        src="https://www.balcoindia.com/annual-report/2021-22/img/our-product-portfolio/hot-rolled-coil.png"
        alt="Decorative Anodised Aluminium Sheets"
      />
      <div className="product-content">
        <h3>Decorative Anodised Sheets</h3>
        <p>
          Digital printing on anodized aluminium for signage, artwork and
          industrial applications.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* SERVICES */}
      <section className="services-simple">
  <h2>Our Services</h2>

  <div className="services-grid">
    <div className="service-box">
      <img src="https://www.jaipuraluminiumworks.com/service-image/Domal-Aluminium-Partition.jpg" alt="Fabrication" />
      <h3>Fabrication & Machining</h3>
      <p>
        Precision aluminium fabrication including CNC machining, drilling,
        threading, cutting and assembly for industrial and architectural
        applications.
      </p>
    </div>

    <div className="service-box">
      <img src="https://images.jdmagicbox.com/comp/def_content_category/aluminium-dealers/9946ff1041-aluminium-dealers-4-78yzp.jpg" alt="Surface Treatment" />
      <h3>Surface Treatments</h3>
      <p>
        Anodizing, powder coating, sandblasting and PVDF coatings in all RAL
        shades to improve durability, corrosion resistance and finish.
      </p>
    </div>

    <div className="service-box">
      <img src="https://ozaluminium.au/wp-content/uploads/2023/08/aluminium-and-pvc-industry-worker-e1693874931429-1024x683.jpg" alt="Custom Solutions" />
      <h3>Custom Solutions</h3>
      <p>
        Bespoke aluminium solutions supported by inspections, documentation
        and third-party certifications for complete compliance.
      </p>
    </div>
  </div>
</section>


<section className="global-presence premium">
  <div className="presence-header">
    <h2>Global Presence</h2>
    <p>
      Insight Solutions serves clients across major global markets, delivering
      low-carbon aluminium products and engineering solutions that meet
      international quality and sustainability standards.
    </p>
  </div>

  <div className="presence-grid">
    <div className="presence-card">
      <img
        src="https://www.fodors.com/wp-content/uploads/2024/08/0_HERO_Shutterstock_1914970558.jpg"
        alt="UAE and GCC Region"
      />
      <div className="presence-overlay">
        <h4>UAE & GCC</h4>
        <p>
          Aluminium solutions for infrastructure, oil & gas, construction and
          architectural projects across the Gulf.
        </p>
      </div>
    </div>

    <div className="presence-card">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.R7Px9vVQWI6C3mkZIyHMkQHaE8?pid=Api&P=0&h=180"
        alt="MENA Region"
      />
      <div className="presence-overlay">
        <h4>MENA Region</h4>
        <p>
          Supporting industrial and commercial developments across the Middle
          East and North Africa.
        </p>
      </div>
    </div>

    <div className="presence-card">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.UiLhHO76YsfjgW9m8S5TIwHaE8?pid=Api&P=0&h=180"
        alt="India"
      />
      <div className="presence-overlay">
        <h4>India</h4>
        <p>
          Strong manufacturing partnerships and supply capabilities for diverse
          industrial applications.
        </p>
      </div>
    </div>

    <div className="presence-card">
      <img
        src="https://thumbs.dreamstime.com/b/european-parliament-building-strasbourg-view-alsace-region-france-249739492.jpg"
        alt="UK and Europe"
      />
      <div className="presence-overlay">
        <h4>UK & Europe</h4>
        <p>
          Delivering aluminium products compliant with EN, DIN and international
          standards.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section className="cta-section">
  <div className="cta-content">
    <h2>Let’s Build Something Together</h2>

    <p className="cta-text">
      From concept to completion, Insight Solutions delivers premium aluminium
      products and engineering services tailored to global standards.
      Partner with us for reliable sourcing, precision manufacturing and
      long-term value.
    </p>

    <div className="cta-features">
      <span>✔ Global Supply Network</span>
      <span>✔ Certified Aluminium Products</span>
      <span>✔ Custom Engineering Solutions</span>
    </div>

    <div className="cta-actions">
      <button className="primary-btn">Contact Insight Solutions</button>
      <button className="secondary-btn">View Our Capabilities</button>
    </div>
  </div>

  <div className="cta-image">
    <img
      src="https://www.jaipuraluminiumworks.com/service-image/glass-aluminium-work-services.jpg"
      alt="Aluminium Manufacturing Facility"
    />
  </div>
</section>
    </div>
  );
}
