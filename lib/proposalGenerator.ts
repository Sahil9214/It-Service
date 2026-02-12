import { ProposalFormData, GeneratedProposal, Service } from "./types";
import { formatDate, generateProposalId } from "./utils";

/**
 * EB Standard Proposal Template Generator
 *
 * This generator builds a full HTML proposal based on the "eb-standard-templates"
 * document shared by the business team. It follows the same section structure:
 *
 * 1.  Product Vision & Objective
 * 2.  User Roles
 * 3.  Scope Of Work
 * 4.  Infrastructure details
 * 5.  Additional Details
 * 6.  Deliverables
 * 7.  Timelines & Payment Milestone
 * 8.  Project Management
 * 9.  Risk & Assumptions
 * 10. Key Decision Making Points
 * 11. Why you should choose EngineerBabu
 * 12. Ownership & Rights
 * 13. Post Deployment Support
 *
 * Dynamic fields from ProposalFormData are interpolated into:
 * - Header / Project Specifications
 * - Project vision and scope summaries
 * - Timeline, budget, and contextual notes where relevant.
 */

export function generateProposal(
  formData: ProposalFormData,
  service: Service,
): GeneratedProposal {
  const todayFormatted = formatDate(new Date());
  const id = generateProposalId();

  const projectName = formData.projectName || formData.serviceName;
  const clientCompany =
    formData.clientCompany && formData.clientCompany.trim().length > 0
      ? formData.clientCompany
      : formData.clientName;
  const documentVersion = formData.documentVersion || "1.0";
  const proposalDate = formData.proposalDate || todayFormatted;

  const timeline =
    formData.timeline && formData.timeline.trim().length > 0
      ? formData.timeline
      : service.timelineEstimation;

  const budget =
    formData.budget && formData.budget.trim().length > 0
      ? formData.budget
      : service.costEstimation;

  const executiveSummary = `This proposal outlines a comprehensive ${projectName} initiative for ${clientCompany}. Our approach focuses on delivering a scalable, secure, and user-friendly solution that addresses the core business challenges in the ${formData.industry} industry.`;

  const problemUnderstanding = `${clientCompany} operates in the ${formData.industry} sector and faces challenges including: ${service.businessProblemsSolved.join(", ")}.${
    formData.notes ? ` Additional context: ${formData.notes}` : ""
  }`;

  const proposedSolution = `We propose enhancing and/or building digital platforms powered by ${service.name}, leveraging modern technologies including ${service.techStack.frontend.join(", ")} for frontend, ${service.techStack.backend.join(", ")} for backend, and ${service.techStack.database.join(", ")} for data management.`;

  const featureBreakdown = [
    ...service.keyFeatures,
    ...service.optionalFeatures.map((f) => `${f} (Optional)`),
  ];

  const whyChooseUs = `EngineerBabu brings deep experience delivering scalable, secure, and user-centric products for global brands and high-growth startups. Our delivery methodology, tooling, and engineering culture are oriented towards long-term partnership and measurable outcomes.`;

  const nextSteps = [
    "Finalize scope alignment and key success metrics",
    "Confirm technology stack and infrastructure approach",
    "Sign off on commercial terms and delivery timelines",
    "Kick off project with detailed planning and sprint setup",
    "Iterative development, testing, deployment, and handover",
  ];

  const visionExtra =
    formData.projectVisionSummary && formData.projectVisionSummary.trim()
      ? `<p>${formData.projectVisionSummary.trim()}</p>`
      : "";

  const scopeExtra =
    formData.projectScopeSummary && formData.projectScopeSummary.trim()
      ? `<p>${formData.projectScopeSummary.trim()}</p>`
      : "";

  const notesExtra =
    formData.notes && formData.notes.trim()
      ? `<p><strong>Additional client context:</strong> ${formData.notes.trim()}</p>`
      : "";

  const fullContent = `
<div class="eb-proposal">
  <h1>[${projectName}] Proposal</h1>

  <section>
    <h2>Project Specifications</h2>
    <p><strong>Client:</strong> ${formData.clientName}</p>
    <p><strong>Project Name:</strong> ${projectName}</p>
    <p><strong>Document Version:</strong> ${documentVersion}</p>
    <p><strong>Date:</strong> ${proposalDate}</p>
    <p><strong>Prepared For:</strong> ${clientCompany}</p>
    <p><strong>Prepared By:</strong> EngineerBabu Technologies Pvt. Ltd.</p>
  </section>

  <hr />

  <section>
    <h2>1. Product Vision &amp; Objective</h2>
    <p>
      The project aims to enhance teaching–learning by providing seamless digital content access,
      enabling better lesson planning, usage tracking, and engagement. The existing platform
      consists of a TV App and Web Admin Portal, which face limitations in reporting, content
      management, and teacher access outside classrooms. We aim to enhance the TV App and Admin
      Portal while introducing new applications for teachers and principals, empowering preparation,
      motivation, and data-driven decision-making for improved educational outcomes.
    </p>
    <p>
      Note: The Proposal includes only the list of enhancement or the development deliverables upon
      which our team is going to work.
    </p>
    ${visionExtra}
  </section>

  <section>
    <h2>2. User Roles</h2>
    <ul>
      <li>
        <strong>Teacher</strong>
        <ul>
          <li>Mention key functions</li>
        </ul>
      </li>
      <li>
        <strong>Principal</strong>
        <ul>
          <li>Mention key functions</li>
        </ul>
      </li>
      <li>
        <strong>Admin</strong>
        <ul>
          <li><strong>Manager:</strong> Can add team, view reports</li>
          <li><strong>Finance:</strong> Can see financial reports</li>
        </ul>
      </li>
    </ul>
  </section>

  <section>
    <h2>3. Scope Of Work</h2>
    <p>
      The scope of work below outlines the primary modules and enhancements to be delivered as part
      of this engagement.
    </p>
    ${scopeExtra}
    <ul>
      <li>
        <strong>Teacher Mobile Application (New Development)</strong>
        <ul>
          <li>
            <strong>Authentication</strong>
            <ul>
              <li>Authentication &amp; Profile</li>
              <li>Secure login via UserID + OTP/PIN</li>
              <li>UDISE-based teacher mapping</li>
              <li>Profile management, multi-language support (12 languages), dark mode</li>
            </ul>
          </li>
          <li>
            <strong>Home Dashboard</strong>
            <ul>
              <li>Greeting &amp; quick usage metrics</li>
              <li>Notifications (training reminders, inactivity alerts)</li>
            </ul>
          </li>
          <li>
            <strong>Feedback &amp; Support</strong>
            <ul>
              <li>Submit feedback (text, image, video)</li>
              <li>Raise support tickets (linked with admin portal)</li>
              <li>FAQs</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Principal Mobile Application (New Development)</strong>
        <ul>
          <li>
            <strong>Authentication &amp; Profile</strong>
            <ul>
              <li>Login via UserID + OTP/PIN</li>
              <li>UDISE-based school mapping</li>
            </ul>
          </li>
          <li>
            <strong>Principal Dashboard</strong>
            <ul>
              <li>School usage leaderboard</li>
              <li>Notifications &amp; broadcast messages</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </section>

  <section>
    <h2>4. Infrastructure Details</h2>
    <p><strong>Tools &amp; Technology details:</strong></p>
    <ul>
      <li><strong>Backend:</strong> [Details]</li>
      <li><strong>Database:</strong> [Details]</li>
      <li><strong>Frontend:</strong> [Details]</li>
      <li><strong>QA:</strong> [Details]</li>
      <li><strong>Design:</strong> [Details]</li>
      <li><strong>DevOps:</strong> [Details]</li>
      <li><strong>Tools:</strong> [Details]</li>
    </ul>
    <p><strong>Recurring cost:</strong> The projected average run-rate is USD 1,278 per month (Approx. 1,13,284 INR per month depending on dollar rate and usage), covering infrastructure sized for 350 GB storage and up to 6,000 concurrent users. This includes:</p>
    <ul>
      <li>Amazon S3 (350 GB storage + 5 TB monthly data egress): USD 573/month</li>
      <li>Two m5.large EC2 application servers: USD 259/month</li>
      <li>Two Application Load Balancers (for high availability): USD 64/month</li>
      <li>Single-AZ PostgreSQL RDS instance (db.m4.xlarge, 50 GB gp2): USD 382/month</li>
    </ul>
    <p><strong>Offline Remote-Control Solution:</strong> To address the need for offline connectivity, we&rsquo;ve architected a WebSocket-based local communication system that enables TV–Mobile app interaction without relying on the internet.</p>
    <ul>
      <li>Zero Cloud Dependency: All remote-control features function within the local network, ensuring reliable classroom usage even in low-connectivity areas.</li>
    </ul>
  </section>

  <section>
    <h2>5. Additional Details</h2>
    <p><strong>Inclusion</strong></p>
    <ul>
      <li>Development of new Mobile Applications for teachers and principals, including all functional requirements detailed in the RFP (registration, dashboard, lesson planning, training resources, feedback, reporting).</li>
      <li>Enhancements to existing TV App and Web Admin Portal, limited to advanced features such as remote control, session management, bulk upload, RBAC, and comprehensive analytics dashboards.</li>
    </ul>
    <p><strong>Exclusions</strong></p>
    <ul>
      <li>No redevelopment of already existing modules like the current TV App core, base Web Admin Portal user management, or content browsing systems (except for specified enhancements).</li>
      <li>Features or integrations not explicitly listed in the RFP (e.g., advanced offline streaming, biometric authentication, integrations with external learning platforms) are excluded from project scope.</li>
    </ul>
    <p><strong>Assumptions</strong></p>
    <ul>
      <li>Client will provide timely feedback.</li>
      <li>Content and branding to be provided by the client.</li>
      <li>Third-party licenses to be arranged by the client.</li>
    </ul>
    <p><strong>Constraints</strong></p>
    <ul>
      <li>Mobile and web applications must offer key functionalities in offline mode, but require periodic internet connectivity for synchronization and updates.</li>
    </ul>
    ${notesExtra}
  </section>

  <section>
    <h2>6. Deliverables</h2>
    <p><strong>That covers</strong></p>
    <ul>
      <li>Mobile Application (Teachers &amp; Principals) - Completely new development</li>
      <li>TV Application Enhancements - Feature additions to existing application</li>
      <li>Web Admin Portal Enhancements - Feature expansions to existing portal</li>
      <li>Advanced Reporting Dashboard - Enhanced analytics capabilities</li>
    </ul>
  </section>

  <section>
    <h2>7. Timelines &amp; Payment Milestone</h2>
    <p><strong>Total Fixed Cost:</strong> ${budget || "________ INR + GST"}</p>
    <p><strong>Total Duration:</strong> ${timeline || "4-5 Months"}</p>
    <p><strong>Milestone breakdown:</strong></p>
    <table>
      <thead>
        <tr>
          <th>SN</th>
          <th>Milestone</th>
          <th>Tentative Duration</th>
          <th>Percentage</th>
          <th>Amount (INR)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Upon signing the contract</td>
          <td>Kickstart</td>
          <td>20%</td>
          <td>300000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Upon completing design and documentation</td>
          <td>5 Weeks</td>
          <td>10%</td>
          <td>150000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Upon completing the development phase (Milestone basis)</td>
          <td>10-12 Weeks</td>
          <td>60%</td>
          <td>900000</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Upon final delivery and handover</td>
          <td>Completion</td>
          <td>10%</td>
          <td>150000</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Support</td>
          <td>2 Months</td>
          <td>NA</td>
          <td>NA</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Important Notes:</strong></p>
    <ul>
      <li>We will share the detailed split planning covering the module and completion date upon design completion of the project.</li>
      <li>There can be minor deviation or shift in modules depending on priority and dependencies.</li>
    </ul>
    <p><strong>Other Notes:</strong></p>
    <ul>
      <li>2 Months of post-deployment support (No additional cost).</li>
      <li>The support includes bug fixes, response time, deployment help, and training.</li>
    </ul>
  </section>

  <section>
    <h2>8. Project Management</h2>
    <p><strong>Team Structure</strong></p>
    <ul>
      <li>Project Architect: Seasoned professional with expertise in product building and its implementations along with architecture planning.</li>
      <li>Project Manager: Responsible for ensuring project delivery within scope, on time, and with high quality.</li>
      <li>Business Analyst: Skilled in identifying optimal solutions and creating detailed documentation.</li>
      <li>Engineers: Proficient in latest development technologies i.e., proficient in React technology, Kotlin, Flutter, Node, .Net, and its components &amp; solution.</li>
      <li>Quality Assurance Specialists: Focused on ensuring regulatory compliance and maintaining performance standards.</li>
    </ul>
    <p><strong>Communication Plan</strong></p>
    <ul>
      <li>The team will connect on a regular basis for important things.</li>
      <li>Progress updates will be shared weekly and close involvement of client-side will be required for smooth coordination and transparent work.</li>
      <li>Milestone delivery will be communicated, covering all the relevant details.</li>
      <li>Team will connect for queries, suggestions, feedback, etc.</li>
    </ul>
    <p><strong>Testing &amp; Quality Assurance</strong></p>
    <ul>
      <li>Unit Testing: Ensure individual components work as expected.</li>
      <li>System Testing: Validate output results and performance benchmarks.</li>
      <li>Load Testing: Tests AI performance.</li>
    </ul>
    <p><strong>Change Management Process</strong></p>
    <ul>
      <li>Submission: All change requests must be submitted in writing, detailing the requested change, rationale, and potential impact.</li>
      <li>Review: The project team will review the request to assess feasibility, impact on scope, budget, and timeline.</li>
      <li>Approval: Approved changes will require written agreement from both the client and the project manager.</li>
      <li>Implementation: Changes will be implemented as per the agreed-upon revised plan.</li>
      <li>Documentation: All changes and their impacts will be documented &amp; communicated to relevant stakeholders.</li>
    </ul>
  </section>

  <section>
    <h2>9. Risk &amp; Assumptions</h2>
    <p><strong>That covers</strong></p>
    <ul>
      <li>Availability of client APIs.</li>
      <li>Third-party costs borne by client.</li>
      <li>Timely feedback required.</li>
      <li>Compliance readiness.</li>
    </ul>
  </section>

  <section>
    <h2>10. Key Decision Making Points</h2>
    <p><strong>How to select best company</strong></p>
    <ul>
      <li>Experience &amp; expertise: Evaluate the company’s experience and domain expertise.</li>
      <li>Project outcome: Speak with past customers to understand real project outcomes.</li>
      <li>Reviews &amp; case studies: Check genuine client reviews, testimonials, and case studies.</li>
      <li>Project management process: Understand their project management and reporting process.</li>
      <li>Support: Assess their support structure and post-delivery services.</li>
      <li>Reachability: Ensure easy reachability, clear communication, and transparency.</li>
      <li>Mindset: Look for passion, commitment, problem-solving mindset, and long-term partnership approach.</li>
    </ul>
    <p><strong>How to select best technology</strong></p>
    <ul>
      <li>Right fit: Ensure the technology proposed is the right fit for your specific business use case.</li>
      <li>Goal Mapping: The chosen platform should align with both current goals and long-term growth plans.</li>
      <li>Future ready: Focus on scalability, stability, and future readiness from the start.</li>
      <li>Latest Tech: Be cautious of vendors who recommend outdated technology only to lower project costs. Cheaper technology choices often result in higher maintenance and performance costs later.</li>
      <li>Stable Launch: Weak technology decisions can lead to functional limitations after launch.</li>
      <li>Performance: Always prioritize long-term performance and sustainability over short-term savings.</li>
    </ul>
    <p><strong>What can go wrong when you choose wrong team, technology</strong></p>
    <ul>
      <li>Poor performance: The system may suffer from poor performance and frequent crashes.</li>
      <li>Scalability issue: Limited scalability can cause failures as the number of users grows.</li>
      <li>Security issue: Security gaps may lead to data breaches and compliance risks.</li>
      <li>Rework: Inefficient/incorrect code can result in high maintenance and recurring rework costs.</li>
      <li>Delays: Project timelines may get delayed due to repeated revisions and mismanagement.</li>
      <li>Brand issue: Customer trust and brand reputation can be severely impacted.</li>
      <li>No delivery: The investment may be wasted due to partial, unstable, or failed delivery.</li>
      <li>Downtime: Business operations may face downtime, leading to financial and operational losses.</li>
    </ul>
    <p><strong>Why different companies charge different pricing</strong></p>
    <ul>
      <li>Experience &amp; Expertise: Senior teams with proven expertise, certifications, and domain knowledge charge more than beginners.</li>
      <li>Team Strength &amp; Skill Level: A company with strong architects, designers, QA, and project managers will naturally cost more than a basic dev-only team.</li>
      <li>Quality of Work: High-quality code, clean UI/UX, proper testing, and documentation increase cost but reduce long-term risks.</li>
      <li>Process &amp; Methodology: Companies following structured processes (Agile, security audits, compliance, SOPs) invest more time and resources.</li>
      <li>Technology Stack Used: Modern, scalable, and secure technologies cost more than outdated or shortcut-based solutions.</li>
      <li>Project Management &amp; Communication: Dedicated team, project managers, regular reporting, and client communication add value and cost.</li>
      <li>Company Location &amp; Operational Costs: Office rent, salaries, taxes, and infrastructure differ by city and country.</li>
      <li>Support &amp; Maintenance Commitment: Post-launch support, warranties, SLAs, and long-term maintenance affect pricing.</li>
      <li>Risk Ownership &amp; Accountability: Companies that take full delivery responsibility and guarantee outcomes charge more than those who just code.</li>
      <li>Brand Value &amp; Market Reputation: Well-established brands charge premium for trust, stability, and reliability.</li>
      <li>Hidden vs Transparent Pricing: Lower quotes often exclude testing, security, support, and rework, those costs appear later.</li>
    </ul>
    <p><strong>Important Note:</strong><br />Some companies sell cheap development. Others sell reliability, scalability, and peace of mind.</p>
  </section>

  <section>
    <h2>11. Why you should choose EngineerBabu</h2>
    <ul>
      <li>CMMI Level 5 Certified Group Company: We follow globally recognized, proven delivery methodologies that minimize risks and maximize business value.</li>
      <li>Proven Impact Through Automation &amp; AI: In a recent engagement with a leading organization, our solution reduced repetitive tasks by 40% and improved overall operational efficiency by 25%.</li>
      <li>Premium Quality with Cost Effectiveness: Based in a Tier-2 city, we deliver top-tier quality at significantly optimized costs without compromising on excellence.</li>
      <li>End-to-End Technology Expertise: We specialize in Custom Mobile App &amp; Website Design, AI-Integrated and AI-Powered Solutions, Cross-Platform Applications, Enterprise Solutions, SaaS Development, DevOps, and End-to-End Software Development.</li>
      <li>Strong Focus on Scalable, Tailored Delivery: Every solution is built to be secure, scalable, and aligned with long-term business growth, delivered within committed timelines.</li>
      <li>Proven Track Record with High-Growth Startups &amp; Enterprises: Supported 132 Y Combinator startups and 24 unicorns across diverse industries.</li>
      <li>Trusted by Global Industry Leaders: Chosen by brands such as Adani, Paytm, Apollo Hospitals, and Samsung.</li>
      <li>
        Client Satisfaction &amp; Measurable Results: Client testimonials consistently highlight our ability to exceed expectations and deliver tangible, measurable outcomes.
        <br />
        Some testimonials:
        <ul>
          <li>https://youtu.be/e28VHdP5LeA?si=e-0zERfoWClo7wi9</li>
          <li>https://youtu.be/d3s2fxs8Vug?si=lErL7qEZz-p5ZCv7</li>
          <li>https://youtu.be/6rV_t7pR_EA?si=ZoKqyzF2MySXp_OY</li>
          <li>https://youtu.be/bOtdHc7lap4?si=qXTB9nXWSbtxfwYl</li>
          <li>https://youtu.be/m2AlVRbq92k?si=ZQJAJy9gc-pfwyGR</li>
        </ul>
      </li>
      <li>Transparent Execution &amp; High Accountability: Dedicated project managers, structured reporting, and complete delivery ownership.</li>
    </ul>
  </section>

  <section>
    <h2>12. Ownership &amp; Rights</h2>
    <p><strong>That covers:</strong></p>
    <ul>
      <li>100% ownership of the code, designs, and all IP will belong to the client.</li>
      <li>Source code, credentials, and access will be handed over post final payment.</li>
      <li>EngineerBabu will retain no commercial rights or reuse rights over this product.</li>
      <li>EngineerBabu may reuse its tools, frameworks, and technical know-how.</li>
      <li>EngineerBabu may use the project for portfolio and marketing purposes.</li>
    </ul>
  </section>

  <section>
    <h2>13. Post Deployment Support</h2>
    <p><strong>Free support period after go-live</strong></p>
    <ul>
      <li>Duration: 1 month/2 Months</li>
      <li>That Covers:
        <ul>
          <li>Bug fixes for reported functional issues</li>
          <li>Deployment assistance on live environment</li>
          <li>Response time commitment (e.g., within 1 business day)</li>
          <li>Basic training for internal teams (usage flows)</li>
        </ul>
      </li>
    </ul>
    <p><strong>AMC plan</strong></p>
    <ul>
      <li>Hours Bucket
        <ul>
          <li>40 Hours</li>
          <li>80 Hours</li>
          <li>120 Hours</li>
          <li>160 Hours</li>
        </ul>
      </li>
    </ul>
  </section>
</div>
  `.trim();

  return {
    id,
    clientName: formData.clientName,
    date: proposalDate,
    executiveSummary,
    problemUnderstanding,
    proposedSolution,
    featureBreakdown,
    timeline,
    costRange: budget,
    whyChooseUs,
    nextSteps,
    fullContent,
  };
}
