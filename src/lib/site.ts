export const SITE = {
  name: "Mormon Lake Insurance",
  domain: "mormonlakeinsurance.com",
  url: "https://mormonlakeinsurance.com",
  tagline: "Insurance for Mormon Lake, AZ — Cabins, Homes, Auto & Recreation",
  description:
    "Independent insurance agency serving Mormon Lake, AZ and Northern Arizona's mountain communities. Coverage for cabins, second homes, auto, recreational vehicles, and property in the Coconino National Forest area. Free quotes from 12+ carriers.",
  phone: "844-967-5247",
  phoneHref: "tel:+18449675247",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  statesLicensed: "All 50 states",
} as const;

export const SERVICES = [
  {
    slug: "cabin-insurance",
    title: "Cabin Insurance",
    short:
      "Specialized coverage for mountain cabins, second homes, and vacation properties in the Mormon Lake area — wildfire, snow load, freeze damage, and vacancy protection.",
    icon: "Home",
    description:
      "Mormon Lake cabins face a unique combination of wildfire exposure, heavy snow loads, freeze damage, and seasonal vacancy that standard homeowners policies were never designed to handle. We specialize in mountain cabin insurance that actually covers the risks you face.",
    longDescription: `Mormon Lake sits at roughly 7,000 feet elevation in the Coconino National Forest, surrounded by ponderosa pine and mixed conifer forest. The area is Arizona's premier destination for mountain cabins, second homes, and vacation properties — and that means insurance needs that go far beyond what a standard homeowners policy covers.

## Wildfire and WUI Exposure

The entire Mormon Lake area falls within Arizona's Wildland-Urban Interface (WUI) zone, placing cabins squarely in high wildfire risk territory. The 2010 Schultz Fire, 2019 Museum Fire, 2022 Pipeline Fire, and 2024 Tuttle Fire all burned within striking distance of the Mormon Lake community. Standard homeowners policies cover fire damage, but after major regional fire events, carriers routinely restrict new business or non-renew existing policies in WUI zones.

This is where working with an independent agency is critical. When one carrier pulls back, we shop others still actively writing in the Mormon Lake area. We also help you document defensible space, fire-resistant improvements, and other mitigation measures that some carriers reward with lower rates or broader coverage.

## Snow Load Damage

At 7,000 feet, Mormon Lake receives significant annual snowfall — often exceeding 100 inches in heavy winters. The accumulated weight on cabin roofs creates structural stress, particularly on older cabins with flat or low-pitch roofs, or those with added layers of roofing material over the years. Snow load can cause roof collapse, especially on structures that sit vacant during the heaviest snow months.

Most cabin insurance policies include coverage for snow load collapse, but coverage limits and deductibles vary significantly by carrier. We evaluate your cabin's construction type, roof pitch, age, and exposure to ensure you have adequate snow load coverage.

## Freeze Damage — The Silent Destroyer

When cabins sit unoccupied during winter months — which most Mormon Lake cabins do — frozen pipes are the number one cause of property damage. Water pipes freeze and burst, releasing hundreds of gallons of water over days or weeks before anyone discovers the damage. The resulting destruction to flooring, walls, cabinetry, and personal property can reach tens of thousands of dollars.

Standard homeowners policies often contain vacancy clauses that reduce or eliminate coverage after a home has been unoccupied for 30 to 60 consecutive days. Cabin insurance policies designed for seasonal properties either remove these vacancy restrictions entirely or offer endorsements that maintain full coverage during extended vacancy periods. This distinction alone can mean the difference between a covered claim and a total denial.

## Vacancy and Seasonal Coverage

Most Mormon Lake cabins are used seasonally — weekends in summer, occasional hunting trips in fall, and largely vacant from November through April. Standard insurance policies are written for primary residences where someone lives year-round. When a home sits empty for weeks or months, the risk profile changes completely:

- **Undetected damage** — a burst pipe, roof leak, or break-in may go unnoticed for weeks
- **Increased theft risk** — unoccupied properties are attractive targets
- **Liability exposure** — someone injured on your vacant property still generates a claim
- **Maintenance gaps** — no one is there to clear snow from the roof, maintain heating systems, or check for damage

We work with carriers that specialize in seasonal and vacation property insurance, ensuring your cabin is protected 365 days a year regardless of whether anyone is there.

## Bear and Wildlife Damage

Mormon Lake's forest setting means regular encounters with black bears, elk, deer, raccoons, and other wildlife. Bears breaking into cabins seeking food are a recurring problem, particularly in late summer and fall before hibernation. Damage from a bear break-in — torn doors, broken windows, destroyed cabinetry, contaminated food supplies — can be extensive.

Most standard homeowners policies exclude animal damage beyond specific covered perils like fire or collision. We ensure your policy includes or can endorse coverage for bear and wildlife damage, which is a common claim in the Mormon Lake area.

## What We Cover

- **Dwelling coverage** — structural damage from fire, wind, snow load, hail, and wildlife
- **Vacancy protection** — full coverage during seasonal vacancy periods
- **Freeze damage** — burst pipes and water damage from frozen plumbing
- **Wildlife and bear damage** — break-ins and property destruction by animals
- **Personal property** — furniture, appliances, and belongings at your cabin
- **Liability** — injuries to visitors, hunters, or hikers on your property
- **Other structures** — detached garages, sheds, barns, and outbuildings
- **Additional living expenses** — temporary housing if your cabin becomes uninhabitable

Contact us for a free cabin insurance review. We'll evaluate your property, identify coverage gaps in your current policy, and compare rates from carriers experienced with mountain cabin risk.`,
    coverages: [
      "Dwelling (structure) coverage",
      "Seasonal vacancy protection",
      "Freeze damage / burst pipes",
      "Wildfire & WUI fire coverage",
      "Snow load collapse",
      "Bear & wildlife damage",
      "Personal property protection",
      "Liability for visitors & recreation",
    ],
    faqs: [
      {
        q: "Does standard homeowners insurance cover my Mormon Lake cabin?",
        a: "Standard homeowners policies may cover your cabin initially, but most contain vacancy clauses that reduce or eliminate coverage after 30–60 days of being unoccupied. Since most Mormon Lake cabins sit vacant for months during winter, this creates a significant coverage gap. Cabin insurance policies are specifically designed to maintain full coverage during seasonal vacancy periods, plus add protections for freeze damage, snow load, and wildlife that standard policies don't address.",
      },
      {
        q: "What happens if a bear breaks into my cabin?",
        a: "Bear break-ins are a real and common problem in the Mormon Lake area. Many standard homeowners policies exclude animal damage unless it's tied to a specifically covered peril. We work with carriers that include or can endorse coverage for wildlife and bear damage, including broken doors, windows, cabinetry, and contaminated food supplies. When reviewing your cabin insurance, always ask specifically about animal damage coverage.",
      },
      {
        q: "How much does cabin insurance cost in the Mormon Lake area?",
        a: "Cabin insurance in the Mormon Lake area typically runs $1,500–$4,000 per year depending on the cabin's value, construction type, age, proximity to wildfire risk zones, and whether it's occupied year-round or seasonally. Cabins with wood shake roofs, older electrical systems, or limited defensible space may cost more. We compare rates from multiple carriers to find competitive pricing for your specific property.",
      },
      {
        q: "Does cabin insurance cover my cabin when I'm not there in winter?",
        a: "That depends on the policy. Standard homeowners policies often have vacancy exclusions that kick in after 30–60 days of unoccupancy. The cabin insurance policies we place are specifically designed for seasonal properties and maintain full coverage regardless of how long the cabin sits vacant. This includes protection for freeze damage, burst pipes, undetected leaks, break-ins, and wildlife damage — the most common claims for unoccupied mountain cabins.",
      },
    ],
  },
  {
    slug: "auto-insurance",
    title: "Auto Insurance",
    short:
      "Auto insurance for rural Coconino County driving. Wildlife collisions, forest roads, remote towing, and SR-87/Lake Mary Road coverage.",
    icon: "Car",
    description:
      "Driving in the Mormon Lake area means SR-87, Lake Mary Road, forest service roads, and some of Arizona's most active elk and deer crossing zones. Rural driving demands the right auto coverage.",
    longDescription: `The roads around Mormon Lake are a world away from city driving. SR-87 (the Beeline Highway) climbs from the Valley to 7,000 feet through some of Arizona's most active wildlife corridors. Lake Mary Road connects Mormon Lake to Flagstaff through dense forest. Forest service roads — unpaved, unmapped, and often maintained only by the Forest Service — lead to trailheads, campsites, and remote cabins. Each of these driving environments creates insurance risks that standard auto policies may not adequately address.

## Wildlife Collisions — Elk, Deer, and More

Northern Arizona has one of the highest wildlife collision rates in the state. The SR-87 corridor between Payson and Winslow, Lake Mary Road, and the forest roads surrounding Mormon Lake all rank as high-risk zones for elk and deer collisions. An average elk-vehicle collision causes $5,000–$15,000 in vehicle damage, and a moose or elk strike at highway speeds can cause serious injuries.

Wildlife collisions are covered under comprehensive coverage — not collision. If you carry only liability (the state minimum), you absorb 100% of the vehicle repair cost when you hit an elk. For Mormon Lake area drivers, comprehensive coverage is strongly recommended.

## SR-87 and Lake Mary Road Risks

SR-87 climbs from the Phoenix area through Payson, Pine, Strawberry, and up to the Mogollon Rim before descending into the Mormon Lake area. The highway features steep grades, tight curves, and dramatic elevation changes that create accident risk — particularly in winter when ice and snow accumulate on shaded sections of the road.

Lake Mary Road runs between Flagstaff and Mormon Lake through dense ponderosa pine forest. The road is narrow, winding, and sees heavy use from campers, boaters, and anglers heading to Mormon Lake and Upper Lake Mary. Wildlife crossings are frequent, particularly at dawn and dusk.

## Forest Road Driving

Many Mormon Lake residents regularly drive unpaved forest service roads to access cabins, trailheads, and recreation areas. These roads are typically unmaintained in winter, rutted from summer monsoons, and far from towing services. Rock damage to vehicles, flat tires from debris, and getting stuck are common occurrences.

Some auto insurance policies have exclusions or limitations for driving on unmaintained roads. We verify that your policy covers forest service road use and that your roadside assistance coverage works in remote areas where cell service is unreliable.

## Remote Area Towing and Roadside Assistance

When your vehicle breaks down on Lake Mary Road or a forest service road near Mormon Lake, you may be 20+ miles from the nearest tow service and completely without cell coverage. Standard roadside assistance packages often have distance limitations or may not service remote forest roads at all.

We recommend enhanced roadside assistance coverage that includes longer towing distances, off-road extraction, and coverage in areas without cell service. Some carriers offer specialized packages designed for rural and mountain driving.

## Uninsured Motorist Risk

Arizona's uninsured driver rate is estimated at 11–12% of all registered vehicles — one of the highest rates in the nation. On rural roads like those around Mormon Lake, the risk is arguably higher because there are fewer witnesses and less law enforcement presence to deter uninsured driving. Uninsured motorist (UM) coverage protects you when an at-fault driver carries no insurance — without it, you pay your own medical bills and vehicle repairs.

## What We Cover

- **Liability** — Bodily injury and property damage to others
- **Collision** — Your vehicle's damage in an accident, regardless of fault
- **Comprehensive** — Weather, theft, vandalism, wildlife collisions
- **Uninsured / Underinsured Motorist** — Protection when the other driver can't pay
- **Medical Payments** — Your medical costs after an accident
- **Roadside Assistance** — Towing, tire changes, and emergency service in remote areas
- **Rental Reimbursement** — Rental vehicle while yours is being repaired

Call us for a free comparison quote. We shop 12+ carriers to find the best rate for your Mormon Lake area driving profile.`,
    coverages: [
      "Bodily injury & property damage liability",
      "Collision coverage",
      "Comprehensive (wildlife, weather, theft)",
      "Uninsured / underinsured motorist",
      "Medical payments",
      "Enhanced roadside assistance",
      "Rental reimbursement",
      "Forest road & off-road coverage",
    ],
    faqs: [
      {
        q: "Does my auto insurance cover elk and wildlife collisions on Lake Mary Road?",
        a: "Yes — wildlife collisions are covered under comprehensive coverage, which also covers weather damage, theft, and vandalism. If you carry only the state minimum liability, you are not covered for wildlife collisions and would pay the full repair cost out of pocket. For Mormon Lake area drivers, comprehensive coverage is essential. Average elk-vehicle damage runs $5,000–$15,000.",
      },
      {
        q: "Will my auto insurance cover me on forest service roads?",
        a: "Most standard auto policies cover driving on public roads, which includes most forest service roads. However, some policies may have limitations or exclusions for unmaintained roads or off-road use. We verify that your policy specifically covers forest service road driving and recommend enhanced roadside assistance that works in remote areas without cell service.",
      },
      {
        q: "What auto insurance coverage do I need for winter driving around Mormon Lake?",
        a: "For Mormon Lake area winter driving, we recommend at minimum: liability limits of 100/300/100, comprehensive and collision coverage, uninsured motorist coverage, and enhanced roadside assistance with long-distance towing. SR-87 and Lake Mary Road see significant ice and snow from November through March, and black ice on shaded sections is a persistent hazard. If you drive a truck or SUV for winter access to your cabin, consider adding gap coverage if the vehicle is financed.",
      },
    ],
  },
  {
    slug: "home-insurance",
    title: "Home Insurance",
    short:
      "Primary residence insurance for Mormon Lake and surrounding communities. Wildfire, snow load, rural fire protection, well water, and power outage coverage.",
    icon: "Shield",
    description:
      "Mormon Lake homeowners face wildfire exposure, heavy snow loads, volunteer fire department coverage, well water systems, and power outages that demand specialized insurance protection.",
    longDescription: `While cabin insurance covers seasonal and vacation properties, homeowners insurance for primary residences in the Mormon Lake area addresses a different set of needs — and risks. Mormon Lake is a small but growing community where full-time residents face challenges unique to rural mountain living: wildfire risk, snow load, limited fire protection infrastructure, well and septic systems, and unreliable power.

## Wildfire and WUI Protection

Mormon Lake sits within the Coconino National Forest at approximately 7,000 feet elevation. Virtually every home in the community is in a Wildland-Urban Interface (WUI) zone, making wildfire the single largest threat to property. Recent fire history — the Schultz Fire (2010), Museum Fire (2019), Pipeline Fire (2022), and Tuttle Fire (2024) — demonstrates that wildfire risk in this area is not theoretical.

Homeowners insurance covers fire damage, including wildfire. But after major regional fire events, carriers periodically restrict or exit the market. An independent agency ensures continuity of coverage when one carrier pulls back — we simply move your policy to another carrier still actively writing in the Mormon Lake area.

## Rural Fire Protection — Volunteer Departments

Many communities around Mormon Lake rely on volunteer fire departments rather than full-time professional services. This affects insurance in two ways. First, some carriers increase rates for homes protected by volunteer departments due to longer response times. Second, homes located far from the nearest fire station or fire hydrant (and there are no hydrants in most of the Mormon Lake area) may face surcharges or coverage limitations.

We work with carriers that understand and fairly price rural fire protection, rather than penalizing homeowners for infrastructure limitations that are beyond their control.

## Snow Load and Winter Damage

At 7,000 feet, Mormon Lake receives heavy annual snowfall. Snow load damage to roofs, ice dam formation, and frozen pipes are the most common winter-related homeowners claims in the area. Ice dams form when meltwater refreezes at roof edges and backs up under shingles, causing water damage to ceilings, walls, and insulation. Frozen and burst pipes affect both occupied and vacant homes, though the damage is typically far worse in unoccupied properties where problems go undetected.

Replacement cost coverage is strongly recommended over actual cash value (ACV) for Mormon Lake homeowners. ACV deducts depreciation from your payout — a 20-year-old roof might pay only 20–30% of replacement cost. In a post-fire environment where construction costs spike, extended replacement cost endorsements that add 20–50% above your policy limits are especially valuable.

## Well Water and Septic Systems

Most Mormon Lake area homes rely on well water and septic systems rather than municipal utilities. Well pump failures, contaminated well water, and septic system backups can cause significant property damage. Standard homeowners policies offer limited coverage for these systems. We evaluate whether additional endorsements for water backup and sump overflow are needed, and whether your well pump and septic system have adequate coverage.

## Power Outages and Generator Coverage

Mormon Lake area residents experience frequent and sometimes extended power outages, particularly during winter storms and summer monsoons. When the power goes out for days, frozen pipes, spoiled food, and sump pump failures become real risks. We recommend either generator coverage endorsements or standalone equipment breakdown policies that cover generator failures.

## What We Cover

- **Dwelling coverage** — Structure of your home and attached structures
- **Personal property** — Furniture, clothing, electronics, and belongings
- **Liability** — Injuries to guests and damage to others' property
- **Additional living expenses** — Hotel and living costs while your home is repaired
- **Other structures** — Detached garages, sheds, workshops
- **Well and septic coverage** — Water system failures and backups
- **Extended replacement cost** — 20–50% above policy limits for post-disaster inflation
- **Generator and equipment breakdown** — Power outage related losses

Call us for a free homeowners insurance review. We compare rates from 12+ carriers and identify the best combination of coverage and price for your Mormon Lake area home.`,
    coverages: [
      "Dwelling (structure) coverage",
      "Personal property protection",
      "Liability coverage",
      "Additional living expenses",
      "Other structures coverage",
      "Extended replacement cost endorsement",
      "Well water & septic system coverage",
      "Power outage & generator protection",
    ],
    faqs: [
      {
        q: "Does home insurance cover wildfire damage at Mormon Lake?",
        a: "Yes — standard homeowners insurance covers fire damage including wildfire. However, Mormon Lake's location within the Coconino National Forest WUI zone means some carriers periodically limit or withdraw from the market after major regional fire events. Working with an independent agency ensures continuity: when one carrier restricts coverage, we move you to another actively writing in the area. We also help you document defensible space and fire-resistant improvements that may qualify for lower rates.",
      },
      {
        q: "How does volunteer fire department coverage affect my insurance rates?",
        a: "Some carriers do increase rates for homes served by volunteer fire departments due to potentially longer response times. The distance from your home to the nearest fire station matters as well — many Mormon Lake area homes are several miles from the closest department. We work with carriers that understand rural fire protection and price it fairly, rather than applying blanket surcharges for volunteer departments.",
      },
      {
        q: "Does my homeowners insurance cover well pump failure or septic backup?",
        a: "Standard homeowners policies offer limited coverage for well and septic systems. Well pump failure, electrical damage to the pump, contaminated water supply, and septic backup may not be fully covered under a basic policy. We recommend reviewing your policy for water backup endorsements and sump overflow coverage, and we can add specific well and septic endorsements where available.",
      },
    ],
  },
  {
    slug: "general-liability-insurance",
    title: "General Liability Insurance",
    short:
      "Commercial general liability for contractors, retail shops, hospitality businesses, and small businesses in Mormon Lake and Coconino County.",
    icon: "Shield",
    description:
      "Every small business in the Mormon Lake area — from contractors and guides to retail shops and lodges — needs general liability insurance to protect against slip-and-fall claims, property damage, and completed operations lawsuits.",
    longDescription: `Coconino County's small business community is the backbone of the Mormon Lake area economy. Contractors building and maintaining cabins, retail shops serving tourists, lodges and restaurants hosting visitors, and professional guides leading outdoor excursions — each of these businesses faces liability exposure that a single lawsuit could threaten to shut down. General liability insurance is the foundation of protection for every small business operating in and around Mormon Lake.

## What General Liability Insurance Covers

General liability (GL) insurance protects your business against the most common liability claims:

- **Bodily injury** — A customer slips on an icy walkway outside your Mormon Lake lodge and breaks a wrist
- **Property damage** — A contractor accidentally damages a client's cabin while performing renovation work
- **Personal and advertising injury** — A competitor claims your advertising is misleading
- **Completed operations** — A client is injured months after you completed a roofing job on their cabin
- **Products liability** — A product you sell or distribute causes harm to a customer

For small businesses in rural Coconino County, where word-of-mouth reputation is everything and legal costs can be devastating, general liability is not optional — it is essential.

## Contractors and Trades Businesses

Mormon Lake and the surrounding area have a steady demand for construction, renovation, and property maintenance. Contractors building mountain cabins, installing septic systems, performing roof repairs after winter storms, and maintaining properties for out-of-state owners all need general liability coverage. Completed operations coverage is particularly critical — if a roof you installed fails during a heavy snow load and damages the interior of a cabin, the claim could arrive months after you finished the job.

General liability for contractors typically carries higher limits than standard business GL because the property damage exposure is greater. Many general contractors and subcontractors in the Mormon Lake area need GL limits of $1 million per occurrence / $2 million aggregate at minimum. Some clients and Forest Service permits require even higher limits.

## Retail and Hospitality Businesses

The Mormon Lake area's tourism economy supports lodges, bed-and-breakfasts, restaurants, general stores, and gift shops. These businesses face classic premises liability exposure — customers on your property can be injured in slip-and-fall accidents, parking lot incidents, or food-related illnesses. Arizona's premises liability laws hold business owners responsible for maintaining safe conditions for customers and visitors.

For hospitality businesses, general liability works alongside property insurance to provide comprehensive protection. Lodges and B&Bs serving food and beverages need additional coverage for liquor liability and food-borne illness claims.

## Professional Services and Guides

Professional guides, outfitters, and instructors operating in the Mormon Lake area need general liability that accounts for the inherent risks of outdoor activities. While outdoor recreation businesses may also carry specialized outdoor recreation insurance, general liability provides the baseline protection for third-party injury and property damage claims.

## Coconino County Business Requirements

Coconino County and the State of Arizona do not legally require general liability insurance for most businesses. However, practical requirements make it unavoidable: commercial leases almost always require proof of GL coverage, government contracts and Forest Service permits mandate specific liability limits, and clients routinely require certificates of insurance before hiring contractors. Operating without GL insurance in the Mormon Lake area is a risk no serious business owner should take.

## What We Cover

- **Bodily injury liability** — Customer, visitor, and third-party injuries
- **Property damage liability** — Damage to client property and third-party assets
- **Completed operations** — Claims arising after work is finished
- **Products liability** — Goods you sell, distribute, or manufacture
- **Personal and advertising injury** — Libel, slander, and copyright claims
- **Premises liability** — Slip-and-fall and on-property injuries
- **Contractual liability** — Coverage required by leases and contracts
- **Medical payments** — Voluntary medical payments regardless of fault

Call us for a free general liability insurance quote. We compare rates from multiple carriers and find the right coverage limits for your Mormon Lake area business.`,
    coverages: [
      "Bodily injury liability",
      "Property damage liability",
      "Completed operations coverage",
      "Products liability",
      "Personal & advertising injury",
      "Premises liability (slip-and-fall)",
      "Contractual liability",
      "Medical payments (voluntary)",
    ],
    faqs: [
      {
        q: "Does Arizona require my small business to carry general liability insurance?",
        a: "Arizona does not have a state law requiring general liability insurance for most businesses. However, practical requirements make it essential: commercial landlords require proof of GL coverage before signing leases, government contracts and Forest Service permits mandate specific liability limits, and most clients require a certificate of insurance before hiring a contractor. Banks and lenders may also require GL coverage for business loans. In the Mormon Lake area, operating without general liability insurance is a significant financial risk.",
      },
      {
        q: "How much general liability insurance do I need for my Mormon Lake area business?",
        a: "Most small businesses in the Mormon Lake area start with $1 million per occurrence / $2 million aggregate in general liability limits. Contractors, hospitality businesses, and businesses with government contracts or Forest Service permits may need $2 million per occurrence or higher. The right limit depends on your industry, the value of work you perform, contractual requirements, and the potential severity of claims in your line of business. We help you evaluate the appropriate level of coverage for your specific situation.",
      },
      {
        q: "Does general liability insurance cover injuries to my employees?",
        a: "No — general liability insurance covers injuries to third parties (customers, visitors, vendors, bystanders), not your own employees. Injuries to your employees are covered by workers' compensation insurance, which is a separate policy required by Arizona state law for most employers. If you have employees working for your Mormon Lake area business, you need both general liability and workers' compensation coverage. We can bundle both coverages to ensure there are no gaps in your protection.",
      },
    ],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation Insurance",
    short:
      "Arizona workers' comp coverage for Mormon Lake area employers — construction crews, hospitality staff, forestry workers, and seasonal employees.",
    icon: "HardHat",
    description:
      "Arizona law requires most employers to carry workers' compensation insurance. Mormon Lake area businesses with employees in construction, hospitality, forestry, and seasonal work need compliant coverage.",
    longDescription: `Under Arizona law (A.R.S. 23-1021), every employer in the state who has employees is required to carry workers' compensation insurance — with very few exceptions. For businesses operating in the Mormon Lake area, where construction, outdoor recreation, hospitality, and forestry are the dominant industries, workers' compensation is not just a legal requirement — it is a critical safety net for both employers and employees.

## Arizona Workers' Compensation Requirements

Arizona is a no-fault workers' compensation state, meaning employees do not need to prove employer negligence to receive benefits. If an employee is injured on the job — regardless of fault — workers' compensation covers:

- **Medical expenses** — All necessary and reasonable medical treatment for work-related injuries and illnesses
- **Lost wages** — Temporary total disability benefits at 66.67% of the employee's average monthly wage, subject to state maximums
- **Permanent disability** — Compensation for permanent partial or total disability resulting from a work-related injury
- **Death benefits** — Benefits to surviving dependents if a work-related injury or illness proves fatal
- **Rehabilitation** — Vocational rehabilitation if the employee cannot return to their previous job

Employers who fail to carry workers' compensation insurance face significant penalties: fines up to $5,000 per employee for the first violation, potential misdemeanor charges, and civil liability for injured employees' full damages — meaning the employer loses the no-fault protection and can be sued for negligence.

## Industry-Specific Risks in the Mormon Lake Area

The industries that drive the Mormon Lake area economy each carry distinct workplace injury risks:

**Construction** — Contractors, carpenters, roofers, and laborers working on cabin construction and renovation face falls from heights, struck-by injuries from tools and materials, electrical hazards, and musculoskeletal injuries from heavy lifting at 7,000 feet elevation. Winter construction work adds cold-weather hazards including frostbite and reduced dexterity.

**Forestry and Land Management** — Workers maintaining forest roads, clearing defensible space, performing timber operations, and conducting wildfire mitigation face chainsaw injuries, falling limb hazards, heavy equipment accidents, and exposure to extreme heat during Arizona's fire season. Many of these workers are employed by small contractors or seasonal operations that may not have dedicated risk management resources.

**Hospitality and Tourism** — Lodge staff, restaurant workers, and retail employees in the Mormon Lake area face slip-and-fall injuries, burns in kitchen environments, repetitive strain injuries, and lifting injuries. Seasonal hiring surges during peak tourist months mean new, inexperienced workers on the job — statistically the most likely to be injured.

**Outdoor Recreation** — Guides, wranglers, and outfitter staff face horse-related injuries, ATV and vehicle accidents, firearms hazards, exposure to extreme weather, and injuries in remote locations far from medical facilities.

## Workers' Compensation Class Codes

Workers' compensation rates in Arizona are based on classification codes that assign each type of work a risk level and corresponding premium rate. Common class codes for Mormon Lake area businesses include:

- **5615 — Carpentry** — Framing, finish work, and cabin construction
- **5537 — Roofing** — Roof installation and repair on mountain cabins
- **8742 — Sales / Clerical** — Retail shop and office staff
- **9015 — Restaurant Operations** — Lodge dining and kitchen staff
- **4016 — Tree Trimming / Landscaping** — Defensible space and vegetation management
- **5403 — Masonry** — Stone work and chimney construction
- **8810 — Clerical Office** — Administrative employees

Accurate class code assignment is essential — misclassifying employees can result in premium penalties or denied claims. We review your operations and ensure every employee is correctly classified.

## Seasonal and Part-Time Workers

Many Mormon Lake area businesses rely on seasonal employees — summer hospitality staff, fall hunting season guides, and winter maintenance crews. Under Arizona law, workers' compensation coverage is required for all employees regardless of hours worked or employment duration. A seasonal guide working 20 hours a week for three months is covered the same as a full-time year-round employee. This is one of the most commonly misunderstood aspects of workers' compensation law, and failure to cover seasonal workers is a frequent source of penalties.

## Independent Contractor vs. Employee

One of the most contentious workers' compensation issues in the Mormon Lake area involves the distinction between employees and independent contractors. Arizona uses a strict multi-factor test — not just what you call the relationship or whether the worker signed a contract. Factors include behavioral control, financial control, and the nature of the relationship. Misclassifying an employee as an independent contractor to avoid workers' compensation premiums can result in severe penalties, back-premium assessments, and loss of the employer's right to raise the independent contractor defense.

## What We Cover

- **Statutory workers' compensation** — Full Arizona-compliant coverage for all employees
- **Accurate class code assignment** — Proper classification for every job type
- **Seasonal worker coverage** — Employees working any hours, any duration
- **Owner/operator coverage** — Optional coverage for business owners (exempt under AZ law but often required by clients)
- **Multi-state coverage** — For businesses with employees working across state lines
- **Payroll auditing** — Accurate premium calculation based on actual payroll
- **Claims management** — Advocacy and support through the claims process
- **Safety resources** — Risk management guidance for high-hazard industries

Call us for a free workers' compensation quote. We understand the industries that drive the Mormon Lake area economy and match your business to carriers experienced with construction, hospitality, forestry, and outdoor recreation risk.`,
    coverages: [
      "Statutory workers' comp (AZ compliant)",
      "Medical expense coverage",
      "Lost wage / disability benefits",
      "Death benefits for dependents",
      "Vocational rehabilitation",
      "Seasonal & part-time employee coverage",
      "Owner/operator optional coverage",
      "Accurate class code classification",
    ],
    faqs: [
      {
        q: "Does Arizona require workers' compensation insurance for my business?",
        a: "Yes — Arizona law (A.R.S. 23-1021) requires all employers with one or more employees to carry workers' compensation insurance. There are very few exceptions: sole proprietors with no employees, certain real estate brokers, and some agricultural employers with small payrolls. For Mormon Lake area businesses with employees in construction, hospitality, retail, or outdoor recreation, workers' compensation is mandatory. Penalties for non-compliance include fines up to $5,000 per employee and potential criminal charges.",
      },
      {
        q: "Do I need workers' comp for seasonal employees at my Mormon Lake business?",
        a: "Yes — Arizona workers' compensation law applies to all employees regardless of how many hours they work or how short their employment period. Seasonal hospitality staff working through the summer, fall hunting guides employed for a few months, and winter maintenance crews are all covered under the same statutory requirements as full-time year-round employees. This is a common source of compliance problems for Mormon Lake area businesses that scale up for peak seasons.",
      },
      {
        q: "What happens if an independent contractor gets injured working for my business?",
        a: "This depends on whether the worker is genuinely classified as an independent contractor under Arizona law. Arizona uses a strict multi-factor test examining behavioral control, financial control, and relationship nature — not just a contract label or 1099 status. If the state determines the worker was actually an employee, you face penalties for failing to carry workers' compensation, back-premium assessments, and potential civil liability. We help Mormon Lake area businesses evaluate their worker classifications to avoid these costly misclassification risks.",
      },
    ],
  },
  {
    slug: "outdoor-recreation-insurance",
    title: "Outdoor Recreation Insurance",
    short:
      "Insurance for fishing guides, hunting outfitters, horseback riding stables, and outdoor recreation businesses operating in the Mormon Lake area.",
    icon: "Trees",
    description:
      "Mormon Lake supports a thriving outdoor recreation economy — fishing guides, hunting outfitters, riding stables, and adventure operators all need specialized commercial insurance.",
    longDescription: `Mormon Lake and the surrounding Coconino National Forest support a diverse outdoor recreation economy. Fishing guides lead trips on the lake and surrounding waters. Hunting outfitters guide elk, deer, and turkey hunts across the forest. Horseback riding stables offer trail rides through the pines. Campgrounds, RV parks, and outdoor event venues serve tourists and locals alike. Each of these businesses carries unique liability exposure that standard commercial insurance doesn't adequately address.

## Why Outdoor Recreation Businesses Need Specialized Insurance

General liability insurance covers the basics — customer slip-and-falls, property damage, and third-party injury. But outdoor recreation businesses face additional risks that standard GL policies either exclude or severely limit:

- **Inherent risk of outdoor activities** — horseback riding injuries, hunting accidents, fishing equipment injuries, ATV riding injuries
- **Remote operation locations** — injuries occurring miles from the nearest road or medical facility
- **Equipment-related liability** — horses, firearms, boats, ATVs, climbing equipment, and other gear
- **Guide and instructor liability** — professional liability for instruction, direction, and guidance
- **Environmental exposure** — operations on public lands, forest service permits, and environmental liability
- **Seasonal revenue patterns** — revenue concentrated in summer and fall hunting seasons

## Fishing Guide and Outfitter Insurance

Mormon Lake fishing guides take clients onto the water in boats, guide wading trips along shorelines, and provide instruction on techniques and equipment. Liability exposure includes boat operation, fishing equipment handling, slip-and-fall on docks and shorelines, and hypothermia or drowning risk. Guide insurance typically includes general liability, professional liability, watercraft liability, and commercial auto for guide vehicles and boat trailers.

## Hunting Outfitter Insurance

Hunting outfitters in the Mormon Lake area guide clients for elk, mule deer, turkey, and other game across the Coconino National Forest. The liability profile is significant: firearms handling, ATV transport to remote locations, horseback packing, tent camps, and operation in rugged terrain far from emergency services.

Hunting outfitter insurance typically requires general liability with higher limits than standard businesses, professional liability for guide decisions, firearms liability, commercial auto, and coverage for client accommodations (guide camps, tents, cabins).

## Horseback Riding Stable Insurance

Horseback riding carries inherent physical risk that no amount of safety equipment or instruction can eliminate. Riding stable insurance addresses the unique liability of equine activities — falls, kicks, bites, bolting, and injuries during trail rides, lessons, and boarding. Many states have equine activity liability laws that limit operator liability, but these laws have exceptions, and adequate insurance coverage remains essential.

## What We Cover

- **General liability** — Customer injuries and property damage
- **Professional liability** — Guide and instructor errors
- **Watercraft liability** — Boats used for fishing and recreation
- **Equine liability** — Horseback riding and stable operations
- **Firearms liability** — Hunting and shooting activities
- **Commercial auto** — Guide vehicles, boats, ATVs, and trailers
- **Equipment coverage** — Gear, tack, boats, motors, and accessories
- **Event liability** — Outdoor events, competitions, and group activities

Call us for a free consultation on outdoor recreation business insurance. We understand the unique risks of operating in the Mormon Lake area and match your business to carriers experienced with outdoor recreation liability.`,
    coverages: [
      "General liability for outdoor recreation",
      "Professional liability (guide & instructor)",
      "Watercraft & boat liability",
      "Equine liability & stable coverage",
      "Firearms liability for hunting operations",
      "Commercial auto for guide vehicles",
      "Equipment & gear coverage",
      "Event & competition liability",
    ],
    faqs: [
      {
        q: "What type of insurance do I need for a fishing guide business at Mormon Lake?",
        a: "Fishing guide businesses typically need general liability, professional liability for guide services, watercraft liability for boat operation, and commercial auto for guide vehicles and boat trailers. If you provide fishing equipment to clients, inland marine coverage for your gear is recommended. We work with carriers experienced in outdoor recreation and can bundle all these coverages into a single package at a competitive rate.",
      },
      {
        q: "Does general liability insurance cover horseback riding injuries?",
        a: "Standard general liability may cover some horseback riding injuries, but equine activities carry unique risks that require specific coverage. Arizona has equine activity liability laws that provide some protection to operators, but these laws have important exceptions — particularly for injuries caused by the provider's negligence or failure to provide proper safety equipment. Equine liability insurance specifically addresses the risks of horseback riding operations and provides broader protection than standard GL alone.",
      },
      {
        q: "I run a hunting outfitter business — what insurance do I need?",
        a: "Hunting outfitters need general liability with higher-than-standard limits, professional liability for guide decisions and client management, firearms liability, commercial auto for guide vehicles and ATVs, and coverage for any client accommodations like guide camps or cabins. If you operate on Forest Service land, additional requirements may apply. We specialize in outdoor recreation business insurance and can assemble a comprehensive package that covers all aspects of your outfitting operation.",
      },
    ],
  },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "+", label: "Insurance Carriers We Shop" },
  { value: 6, suffix: "", label: "Lines of Coverage" },
  { value: 50, suffix: " States", label: "Licensed Nationwide" },
] as const;

export const TESTIMONIALS: readonly {
  quote: string;
  name: string;
  role: string;
  location: string;
}[] = [];

export const FAQS = [
  {
    q: "Why should I use an independent insurance agency for my Mormon Lake property?",
    a: "An independent agency shops your coverage across 12+ carriers simultaneously — the same coverage that one direct insurer quotes you at one price might be significantly less at another. This matters especially in the Mormon Lake area, where wildfire risk, WUI classification, and rural mountain location cause some carriers to restrict coverage or raise rates. When one carrier pulls back, we have alternatives ready. We also work for you, not the insurance company — we're your advocate during claims, renewals, and policy changes.",
  },
  {
    q: "What does 'independent insurance agency' mean?",
    a: "Independent means we're not captive to a single insurance company. We're licensed to represent dozens of carriers and place your coverage with whichever offers the best combination of price, coverage, and financial stability for your situation. Captive agents (State Farm, Allstate, Farmers) can only offer their company's products — if your cabin or property doesn't fit their underwriting guidelines, you get a declined application or a high price. We have options.",
  },
  {
    q: "My cabin sits vacant for months in winter. Will my insurance still cover it?",
    a: "Most standard homeowners policies contain vacancy clauses that reduce or eliminate coverage after 30–60 days of unoccupancy. Since most Mormon Lake cabins sit empty through the winter, this creates a major coverage gap. We place cabin insurance with carriers that either remove vacancy restrictions entirely or offer seasonal endorsements maintaining full coverage year-round. This is one of the most important things we verify when reviewing cabin insurance for Mormon Lake area properties.",
  },
  {
    q: "How much can I save by bundling cabin and auto insurance?",
    a: "Most carriers offer 10–25% multi-policy discounts when you bundle cabin or homeowners insurance with auto insurance. For cabin owners who also insure ATVs, UTVs, or snowmobiles, additional recreational vehicle discounts may apply. As an independent agency, we compare bundled and unbundled options across all carriers to confirm which combination delivers the lowest total premium.",
  },
  {
    q: "Does Mormon Lake's wildfire risk affect insurance availability?",
    a: "Mormon Lake's location within the Coconino National Forest WUI zone does affect insurance. After major regional fire events, some carriers limit new business or increase rates in WUI areas. However, carriers familiar with the Mormon Lake area continue to write coverage. We maintain relationships with multiple carriers actively writing in the area and help you document defensible space, fire-resistant building materials, and other mitigation measures that qualify for lower rates.",
  },
  {
    q: "Can you help me file a claim on my cabin or property?",
    a: "Absolutely — claims advocacy is one of the most valuable services we provide. We help you understand your coverage, document the damage, communicate with adjusters, and push back if a claim is underpaid or wrongfully denied. For Mormon Lake area cabin owners dealing with remote property damage, having an advocate who can coordinate with adjusters and contractors remotely is especially important. Call us directly when you need to file a claim.",
  },
] as const;

export const CREDENTIALS = [
  "Independent Insurance Agency",
  "Licensed in All 50 States",
  "NPN #8608479",
  "Founded 2005",
  "A.M. Best A+ Rated Carriers",
  "Mountain & Cabin Specialists",
] as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
] as const;
