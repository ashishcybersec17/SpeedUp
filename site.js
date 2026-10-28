const pageContent = {
  home: `
    <section class="hero" id="home">
      <div class="hero-content silk-reveal-left"><div class="hero-badge"><span class="badge-dot"></span> Innovative IT solutions</div><h1>Adding value in<br>customer success through<br><span>smart technology</span></h1><p class="hero-sub">Your partner for IT hardware, infrastructure, cloud integration, and managed support, tailored to your business needs.</p><div class="hero-btns"><a href="contact.html" class="btn-hero">Request a bulk quote <span aria-hidden="true">&rarr;</span></a><a href="services.html" class="btn-outline">Explore solutions</a></div><div class="hero-trust"><div class="hero-avatars"><span>IT</span><span>CL</span><span>AP</span><span>+</span></div><p class="hero-trust-text"><strong>Five focus areas</strong> built around your business</p></div></div>
      <div class="hero-visual silk-reveal-right"><div class="float-badge fb-left"><div class="float-badge-icon" style="background:rgba(61,204,142,.12);color:var(--green)">CL</div><div class="float-badge-info"><div class="val">AWS · Azure · GCP</div><div class="lbl">Cloud platforms</div></div></div><div class="float-badge fb-right"><div class="float-badge-icon" style="background:rgba(74,158,232,.12);color:var(--sky)">IT</div><div class="float-badge-info"><div class="val">HP · Dell · Lenovo</div><div class="lbl">End-user devices</div></div></div><div class="dash-card"><div class="dash-topbar"><div class="dash-dots"><span></span><span></span><span></span></div><span class="dash-title-bar">SPEEDUP IT OVERVIEW</span><span class="dash-status">SOLUTIONS</span></div><div class="dash-body"><div class="dash-stats"><div class="dash-stat"><div class="dash-stat-label">Core IT</div><div class="dash-stat-val">Infrastructure</div><div class="dash-stat-change">Compute · network</div></div><div class="dash-stat"><div class="dash-stat-label">Cloud</div><div class="dash-stat-val">IaaS platforms</div><div class="dash-stat-change">AWS · Azure · GCP</div></div><div class="dash-stat"><div class="dash-stat-label">Business</div><div class="dash-stat-val">Applications</div><div class="dash-stat-change">ERP · HRMS · CRM</div></div></div><div class="chart-wrap"><div class="chart-head"><span class="chart-head-title">Five customer-first focus areas</span><span class="chart-badge">IT that fits</span></div><div class="focus-bars"><i style="height:45%"></i><i style="height:66%"></i><i style="height:54%"></i><i style="height:84%"></i><i style="height:72%"></i><i style="height:95%"></i></div><div class="focus-bar-labels"><span>Digitize</span><span>Manage</span><span>Augment</span><span>Consult</span><span>Develop</span></div></div><div class="tx-list"><div class="tx-item"><div class="tx-icon">DC</div><div class="tx-info"><div class="tx-name">Data centre &amp; networking</div><div class="tx-date">Compute · storage · connectivity</div></div><div class="tx-amount">INFRA</div></div><div class="tx-item"><div class="tx-icon">MS</div><div class="tx-info"><div class="tx-name">Managed IT services</div><div class="tx-date">AMC · FMS · backup</div></div><div class="tx-amount">SUPPORT</div></div></div></div></div>
    </section>
    <div class="logos-section"><div class="logos-label">IT solutions across your business</div><div class="logos-track-wrap"><div class="logos-track" id="capabilityTicker"></div></div></div>
    <section class="features-section" id="features"><div class="features-header silk-reveal"><div class="section-tag">End-to-end IT</div><h2 class="section-title">Technology that works together</h2><p class="section-sub">From infrastructure and devices to cloud platforms and business applications, build the right technology foundation for your team.</p></div><div class="sticky-layout"><div class="sticky-cards">
      <button class="sticky-card active" type="button" data-panel="0" aria-pressed="true"><span class="sticky-card-icon">01</span><h3>Infrastructure &amp; networking</h3><p>Data centre compute, storage, active and passive networking, leased lines, MPLS, SD-WAN, and wireless solutions.</p><span class="sticky-card-pills"><span class="sc-pill">Compute</span><span class="sc-pill">Networking</span><span class="sc-pill">Storage</span></span></button>
      <button class="sticky-card" type="button" data-panel="1" aria-pressed="false"><span class="sticky-card-icon">02</span><h3>Cloud &amp; virtualization</h3><p>IaaS across AWS, Azure, GCP, and Oracle, with server virtualization, VDI, and work-from-home solutions.</p><span class="sticky-card-pills"><span class="sc-pill">AWS</span><span class="sc-pill">Azure</span><span class="sc-pill">VDI</span></span></button>
      <button class="sticky-card" type="button" data-panel="2" aria-pressed="false"><span class="sticky-card-icon">03</span><h3>Managed services &amp; support</h3><p>Ongoing AMC and FMS, backup, email archival, end-user support, and enterprise mobility.</p><span class="sticky-card-pills"><span class="sc-pill">AMC / FMS</span><span class="sc-pill">Backup</span><span class="sc-pill">Mobility</span></span></button>
      <button class="sticky-card" type="button" data-panel="3" aria-pressed="false"><span class="sticky-card-icon">04</span><h3>Business applications &amp; analytics</h3><p>ERP, HRMS, CRM, mobility, data warehousing, and analytics tailored to your organization.</p><span class="sticky-card-pills"><span class="sc-pill">ERP / CRM</span><span class="sc-pill">Data</span><span class="sc-pill">Analytics</span></span></button>
    </div><div class="sticky-panel-wrap"><div class="sticky-panel"><div class="panel-topbar"><div class="panel-dots"><span></span><span></span><span></span></div><span style="font-size:11px;color:var(--text3);margin-left:8px" id="panelLabel">Infrastructure &amp; networking</span></div><div class="panel-content">
      <div class="panel-view active" id="panel-0"><div class="pm-row"><div class="pm-card"><div class="pm-label">Data centre</div><div class="pm-val">Compute</div><div class="pm-change">Servers + workstations</div></div><div class="pm-card"><div class="pm-label">Infrastructure</div><div class="pm-val">Storage</div><div class="pm-change">Backup solutions</div></div></div><div class="pm-list"><div class="pm-list-item"><div class="pm-list-icon">NW</div><div class="pm-list-info"><div class="pm-list-name">Network connectivity</div><div class="pm-list-sub">Leased line · MPLS · SD-WAN</div></div><div class="pm-list-amt">WAN</div></div><div class="pm-list-item"><div class="pm-list-icon">WL</div><div class="pm-list-info"><div class="pm-list-name">Active, passive &amp; wireless</div><div class="pm-list-sub">Enterprise networking</div></div><div class="pm-list-amt">LAN</div></div></div></div>
      <div class="panel-view" id="panel-1"><div class="pm-row"><div class="pm-card"><div class="pm-label">Cloud IaaS</div><div class="pm-val">AWS · Azure</div><div class="pm-change">GCP · Oracle</div></div><div class="pm-card"><div class="pm-label">Virtualization</div><div class="pm-val">VDI</div><div class="pm-change">Work-from-home</div></div></div><div class="pm-chart-mini"><div class="pm-label">Cloud platforms</div><div class="pm-sparkline"><span>AWS</span><span>Azure</span><span>GCP</span><span>Oracle</span></div></div></div>
      <div class="panel-view" id="panel-2"><div class="pm-row"><div class="pm-card"><div class="pm-label">Support</div><div class="pm-val">AMC / FMS</div><div class="pm-change">Maintenance services</div></div><div class="pm-card"><div class="pm-label">Data protection</div><div class="pm-val">Backup</div><div class="pm-change">Backup-as-a-service</div></div></div><div class="pm-list"><div class="pm-list-item"><div class="pm-list-icon">EM</div><div class="pm-list-info"><div class="pm-list-name">Email archival</div><div class="pm-list-sub">Ongoing service support</div></div></div><div class="pm-list-item"><div class="pm-list-icon">BY</div><div class="pm-list-info"><div class="pm-list-name">Enterprise mobility</div><div class="pm-list-sub">Mobile management · BYOD</div></div></div></div></div>
      <div class="panel-view" id="panel-3"><div class="pm-row"><div class="pm-card"><div class="pm-label">Business applications</div><div class="pm-val">ERP · HRMS</div><div class="pm-change">CRM · mobility</div></div><div class="pm-card"><div class="pm-label">Data &amp; analytics</div><div class="pm-val">Insights</div><div class="pm-change">Warehousing + BI</div></div></div><div class="pm-security-grid"><div class="pm-sec-item"><div class="pm-sec-name">Application development</div><div class="pm-sec-status">Build + support</div></div><div class="pm-sec-item"><div class="pm-sec-name">Business analytics</div><div class="pm-sec-status">Power BI · SAS</div></div><div class="pm-sec-item"><div class="pm-sec-name">Data platforms</div><div class="pm-sec-status">Snowflake</div></div><div class="pm-sec-item"><div class="pm-sec-name">Business solutions</div><div class="pm-sec-status">Tailored to your needs</div></div></div></div>
    </div></div></div></div></section>
    <section class="security-section"><div class="security-inner"><div><div class="section-tag">A dependable partner</div><h2 class="section-title">Support for the technology behind your business</h2><p class="section-sub">We learn your needs, recommend practical options, and support the systems your team relies on.</p><a class="btn-hero" href="about.html">Meet SpeedUp <span aria-hidden="true">&rarr;</span></a></div><div class="security-badges"><div class="sec-badge"><span class="sec-badge-icon">01</span><span class="sec-badge-name">Customer-first</span><span class="sec-badge-sub">Solutions shaped around your needs</span></div><div class="sec-badge"><span class="sec-badge-icon">02</span><span class="sec-badge-name">Cost-conscious</span><span class="sec-badge-sub">Fit your environment and budget</span></div><div class="sec-badge"><span class="sec-badge-icon">03</span><span class="sec-badge-name">End-to-end</span><span class="sec-badge-sub">Products, implementation, support</span></div><div class="sec-badge"><span class="sec-badge-icon">04</span><span class="sec-badge-name">Built for change</span><span class="sec-badge-sub">Keep pace with evolving IT</span></div></div></div></section>`,
  about: `
    <section class="page-hero wrap"><p class="eyebrow"><span class="eyebrow-dot"></span> About SpeedUp</p><h1>Your IT partner.<br><span>Your success.</span></h1><p class="page-lead">SpeedUp Infosolutions is an IT consulting, technology, and next-generation systems integration partner.</p></section>
    <section class="about-image wrap"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85" alt="An open, light-filled workspace"></section>
    <section class="section wrap split-section"><div><p class="eyebrow">Who we are</p><h2>Technology with<br><span>the human in mind.</span></h2></div><div class="body-copy"><p>We are a young, focused organization with a powerful presence in consulting, technology, and next-generation systems integration. We provide innovative, cost-effective, end-to-end IT products and services.</p><p>Our work spans digitization, managed services, resource augmentation, consulting and business solutions, and application development and support. We put customer pain points first and tailor solutions to each organization's needs and budget.</p><p>As technology changes, we help customers focus on their core business while a trusted IT partner works on sustainable solutions for growth.</p><a class="text-link" href="approach.html">See our customer-first approach <span aria-hidden="true">&rarr;</span></a></div></section>
    <section class="values-band"><div class="wrap"><p class="eyebrow">What guides us</p><div class="values-grid"><article><span>01</span><h3>Customer success first.</h3><p>We start by understanding your needs, priorities, and pain points.</p></article><article><span>02</span><h3>Solutions that fit.</h3><p>We tailor technology to your environment and business requirements.</p></article><article><span>03</span><h3>Built for the long term.</h3><p>We keep pace with a changing technology landscape and lasting needs.</p></article></div></div></section>
    <section class="section wrap closing-cta"><p class="eyebrow">Ready to discuss your IT needs?</p><div class="closing-grid"><h2>Let's start<br><span>with a conversation.</span></h2><div><p>Tell us about your business and the technology challenge you want to solve.</p><a class="button button-dark" href="contact.html">Contact SpeedUp <span aria-hidden="true">&rarr;</span></a></div></div></section>`,
  services: `
    <section class="page-hero wrap"><p class="eyebrow"><span class="eyebrow-dot"></span> What we do</p><h1>IT solutions<br><span>that fit.</span></h1><p class="page-lead">End-to-end technology products and services, selected around your business needs, environment, and budget.</p></section>
    <section class="section wrap"><div class="service-detail-list"><article class="service-detail"><span class="service-number">01 / DIGITIZE</span><div><h2>Digitization &amp; data</h2><p>Modernize business processes and make information more useful across your organization.</p><ul><li>Data warehousing</li><li>Analytics: Power BI, ThoughtSpot, Snowflake, SAS</li><li>Enterprise mobility</li></ul></div><a class="round-link" href="contact.html" aria-label="Ask about digitization and data">&nearr;</a></article><article class="service-detail"><span class="service-number">02 / MANAGE</span><div><h2>Managed services</h2><p>Keep business-critical systems supported with ongoing service and maintenance.</p><ul><li>AMC and FMS services</li><li>Backup and backup-as-a-service</li><li>Email archival and end-user support</li></ul></div><a class="round-link" href="contact.html" aria-label="Ask about managed services">&nearr;</a></article><article class="service-detail"><span class="service-number">03 / AUGMENT</span><div><h2>Resource augmentation</h2><p>Add technology expertise and delivery capacity to support your team's changing requirements.</p><ul><li>IT resource augmentation</li><li>Implementation and support capacity</li><li>End-user and infrastructure assistance</li></ul></div><a class="round-link" href="contact.html" aria-label="Ask about resource augmentation">&nearr;</a></article><article class="service-detail"><span class="service-number">04 / CONSULT</span><div><h2>Consulting &amp; business solutions</h2><p>Plan and integrate technology across infrastructure, connectivity, workplace, and business systems.</p><ul><li>Data centre: compute, storage, networking</li><li>Leased lines, MPLS, SD-WAN, wireless</li><li>Cloud IaaS: AWS, Azure, GCP, Oracle</li><li>VDI, virtualization, collaboration, UTM</li><li>ERP, HRMS, CRM, UPS, IP cameras</li></ul></div><a class="round-link" href="contact.html" aria-label="Ask about consulting and business solutions">&nearr;</a></article><article class="service-detail"><span class="service-number">05 / DEVELOP</span><div><h2>Application development &amp; support</h2><p>Develop, customize, and support applications that help your teams work effectively.</p><ul><li>Application development and support</li><li>ERP implementation and customization</li><li>HRMS, CRM, and mobility solutions</li></ul></div><a class="round-link" href="contact.html" aria-label="Ask about application development and support">&nearr;</a></article></div></section>
    <section class="soft-band"><div class="wrap band-grid"><p class="eyebrow">Infrastructure &amp; workplace</p><div><h2>From the data centre<br><span>to the end user.</span></h2><p>Our solutions also cover server and enterprise storage, active and passive networking, backup, VDI and work-from-home, laptops and desktops, thin clients, Microsoft Surface and Apple devices, device-as-a-service, and enterprise mobility.</p><a class="button button-dark" href="contact.html">Discuss your requirements <span aria-hidden="true">&rarr;</span></a></div></div></section>`,
  approach: `
    <section class="page-hero wrap"><p class="eyebrow"><span class="eyebrow-dot"></span> How we work</p><h1>Understand first.<br><span>Then solve.</span></h1><p class="page-lead">We begin with your needs, then bring the right technology and expertise to the problem.</p></section>
    <section class="section wrap"><div class="process-list"><article class="process-step"><span class="process-number">01</span><div><p class="eyebrow">Understand</p><h2>Start with your environment.</h2><p>We learn how your business works, what technology you rely on, and where the pain points are. That context helps us recommend a solution that fits.</p></div><span class="step-note">YOUR NEEDS</span></article><article class="process-step"><span class="process-number">02</span><div><p class="eyebrow">Recommend</p><h2>Find the right-fit solution.</h2><p>We consider your requirements, existing setup, and budget, then identify practical options across products, services, and implementation.</p></div><span class="step-note">RIGHT TECHNOLOGY</span></article><article class="process-step"><span class="process-number">03</span><div><p class="eyebrow">Support</p><h2>Help you keep moving.</h2><p>From deployment and application support to managed services and maintenance, we can support your technology needs beyond the initial recommendation.</p></div><span class="step-note">LONG-TERM VALUE</span></article></div></section>
    <section class="quote-band"><div class="wrap quote-content"><p class="eyebrow">Our vision</p><blockquote>“Strive towards customer success by understanding evolving IT needs and the changing technology landscape.”</blockquote><a class="text-link" href="services.html">Explore our capabilities <span aria-hidden="true">&rarr;</span></a></div></section>
    <section class="section wrap closing-cta"><p class="eyebrow">A good place to begin</p><div class="closing-grid"><h2>Tell us what<br>your team <span>needs.</span></h2><div><p>Share your requirements and we'll help you discuss a practical way forward.</p><a class="button button-dark" href="contact.html">Start a conversation <span aria-hidden="true">&rarr;</span></a></div></div></section>`,
  work: `
    <section class="page-hero wrap"><p class="eyebrow"><span class="eyebrow-dot"></span> Technology capabilities</p><h1>Solutions for<br><span>real-world IT.</span></h1><p class="page-lead">A snapshot of the systems and services SpeedUp can help your organization plan, implement, and support.</p></section>
    <section class="work-grid wrap"><article class="work-feature work-green"><div class="work-art art-orbit"><span class="orbit-ring"></span><span class="orbit-core">CLOUD<br>&amp;<br>CORE IT</span></div><div class="work-meta"><span>INFRASTRUCTURE / CLOUD</span><span>01</span></div><h2>Infrastructure built around your needs.</h2><p>Data centre compute, storage and networking, server virtualization, enterprise storage, cloud IaaS, backup, UPS, and leased-line, MPLS, or SD-WAN connectivity.</p></article><article class="work-feature work-coral"><div class="work-art art-window"><div class="window-top"><i></i><i></i><i></i></div><div class="window-content"><span>Work well<br>from anywhere.</span><b>↗</b></div></div><div class="work-meta"><span>WORKPLACE / MANAGED IT</span><span>02</span></div><h2>Supported teams and connected workplaces.</h2><p>VDI and work-from-home solutions, collaboration and video conferencing, end-user devices, device-as-a-service, AMC, and FMS.</p></article><article class="work-feature work-blue"><div class="work-art art-bars"><span></span><span></span><span></span><span></span><div>DATA<br>TO DECISIONS</div></div><div class="work-meta"><span>APPLICATIONS / DATA</span><span>03</span></div><h2>Business systems that put information to work.</h2><p>ERP, HRMS, CRM, mobility, data warehousing, and analytics solutions including Power BI, ThoughtSpot, Snowflake, and SAS.</p></article></section>
    <section class="section wrap note-section"><p class="eyebrow">Solutions shaped around your business</p><div><h2>Not sure where<br><span>to begin?</span></h2><p>Tell us about your existing setup and what you want to improve. We'll help you identify the right conversation.</p><a class="button button-dark" href="contact.html">Discuss your IT needs <span aria-hidden="true">&rarr;</span></a></div></section>`,
  faq: `
    <section class="page-hero wrap"><p class="eyebrow"><span class="eyebrow-dot"></span> Frequently asked</p><h1>Good questions.<br><span>Clear answers.</span></h1><p class="page-lead">A few details about SpeedUp's IT products, services, and support.</p></section>
    <section class="faq-section wrap"><div class="faq-aside"><p class="eyebrow">Still wondering?</p><h2>Let's talk<br>it through.</h2><p>Every IT environment is different. Send us your question and we'll discuss your requirements.</p><a class="text-link" href="contact.html">Get in touch <span aria-hidden="true">&rarr;</span></a></div><div class="faq-list"><details><summary>What areas of IT do you support?<span aria-hidden="true">+</span></summary><p>Our focus areas include digitization, managed services, resource augmentation, consulting and business solutions, and application development and support. Offerings span infrastructure, cloud, networking, end-user computing, business applications, and analytics.</p></details><details><summary>Can you work with our existing setup?<span aria-hidden="true">+</span></summary><p>We aim to understand your current environment and requirements before recommending options. Share details about your setup and we'll discuss what may fit.</p></details><details><summary>Which cloud platforms do you work with?<span aria-hidden="true">+</span></summary><p>The company profile lists IaaS services through AWS, Microsoft Azure, Google Cloud Platform, and Oracle Cloud.</p></details><details><summary>Do you provide ongoing maintenance and support?<span aria-hidden="true">+</span></summary><p>Yes. Listed services include AMC and FMS, backup solutions, application support, and managed services. The right scope depends on your systems and requirements.</p></details><details><summary>Do you supply end-user devices?<span aria-hidden="true">+</span></summary><p>The profile includes laptops, desktops, thin clients, Microsoft Surface and Apple devices, high-end workstations, enterprise storage, and device-as-a-service.</p></details><details><summary>How do we get a recommendation or quote?<span aria-hidden="true">+</span></summary><p>Contact us with your requirements, existing environment, and priorities. We'll discuss the appropriate solution and next steps with you.</p></details></div></section>`,
  contact: `
    <section class="contact-hero wrap"><div><p class="eyebrow"><span class="eyebrow-dot"></span> Contact SpeedUp</p><h1>Let's talk<br><span>technology.</span></h1><p class="page-lead">Tell us about your IT requirements, current environment, or the business challenge you'd like to solve.</p><div class="contact-email"><span class="eyebrow">Email us</span><a href="mailto:haiderbazmi@speedupinfo.in.net">haiderbazmi@speedupinfo.in.net <span aria-hidden="true">&nearr;</span></a></div><div class="contact-email"><span class="eyebrow">Call us</span><a href="tel:9013026686">9013026686 <span aria-hidden="true">&nearr;</span></a></div></div><form class="contact-form" id="contact-form"><label for="name">Your name</label><input id="name" name="name" autocomplete="name" required><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required><label for="company">Company <span>(optional)</span></label><input id="company" name="company" autocomplete="organization"><label for="message">Your IT requirement</label><textarea id="message" name="message" rows="4" required></textarea><button class="button button-dark" type="submit">Prepare your message <span aria-hidden="true">&rarr;</span></button><p class="form-note" id="form-note" aria-live="polite">Your email app will open with your message ready to send.</p></form></section>
    <section class="contact-bottom"><div class="wrap contact-bottom-grid"><div><p class="eyebrow">A good first step</p><h2>Tell us what<br><span>your team needs.</span></h2></div><p>Share your requirements and the technology you currently use. We'll get back to you to discuss the right next step.</p></div></section>`
};

const navigation = [
  ["About Us", "about.html", "about"],
  ["Hardware & Infra", "services.html", "services"],
  ["Approach", "approach.html", "approach"],
  ["Work", "work.html", "work"],
  ["FAQs", "faq.html", "faq"]
];

const currentPage = document.querySelector("#page-content")?.dataset.page || "home";
const header = document.querySelector("#site-header");
const footer = document.querySelector("#site-footer");
const main = document.querySelector("#page-content");

if (header && footer && main && pageContent[currentPage]) {
  header.innerHTML = `
    <div class="ticker"><div class="ticker-track" id="tickerTrack" aria-label="SpeedUp IT capabilities"></div></div>
    <nav id="mainNav" aria-label="Main navigation">
      <a href="index.html" class="nav-logo" aria-label="SpeedUp Infosolutions Pvt. Ltd. home"><img class="nav-logo-image" src="Picture1.png" alt="SpeedUp Infosolutions"></a>
      <div class="nav-links">${[['Home', 'index.html', 'home'], ...navigation].map(([label, url, key]) => `<a href="${url}" ${currentPage === key ? 'aria-current="page"' : ""}>${label}</a>`).join("")}</div>
      <div class="nav-cta"><a href="contact.html" class="btn-primary">Contact us</a></div>
      <button class="hamburger" id="hamburger" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </nav>
    <div class="mobile-menu" id="mobileMenu" aria-label="Mobile navigation">
      ${[['Home', 'index.html', 'home'], ...navigation, ["Contact us", "contact.html", "contact"]].map(([label, url, key]) => `<a href="${url}" ${currentPage === key ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
      <div class="m-btns"><a class="btn-primary" href="contact.html">Request a consultation</a></div>
    </div>`;
  main.innerHTML = pageContent[currentPage];

  const tickerTrack = header.querySelector("#tickerTrack");
  const tickerItems = ["Hardware procurement", "Cloud infrastructure", "Managed services", "Business applications", "Networking", "End-user devices"];
  [...tickerItems, ...tickerItems].forEach((label) => {
    const item = document.createElement("div");
    item.className = "ticker-item";
    item.innerHTML = `<span class="ticker-sym">IT</span><span class="ticker-price">${label}</span><span class="ticker-up">SpeedUp</span>`;
    tickerTrack?.append(item);
  });
  const serviceList = main.querySelector(".service-detail-list");
  if (currentPage === "services" && serviceList) {
    const serviceCards = [...serviceList.querySelectorAll(".service-detail")];
    const serviceTags = [
      ["business", "data"],
      ["managed", "workplace"],
      ["managed", "infrastructure", "workplace"],
      ["infrastructure", "cloud", "workplace", "business"],
      ["business", "data"]
    ];
    const filters = [
      { label: "All solutions", value: "all" },
      { label: "Infrastructure & cloud", value: "infrastructure" },
      { label: "Managed services", value: "managed" },
      { label: "Workplace", value: "workplace" },
      { label: "Business systems", value: "business" }
    ];
    const filterBar = document.createElement("div");
    filterBar.className = "service-filter";
    filterBar.setAttribute("role", "group");
    filterBar.setAttribute("aria-label", "Filter services by category");
    const filterButtons = document.createElement("div");
    filterButtons.className = "service-filter-buttons";
    const resultCount = document.createElement("p");
    resultCount.className = "service-filter-count";
    resultCount.setAttribute("aria-live", "polite");

    for (const [index, card] of serviceCards.entries()) {
      card.dataset.categories = (serviceTags[index] || []).join(" ");
    }

    for (const filter of filters) {
      const button = document.createElement("button");
      button.className = "service-filter-button";
      button.type = "button";
      button.dataset.category = filter.value;
      button.setAttribute("aria-pressed", String(filter.value === "all"));
      button.textContent = filter.label;
      filterButtons.append(button);
    }

    resultCount.textContent = `Showing ${serviceCards.length} capabilities`;
    filterBar.append(filterButtons, resultCount);
    serviceList.before(filterBar);
    filterBar.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) return;
      const selectedButton = event.target.closest("button[data-category]");
      if (!(selectedButton instanceof HTMLButtonElement)) return;

      const selectedCategory = selectedButton.dataset.category;
      let visibleCount = 0;
      filterButtons.querySelectorAll("button").forEach((button) => {
        button.setAttribute("aria-pressed", String(button === selectedButton));
      });
      serviceCards.forEach((card) => {
        const matches = selectedCategory === "all" || card.dataset.categories?.split(" ").includes(selectedCategory);
        card.hidden = !matches;
        if (matches) visibleCount++;
      });
      resultCount.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "capability" : "capabilities"}`;
    });

    const consultingCard = serviceCards.find((card) => card.querySelector("h2")?.textContent.startsWith("Consulting"));
    const consultingList = consultingCard?.querySelector("ul");
    const additionalCapabilities = [
      "Enterprise mobile management, including BYOD services",
      "UTM security, UPS for home and enterprise, and IP/CCTV cameras",
      "End-user devices from HP, Dell, and Lenovo; Microsoft Surface and Apple devices"
    ];
    additionalCapabilities.forEach((capability) => {
      const item = document.createElement("li");
      item.textContent = capability;
      consultingList?.append(item);
    });
  }

  if (currentPage === "about") {
    const companyOverview = main.querySelector(".split-section");
    const companyStory = companyOverview?.querySelector(".body-copy");
    const profileNote = document.createElement("p");
    profileNote.textContent = "We started our journey five years ago and have helped numerous customers with IT setup, tailoring solutions to their needs.";
    companyStory?.insertBefore(profileNote, companyStory.querySelector("a"));

    const purposeSection = document.createElement("section");
    purposeSection.className = "purpose-band";
    purposeSection.innerHTML = `
      <div class="wrap purpose-grid">
        <article><p class="eyebrow">Our mission</p><h2>More opportunity<br>for everyone.</h2><p>We help people achieve independence by making it easier to start, run, and grow a business. We believe the future of commerce has more voices, not fewer, so we're reducing the barriers to business ownership to make commerce better for everyone.</p></article>
        <article><p class="eyebrow">Our vision</p><h2>Customer success,<br><span>through technology.</span></h2><p>To strive towards customer success by understanding evolving customer IT needs with in-depth knowledge of the changing technology landscape. We drive for excellence to develop long-term relationships with customers.</p></article>
      </div>`;
    companyOverview?.after(purposeSection);
  }
  footer.innerHTML = `
    <footer class="site-footer"><div class="section-frame"><div class="footer-main"><div><a class="site-logo footer-logo" href="index.html" aria-label="SpeedUp Infosolutions Pvt. Ltd. home"><img src="Picture1.png" alt=""></a><p>Innovative IT for<br>customer success.</p></div><div class="footer-links"><span class="eyebrow">Explore</span><a href="about.html">About Us</a><a href="services.html">Hardware &amp; Infra</a><a href="approach.html">Approach</a><a href="work.html">Capabilities</a><a href="faq.html">FAQs</a></div><div class="footer-links"><span class="eyebrow">Contact</span><a href="contact.html">Contact us</a><a href="tel:9013026686">9013026686</a><a href="mailto:haiderbazmi@speedupinfo.in.net">haiderbazmi@speedupinfo.in.net</a></div></div><div class="footer-bottom"><span>&copy; ${new Date().getFullYear()} SpeedUp Infosolutions Pvt. Ltd.</span><span>Innovative IT solutions. Customer success.</span><a href="https://templatemo.com" target="_blank" rel="noreferrer">Template by TemplateMo</a></div></div></footer>`;
}

const mainNav = document.querySelector("#mainNav");
const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobileMenu");
let menuScrollY = 0;
mainNav?.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", () => mainNav?.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

hamburger?.addEventListener("click", () => {
  const isOpen = mobileMenu?.classList.contains("open") ?? false;
  if (isOpen) {
    mobileMenu?.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open menu");
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo({ top: menuScrollY, behavior: "instant" });
  } else {
    menuScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${menuScrollY}px`;
    mobileMenu?.classList.add("open");
    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "Close menu");
  }
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    hamburger?.classList.remove("open");
    hamburger?.setAttribute("aria-expanded", "false");
    hamburger?.setAttribute("aria-label", "Open menu");
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo({ top: menuScrollY, behavior: "instant" });
  });
});

const stickyCards = document.querySelectorAll(".sticky-card");
const panelViews = document.querySelectorAll(".panel-view");
const panelLabel = document.querySelector("#panelLabel");
stickyCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    stickyCards.forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    panelViews.forEach((panel, panelIndex) => panel.classList.toggle("active", panelIndex === index));
    if (panelLabel) panelLabel.textContent = card.querySelector("h3")?.textContent || "IT solutions";
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll(".silk-reveal, .silk-reveal-left, .silk-reveal-right").forEach((element) => revealObserver.observe(element));

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!(form instanceof HTMLFormElement) || !form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Project inquiry from ${data.get("name")}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Company: ${data.get("company") || "Not provided"}`,
    "",
    data.get("message")
  ].join("\n");
  window.location.href = `mailto:haiderbazmi@speedupinfo.in.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});