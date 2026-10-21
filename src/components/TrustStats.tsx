const TrustStats = () => {
  return (
    <section className="w-full bg-trust-navy text-surface-container-lowest py-space-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-lg text-center divide-y md:divide-y-0 md:divide-x divide-surface-container/10">
          <div className="flex flex-col items-center p-space-sm">
            <span className="font-metric-display text-metric-display text-primary-container">0%</span>
            <span className="font-headline-md text-headline-md mt-space-xs">Visa &amp; Admission</span>
            <span className="font-body-sm text-body-sm text-surface-container-high mt-1">Consistent success across premier intakes</span>
          </div>
          <div className="flex flex-col items-center p-space-sm">
            <span className="font-metric-display text-metric-display text-primary-container">0+</span>
            <span className="font-headline-md text-headline-md mt-space-xs">Students Placed</span>
            <span className="font-body-sm text-body-sm text-surface-container-high mt-1">Across top medical, engineering &amp; B-schools</span>
          </div>
          <div className="flex flex-col items-center p-space-sm">
            <span className="font-metric-display text-metric-display text-primary-container">0+</span>
            <span className="font-headline-md text-headline-md mt-space-xs">Partner Institutions</span>
            <span className="font-body-sm text-body-sm text-surface-container-high mt-1">Accredited colleges in India &amp; worldwide</span>
          </div>
          <div className="flex flex-col items-center p-space-sm">
            <span className="font-metric-display text-metric-display text-primary-container">0%</span>
            <span className="font-headline-md text-headline-md mt-space-xs">Honest Guidance</span>
            <span className="font-body-sm text-body-sm text-surface-container-high mt-1">Transparent, zero hidden fees counselling</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustStats
