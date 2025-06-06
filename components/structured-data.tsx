export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": "https://www.valentinagp.ie/#organization",
    name: "Valentia GP Clinic",
    alternateName: "Valentia Road Medical Centre",
    description:
      "Family healthcare practice in Cahersiveen, Co. Kerry, providing comprehensive medical services with Dr. Miguel Casali",
    url: "https://www.valentinagp.ie",
    logo: "https://www.valentinagp.ie/images/logo-main.webp",
    image: "https://www.valentinagp.ie/images/clinic-exterior.png",
    telephone: "+353669473555",
    email: "admin@valentiaroadgp.ie",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Valentia Road Medical Centre, Main Street",
      addressLocality: "Cahersiveen",
      addressRegion: "Kerry",
      addressCountry: "IE",
      postalCode: "V23 D920",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.9479",
      longitude: "-10.2242",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
        opens: "09:00",
        closes: "13:00",
        description: "Morning Session",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
        opens: "15:00",
        closes: "17:00",
        description: "Afternoon Session",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "09:00",
        closes: "13:00",
        description: "Morning Session Only",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "14:00",
        closes: "15:00",
        description: "Lab Results Collection",
      },
    ],
    medicalSpecialty: "General Practice",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "General Consultation",
      },
      {
        "@type": "MedicalProcedure",
        name: "Diabetes Management",
      },
      {
        "@type": "MedicalProcedure",
        name: "Chronic Disease Management",
      },
      {
        "@type": "MedicalProcedure",
        name: "Vaccinations",
      },
      {
        "@type": "MedicalProcedure",
        name: "Health Screening",
      },
      {
        "@type": "MedicalProcedure",
        name: "Video Consultations",
      },
      {
        "@type": "MedicalProcedure",
        name: "Repeat Prescriptions",
      },
    ],
    paymentAccepted: ["Cash", "Card", "GMS"],
    currenciesAccepted: "EUR",
    priceRange: "€€",
    areaServed: [
      {
        "@type": "City",
        name: "Cahersiveen",
      },
      {
        "@type": "AdministrativeArea",
        name: "South Kerry",
      },
      {
        "@type": "AdministrativeArea",
        name: "Iveragh Peninsula",
      },
      {
        "@type": "City",
        name: "Waterville",
      },
      {
        "@type": "City",
        name: "Portmagee",
      },
      {
        "@type": "City",
        name: "Valentia Island",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "32",
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Local Patient",
      },
      reviewBody: "Excellent healthcare service with Dr. Casali and his team.",
    },
  }

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://www.valentinagp.ie/#physician",
    name: "Dr. Miguel Casali",
    givenName: "Miguel",
    familyName: "Casali",
    honorificPrefix: "Dr.",
    jobTitle: "General Practitioner",
    description:
      "Experienced General Practitioner with over 30 years in family medicine, serving Cahersiveen and South Kerry since 1990",
    image: "https://www.valentinagp.ie/images/dr-casali-headshot-new.png",
    telephone: "+353669473555",
    medicalSpecialty: "General Practice",
    yearsOfExperience: "30+",
    worksFor: {
      "@id": "https://www.valentinagp.ie/#organization",
    },
    workLocation: {
      "@type": "MedicalOrganization",
      "@id": "https://www.valentinagp.ie/#organization",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Buenos Aires",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.valentinagp.ie/#website",
    url: "https://www.valentinagp.ie",
    name: "Valentia GP Clinic",
    description: "Official website of Valentia GP Clinic in Cahersiveen, Kerry",
    publisher: {
      "@id": "https://www.valentinagp.ie/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.valentinagp.ie/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.valentinagp.ie/#localbusiness",
    name: "Valentia GP Clinic",
    image: "https://www.valentinagp.ie/images/clinic-exterior.png",
    telephone: "+353669473555",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Valentia Road Medical Centre, Main Street",
      addressLocality: "Cahersiveen",
      addressRegion: "Kerry",
      postalCode: "V23 D920",
      addressCountry: "IE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.9479,
      longitude: -10.2242,
    },
    url: "https://www.valentinagp.ie",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
        opens: "15:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    priceRange: "€€",
    hasMap: "https://g.co/kgs/347UQG7",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(physicianSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  )
}
