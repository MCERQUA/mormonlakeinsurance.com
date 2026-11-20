export const COMMERCIAL_INTRO = {
  eyebrow: "Commercial Lines",
  title: "Insurance for Contractors & Businesses in the Mormon Lake Area",
  description:
    "General liability, workers' compensation, commercial auto, builder's risk, surety bonds, umbrella, and business owner's policies for contractors and small businesses working in Mormon Lake and Coconino County.",
  lede: `The businesses that keep the Mormon Lake area running are not office businesses. They are roofers working through a 7,000-foot winter, HVAC and septic crews driving forest service roads to reach a cabin, general contractors framing in the Wildland-Urban Interface, landscapers clearing defensible space, and the lodges, outfitters, and shops that serve everyone else. Each of them needs commercial insurance written for that reality — job-site exposure, work trucks and equipment on unpaved roads, subcontractors, seasonal payroll, and the certificates and bonds that clients and the State of Arizona require before work starts.`,
} as const;

export const COMMERCIAL_AUDIENCE = [
  {
    label: "Roofing",
    detail: "Snow load repairs, ice dam damage, and reroofs — high-hazard class codes and heavy completed-operations exposure.",
  },
  {
    label: "HVAC & Plumbing",
    detail: "Freeze-damage callouts, well pump and septic work, and installed-equipment liability at remote cabins.",
  },
  {
    label: "General Construction",
    detail: "New cabin builds, additions, and remodels — subcontractor risk, builder's risk, and owner-required limits.",
  },
  {
    label: "Landscaping & Defensible Space",
    detail: "Tree removal, brush clearing, and wildfire mitigation work in and around the Coconino National Forest.",
  },
  {
    label: "Excavation & Site Work",
    detail: "Grading, driveways, and utility trenching — underground damage and heavy equipment exposure.",
  },
  {
    label: "Lodges, Shops & Outfitters",
    detail: "Non-contractor small businesses that need property and liability in one packaged policy.",
  },
] as const;

export const COMMERCIAL_LINES = [
  {
    slug: "general-liability",
    title: "General Liability",
    icon: "Shield",
    short:
      "The policy every client, lease, and Forest Service permit asks for. Third-party injury, property damage to others' work, and completed operations claims that arrive months after the job.",
    body: `General liability is the coverage your customers actually check before they hire you. For a contractor working in the Mormon Lake area, three parts of it carry the weight.

**Premises and operations** covers injury and damage caused while the work is underway — a customer or homeowner hurt on your job site, a tool dropped through a skylight, a trench left open on a shared driveway.

**Property damage to others' property** is the one that costs contractors money. Damage to the cabin you are working on, to the finished floors below the bathroom you are re-plumbing, or to a neighbouring structure is a third-party loss. Note what it is not: GL does not pay to redo your own defective work, which is why the damage caused by faulty work and the cost of the faulty work itself get settled differently.

**Completed operations** is the part contractors most often discover too late. Coverage responds to claims arising after you have finished and left. In this area that is a live exposure — a roof installed in September fails under snow load in February, a woodstove flue installed in the fall causes a fire the next winter, a deck built for a rental cabin gives way two seasons later. If the policy lapses or is written without completed-operations coverage, the claim can land with no policy behind it.

Most contractors here start at $1,000,000 per occurrence / $2,000,000 aggregate, because that is what commercial leases, general contractors, and Forest Service special-use permits typically require. Larger projects and public work push those requirements higher, which is where a commercial umbrella comes in.`,
    coverages: [
      "Bodily injury to customers and third parties",
      "Property damage to others' property",
      "Completed operations (post-job claims)",
      "Products liability",
      "Personal & advertising injury",
      "Premises liability on your own location",
      "Contractual liability for lease & contract requirements",
      "Additional insured endorsements for GCs and owners",
    ],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    icon: "HardHat",
    short:
      "Required by Arizona law for essentially every employer with employees. Medical and wage benefits for on-the-job injury, plus the class-code and subcontractor issues that decide what you actually pay.",
    body: `Arizona requires employers with one or more employees — full-time, part-time, or seasonal — to carry workers' compensation. There is no small-payroll exemption to fall back on and no hours threshold below which a worker stops counting. Arizona is a no-fault state, so an injured employee does not have to prove you did anything wrong to receive benefits, and in exchange the policy is generally the exclusive remedy against you. Going uninsured forfeits that protection: the state can assess penalties, and an injured worker can pursue you directly for their full damages.

Two issues decide what a Mormon Lake area contractor actually pays.

**Class codes.** Premium is driven by the classification assigned to each type of work, and construction codes vary enormously — roofing and tree work sit at the high-hazard end, clerical and estimating staff at the low end. Employees doing genuinely different jobs can often be split across codes, but only if payroll records support the split. Misclassification cuts both ways: it inflates premium when it is wrong in the carrier's favour, and produces a large audit bill when it is wrong in yours.

**Uninsured subcontractors.** This is the single most common source of surprise premium in construction. At audit, payments to subcontractors who cannot produce a valid certificate of insurance are typically charged back to your policy as if those workers were your employees. Collecting certificates before a sub starts — and keeping them current through the job — is the cheapest premium control available to a contractor.

Sole proprietors and partners are generally exempt from covering themselves, but many general contractors and property owners will not let an uninsured owner-operator on site, so elective owner coverage is often worth carrying anyway.`,
    coverages: [
      "Statutory Arizona workers' compensation benefits",
      "Medical treatment for work-related injury and illness",
      "Temporary and permanent disability wage benefits",
      "Death benefits for surviving dependents",
      "Employer's liability coverage",
      "Seasonal and part-time employee coverage",
      "Elective owner / officer coverage",
      "Class-code review and payroll audit support",
    ],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    icon: "Truck",
    short:
      "Work trucks, service vans, equipment haulers, and trailers. Rural mileage, elk on Lake Mary Road, and winter grades on SR-87 make this a different risk than a commuter policy.",
    body: `A personal auto policy is written for commuting and errands. Once a vehicle is titled to the business, carries tools and materials, tows a trailer, or has your name on the door, the personal policy can decline the claim on business-use grounds. Commercial auto closes that gap, and for contractors in this area it earns its premium on the road conditions alone.

The driving here is the exposure. Lake Mary Road and SR-87 run through some of Arizona's most active elk and deer corridors, and a wildlife strike in a loaded work truck is a comprehensive claim with a downtime problem attached. Winter grades ice over on shaded sections. Forest service roads are unpaved, rutted after monsoon season, and far enough from a tow that ordinary roadside assistance limits do not reach. Vehicles are also frequently the most visible asset a contractor owns, which makes the liability limit — not the physical damage — the number that matters most in a serious at-fault loss.

Three coverages are worth naming specifically. **Hired and non-owned auto** covers the employee running for materials in their own truck, which is otherwise a genuine hole. **Trailer and towing coverage** matters if you haul a skid steer, a mini-ex, or a dump trailer — the trailer and its contents are usually not automatically insured by the towing vehicle's policy. And **tools and equipment in the vehicle** are generally not auto property at all; they belong under inland marine, covered below.`,
    coverages: [
      "Liability for work trucks, vans, and fleet vehicles",
      "Collision and comprehensive (wildlife, weather, theft)",
      "Uninsured / underinsured motorist",
      "Hired and non-owned auto liability",
      "Trailer and towed-equipment coverage",
      "Enhanced roadside assistance for remote areas",
      "Rental reimbursement / downtime for work vehicles",
      "Medical payments",
    ],
  },
  {
    slug: "builders-risk-inland-marine",
    title: "Builder's Risk & Inland Marine",
    icon: "Hammer",
    short:
      "The structure while it is going up, and your tools and equipment while they move. Two coverages that fill the gap general liability was never meant to cover.",
    body: `General liability pays when you damage someone else's property. It does not pay when the project itself burns, blows down, or is stolen from before it is finished, and it does not pay when your tools disappear from a job site. That is what these two policies do.

**Builder's risk** insures the structure under construction along with materials, fixtures, and equipment intended to become part of it. For Mormon Lake area work the perils are not hypothetical: wildfire and WUI exposure through the summer, wind and snow load through the winter, and theft from a site that sits unattended for days at a time at the end of a forest road. Coverage is written for the duration of the project on a completed-value basis, and it matters who buys it — on an owner-supplied policy, confirm whether the contractor is a named insured, because a policy in the owner's name alone can leave your interest in the work uninsured. Soft costs and delay coverage can be added where a lender or schedule makes that exposure real.

**Inland marine**, in a contractor's world, is tools and equipment coverage — a contractor's equipment floater. It follows the property rather than a location: hand and power tools, compressors, generators, scaffolding, surveying gear, and larger owned or rented equipment, covered in transit, at the job site, and in storage. Rented and leased equipment coverage is the piece contractors most often need on short notice, because rental yards make you responsible for the machine from the moment it leaves the lot.`,
    coverages: [
      "Structure under construction (completed-value basis)",
      "Materials, fixtures, and equipment to be installed",
      "Materials in transit and at temporary storage",
      "Theft and vandalism at unattended job sites",
      "Wildfire, wind, and snow-load perils during construction",
      "Contractor's tools and equipment floater",
      "Rented and leased equipment coverage",
      "Soft costs and delay coverage where required by a lender",
    ],
  },
  {
    slug: "surety-bonds",
    title: "Surety Bonds",
    icon: "FileCheck",
    short:
      "Arizona ROC license bonds, plus performance and payment bonds for bid work. A bond is not insurance — it protects the party you are working for, and you remain liable to the surety.",
    body: `Contractors in Arizona run into bonds in two places, and it is worth being clear that a bond is not an insurance policy. Insurance pays your loss; a surety bond guarantees your obligation to someone else. If the surety pays a claim on your bond, it has the right to seek that money back from you and, in most cases, from the owners who signed the indemnity agreement.

**Arizona contractor license bonds** are a condition of holding a licence with the Registrar of Contractors. The bond amount is set by the ROC based on the licence classification — residential or commercial — and the volume of work you do, so it changes as the business grows and needs to be kept current with the ROC's requirement rather than left at whatever was filed at start-up. Residential licensees also interact with the ROC's Residential Contractors' Recovery Fund, which is a separate mechanism from the bond itself. Letting a bond lapse puts the licence at risk, which in practice puts every job in progress at risk.

**Performance and payment bonds** appear when you bid work for a public entity or a larger general contractor. A performance bond guarantees you will complete the contract; a payment bond guarantees your subs and suppliers get paid. Qualifying is an underwriting process closer to a bank's than an insurer's — the surety looks at your financial statements, working capital, credit, and completed-job history, and it takes time. If public or institutional work is on your roadmap, start the surety relationship before the bid, not after you win it. Bid bonds, supply bonds, and licence and permit bonds round out the set.`,
    coverages: [
      "Arizona ROC contractor license bonds",
      "Bid bonds",
      "Performance bonds",
      "Payment bonds (subcontractors and suppliers)",
      "Supply and subdivision bonds",
      "License and permit bonds",
      "Bond capacity review as your volume grows",
      "Guidance on indemnity and surety underwriting requirements",
    ],
  },
  {
    slug: "commercial-umbrella",
    title: "Commercial Umbrella",
    icon: "Umbrella",
    short:
      "Excess limits sitting above your general liability, commercial auto, and employer's liability — usually the cheapest way to meet a $2M or $5M contract requirement.",
    body: `An umbrella does two things. It adds limit above the policies it sits over, and it is very often the cheapest way to satisfy a contract that demands more coverage than your primary policies carry.

The limit question is simplest to see through commercial auto. A serious at-fault accident involving a loaded work truck on SR-87 — multiple vehicles, injuries, a helicopter transport out of a rural stretch of highway — can exhaust a $1,000,000 auto liability limit before the medical bills are finished. Everything above the primary limit is the business's own money, and for most contractors that means the trucks, the equipment, and the business itself. The same arithmetic applies to a completed-operations claim where a failure causes injury rather than just property damage.

The contract question is more common day to day. General contractors, resorts and lodges, municipalities, and Forest Service permits routinely require $2,000,000 or $5,000,000 in total limits. Buying that limit inside the primary GL policy is usually far more expensive than layering an umbrella over a $1M primary — and the umbrella follows your auto and employer's liability at the same time.

Two details decide whether an umbrella actually responds. It sits over **scheduled** underlying policies, so a coverage you left off the schedule gets no excess limit. And the underlying limits have to be maintained at the amounts the umbrella requires — reducing a primary limit mid-term can leave a gap the umbrella will not fill.`,
    coverages: [
      "Excess general liability limits",
      "Excess commercial auto liability",
      "Excess employer's liability",
      "Limits to satisfy $2M and $5M contract requirements",
      "Completed operations excess coverage",
      "Additional insured status carried through where allowed",
      "Layered limits as project size increases",
      "Coordination with scheduled underlying policies",
    ],
  },
  {
    slug: "business-owners-policy",
    title: "Business Owner's Policy (BOP)",
    icon: "Building2",
    short:
      "Property and liability packaged for non-contractor small businesses — lodges, shops, outfitters, and guide services with a location, inventory, and customers on site.",
    body: `A business owner's policy bundles commercial property and general liability into one package, usually with business income coverage included. It is built for smaller businesses with a fixed location and manageable liability, which describes most of the non-contractor commercial risk in the Mormon Lake area: lodges and cabins rented to guests, the general store, gift shops, restaurants, guide and outfitter offices, and marina or rental operations.

**Property** covers the building if you own it, along with your business personal property — inventory, fixtures, kitchen equipment, rental gear, point-of-sale systems, and tenant improvements you paid for in a leased space. For a business at 7,000 feet, ask specifically about snow load, freeze and burst-pipe damage, and how the policy responds during a seasonal closure, because a policy written for a year-round urban storefront may treat a shoulder-season vacancy as a coverage issue.

**Business income** is the coverage that most often decides whether a seasonal business survives a loss. If a fire, a burst pipe, or a wildfire evacuation closes you for six weeks, the property policy rebuilds the building and business income replaces the earnings you lost while it happened. In a tourism economy where much of the year's revenue arrives in a few months, timing matters as much as the limit — a closure in July is a different loss than the same closure in February. Civil authority coverage, which can respond when access is cut off by an official order such as a wildfire closure, is worth confirming rather than assuming.

Businesses that serve alcohol need liquor liability, and anyone taking payment cards should review cyber and data-breach coverage — neither is automatically part of a standard BOP.`,
    coverages: [
      "Commercial property — building and contents",
      "Business personal property and inventory",
      "Tenant improvements and betterments",
      "General liability and premises coverage",
      "Business income and extra expense",
      "Civil authority coverage for evacuation orders",
      "Equipment breakdown",
      "Optional liquor liability and cyber coverage",
    ],
  },
] as const;

export const COMMERCIAL_REQUIREMENTS = [
  {
    title: "Certificates of insurance",
    detail:
      "Most general contractors and property owners want a COI before you start, and many want to be named as additional insured. Tell us who is asking and what wording they require — we issue certificates the same day.",
  },
  {
    title: "Additional insured & waiver of subrogation",
    detail:
      "Contracts frequently require both, sometimes on a primary and non-contributory basis. These are endorsements to your policy, not defaults; they have to be added before the contract is signed.",
  },
  {
    title: "Collect your subs' certificates",
    detail:
      "Payments to subcontractors who cannot produce valid coverage are typically charged back to your workers' comp and GL policies at audit. Collecting certificates up front is the cheapest premium control you have.",
  },
  {
    title: "Keep the ROC bond current",
    detail:
      "Arizona sets the bond amount by licence classification and volume of work. As the business grows, the required amount changes — and a lapsed bond puts the licence, and every job in progress, at risk.",
  },
] as const;

export const COMMERCIAL_FAQS = [
  {
    q: "What insurance does a contractor need to work in the Mormon Lake area?",
    a: "For most contractors the baseline is general liability, workers' compensation if you have any employees, and commercial auto for work vehicles. Add builder's risk on new construction, an equipment floater for tools, an Arizona ROC license bond to hold your licence, and a commercial umbrella when a contract requires limits above your primary policies. What you actually need is usually driven by two things: the work you perform and what your contracts require you to carry.",
  },
  {
    q: "How much general liability insurance do contractors in Coconino County need?",
    a: "$1,000,000 per occurrence / $2,000,000 aggregate is the common starting point, because that is what most commercial leases, general contractors, and Forest Service special-use permits require. Larger projects, public work, and institutional clients often require $2M or $5M in total limits, which is usually cheaper to reach with an umbrella over a $1M primary than by raising the primary limit itself.",
  },
  {
    q: "Do I need workers' compensation for one part-time or seasonal employee?",
    a: "Yes. Arizona requires workers' compensation for employers with one or more employees, and there is no exemption based on hours worked or length of employment. A seasonal crew member working part of the summer counts the same as a full-time year-round employee. Sole proprietors and partners are generally exempt from covering themselves, but many general contractors will not allow an uninsured owner-operator on site.",
  },
  {
    q: "Will my personal auto policy cover my work truck?",
    a: "Often not. Personal auto policies are written for personal use, and carriers can deny a claim on business-use grounds — particularly if the vehicle is titled to the business, lettered with your company name, carries tools and materials, or tows a trailer. Commercial auto also adds coverages a personal policy does not have, including hired and non-owned auto for employees running errands in their own vehicles.",
  },
  {
    q: "Is a contractor license bond the same as insurance?",
    a: "No, and the difference matters. Insurance pays your loss. A surety bond guarantees your obligation to someone else — if the surety pays a claim on your bond, it has the right to recover that money from you and typically from the owners who signed the indemnity agreement. A bond satisfies a licensing or contract requirement; it does not protect your business the way a liability policy does.",
  },
  {
    q: "Does general liability cover damage to my own work?",
    a: "Generally no. General liability covers damage to other people's property, not the cost of redoing your own defective work. If faulty work causes damage to something else — a bad flashing detail that soaks the framing and drywall below — the resulting damage is usually a covered third-party loss, while the cost of correcting the flashing itself is not. This distinction catches contractors out more than any other part of the policy, and it is worth reviewing against the specific work you perform.",
  },
  {
    q: "Can you write commercial insurance for a business that is not a contractor?",
    a: "Yes. Lodges, shops, restaurants, outfitters, guide services, and other small businesses in the area are typically written on a business owner's policy that packages property, liability, and business income together. For seasonal operations we pay particular attention to business income and how the policy treats an off-season closure, since a claim in July is a very different loss than the same claim in February.",
  },
] as const;
