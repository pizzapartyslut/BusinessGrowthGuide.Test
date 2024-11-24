const levels = [
  {
    title: "Level 1: Business Conception",
    objectives: [
      {
        text: "Identify your business niche.",
        links: [
          { text: "Google Trends", url: "https://trends.google.com" },
          { text: "SEMrush", url: "https://www.semrush.com" },
          { text: "Ubersuggest", url: "https://neilpatel.com/ubersuggest/" }
        ]
      },
      {
        text: "Develop a mission statement.",
        links: [
          { text: "HubSpot Mission Statement Generator", url: "https://www.hubspot.com/maker/mission-statement-generator" },
          { text: "Atlassian", url: "https://www.atlassian.com" }
        ]
      },
      {
        text: "Perform basic market research.",
        links: [
          { text: "Statista", url: "https://www.statista.com" },
          { text: "Think with Google", url: "https://www.thinkwithgoogle.com" },
          { text: "Google Trends", url: "https://trends.google.com" }
        ]
      }
    ]
  },
  {
    title: "Level 2: Planning & Legality",
    objectives: [
      {
        text: "Create a business plan.",
        links: [
          { text: "LivePlan", url: "https://www.liveplan.com" },
          { text: "SCORE templates", url: "https://www.score.org" },
          { text: "Bplans", url: "https://www.bplans.com" }
        ]
      },
      {
        text: "Choose a business structure.",
        links: [
          { text: "LegalZoom", url: "https://www.legalzoom.com" },
          { text: "SBA.gov", url: "https://www.sba.gov" },
          { text: "IRS.gov", url: "https://www.irs.gov" }
        ]
      },
      {
        text: "Register your business and obtain necessary licenses.",
        links: [
          { text: "LegalZoom", url: "https://www.legalzoom.com" },
          { text: "BizFilings", url: "https://www.bizfilings.com" },
          { text: "Local Government Resources", url: "https://www.usa.gov/local-governments" }
        ]
      }
    ]
  },
  {
    title: "Level 3: Launch Preparation",
    objectives: [
      {
        text: "Develop a brand identity.",
        links: [
          { text: "Canva", url: "https://www.canva.com" },
          { text: "Adobe Express", url: "https://www.adobe.com/express" },
          { text: "Looka", url: "https://looka.com" }
        ]
      },
      {
        text: "Set up online and offline presences.",
        links: [
          { text: "Squarespace", url: "https://www.squarespace.com" },
          { text: "Shopify", url: "https://www.shopify.com" },
          { text: "Wix", url: "https://www.wix.com" },
          { text: "WordPress", url: "https://wordpress.com" }
        ]
      },
      {
        text: "Source initial funding or create a budget.",
        links: [
          { text: "QuickBooks", url: "https://quickbooks.intuit.com" },
          { text: "Wave", url: "https://www.waveapps.com" },
          { text: "GoFundMe", url: "https://www.gofundme.com" },
          { text: "Lendio", url: "https://www.lendio.com" }
        ]
      }
    ]
  },
  {
    title: "Level 4: Product/Service Readiness",
    objectives: [
      {
        text: "Finalize the product/service offering.",
        links: [
          { text: "Figma", url: "https://www.figma.com" },
          { text: "Adobe XD", url: "https://www.adobe.com/products/xd.html" }
        ]
      },
      {
        text: "Perform beta tests or get initial feedback.",
        links: [
          { text: "SurveyMonkey", url: "https://www.surveymonkey.com" },
          { text: "Typeform", url: "https://www.typeform.com" }
        ]
      },
      {
        text: "Develop a pricing strategy.",
        links: [
          { text: "ProfitWell", url: "https://www.profitwell.com" },
          { text: "Price Intelligently", url: "https://www.priceintelligently.com" },
          { text: "QuickBooks", url: "https://quickbooks.intuit.com" }
        ]
      }
    ]
  },
  {
    title: "Level 5: Launch",
    objectives: [
      {
        text: "Execute a launch strategy (events, promotions, ads).",
        links: [
          { text: "Mailchimp", url: "https://mailchimp.com" },
          { text: "Google Ads", url: "https://ads.google.com" },
          { text: "Facebook Ads", url: "https://www.facebook.com/business/ads" }
        ]
      },
      {
        text: "Gain initial customers or clients.",
        links: [
          { text: "Networking Events", url: "https://www.meetup.com" },
          { text: "LinkedIn", url: "https://www.linkedin.com" }
        ]
      },
      {
        text: "Set up customer support and feedback systems.",
        links: [
          { text: "Zendesk", url: "https://www.zendesk.com" },
          { text: "Freshdesk", url: "https://freshdesk.com" },
          { text: "Help Scout", url: "https://www.helpscout.com" }
        ]
      }
    ]
  },
  {
    title: "Level 6: Building the Customer Base",
    objectives: [
      {
        text: "Use social media campaigns and targeted ads.",
        links: [
          { text: "Hootsuite", url: "https://www.hootsuite.com" },
          { text: "Buffer", url: "https://buffer.com" },
          { text: "Facebook Ads", url: "https://www.facebook.com/business/ads" }
        ]
      },
      {
        text: "Build an email list and create loyalty programs.",
        links: [
          { text: "ConvertKit", url: "https://convertkit.com" },
          { text: "Mailchimp", url: "https://mailchimp.com" },
          { text: "LoyaltyLion", url: "https://www.loyaltylion.com" }
        ]
      },
      {
        text: "Address customer feedback and improve offerings.",
        links: [
          { text: "SurveyMonkey", url: "https://www.surveymonkey.com" },
          { text: "Hotjar", url: "https://www.hotjar.com" }
        ]
      }
    ]
  },
  {
    title: "Level 7: Scaling Operations",
    objectives: [
      {
        text: "Automate routine processes (e.g., invoicing, CRM).",
        links: [
          { text: "Zapier", url: "https://zapier.com" },
          { text: "HubSpot", url: "https://www.hubspot.com" },
          { text: "QuickBooks", url: "https://quickbooks.intuit.com" }
        ]
      },
      {
        text: "Hire your first employee or outsource tasks.",
        links: [
          { text: "Upwork", url: "https://www.upwork.com" },
          { text: "Fiverr", url: "https://www.fiverr.com" },
          { text: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs" }
        ]
      },
      {
        text: "Secure repeat clients and referrals.",
        links: [
          { text: "ReferralCandy", url: "https://www.referralcandy.com" },
          { text: "Yotpo", url: "https://www.yotpo.com" },
          { text: "Client Referrals", url: "https://www.clientreferrals.com" }
        ]
      }
    ]
  },
  {
    title: "Level 8: Expanding Revenue Streams",
    objectives: [
      {
        text: "Introduce complementary products or services.",
        links: [
          { text: "Etsy", url: "https://www.etsy.com" },
          { text: "Shopify", url: "https://www.shopify.com" },
          { text: "Teachable", url: "https://teachable.com" }
        ]
      },
      {
        text: "Start offering subscription-based services.",
        links: [
          { text: "Chargebee", url: "https://www.chargebee.com" },
          { text: "Recurly", url: "https://www.recurly.com" },
          { text: "Substack", url: "https://substack.com" }
        ]
      },
      {
        text: "Expand into new markets.",
        links: [
          { text: "Google Analytics", url: "https://analytics.google.com" },
          { text: "SEMrush", url: "https://www.semrush.com" },
          { text: "Mailchimp", url: "https://mailchimp.com" }
        ]
      }
    ]
  },
  {
    title: "Level 9: Consolidating Growth",
    objectives: [
      {
        text: "Optimize website for better conversion rates.",
        links: [
          { text: "Google Optimize", url: "https://optimize.google.com" },
          { text: "Unbounce", url: "https://www.unbounce.com" }
        ]
      },
      {
        text: "Track analytics and measure success.",
        links: [
          { text: "Google Analytics", url: "https://analytics.google.com" },
          { text: "Kissmetrics", url: "https://www.kissmetrics.com" }
        ]
      },
      {
        text: "Increase brand recognition.",
        links: [
          { text: "Brand24", url: "https://brand24.com" },
          { text: "Mention", url: "https://mention.com" }
        ]
      }
    ]
  },
  {
    title: "Level 10: Expansion and Diversification",
    objectives: [
      {
        text: "Open a new location or reach a global audience.",
        links: [
          { text: "Stripe", url: "https://stripe.com" },
          { text: "Shopify Plus", url: "https://www.shopify.com/enterprise" }
        ]
      },
      {
        text: "Launch new product lines or services.",
        links: [
          { text: "Launchrock", url: "https://www.launchrock.com" },
          { text: "Kickstarter", url: "https://www.kickstarter.com" }
        ]
      },
      {
        text: "Consider mergers or acquisitions.",
        links: [
          { text: "BizBuySell", url: "https://www.bizbuysell.com" },
          { text: "Flippa", url: "https://www.flippa.com" }
        ]
      }
    ]
  },
  {
    title: "Level 11: Advanced Marketing Techniques",
    objectives: [
      {
        text: "Implement influencer and affiliate marketing.",
        links: [
          { text: "Upfluence", url: "https://www.upfluence.com" },
          { text: "ShareASale", url: "https://www.shareasale.com" }
        ]
      },
      {
        text: "Focus on long-term customer retention.",
        links: [
          { text: "Customer.io", url: "https://customer.io" },
          { text: "Retently", url: "https://www.retently.com" }
        ]
      },
      {
        text: "Optimize for voice and visual search.",
        links: [
          { text: "Moz", url: "https://moz.com" },
          { text: "SEMrush", url: "https://www.semrush.com" }
        ]
      }
    ]
  },
  {
    title: "Level 12: Refining Operations",
    objectives: [
      {
        text: "Improve internal workflows with better tools.",
        links: [
          { text: "Trello", url: "https://trello.com" },
          { text: "Slack", url: "https://slack.com" }
        ]
      },
      {
        text: "Maximize team collaboration.",
        links: [
          { text: "Monday.com", url: "https://monday.com" },
          { text: "Asana", url: "https://asana.com" }
        ]
      },
      {
        text: "Focus on data-driven decision making.",
        links: [
          { text: "Google Data Studio", url: "https://datastudio.google.com" },
          { text: "Tableau", url: "https://www.tableau.com" }
        ]
      }
    ]
  },
  {
    title: "Level 13: Preparing for Long-Term Success",
    objectives: [
      {
        text: "Diversify investments and revenue.",
        links: [
          { text: "Wealthfront", url: "https://www.wealthfront.com" },
          { text: "Betterment", url: "https://www.betterment.com" }
        ]
      },
      {
        text: "Prepare for scalability and automation.",
        links: [
          { text: "Zapier", url: "https://zapier.com" },
          { text: "Salesforce", url: "https://www.salesforce.com" }
        ]
      },
      {
        text: "Maintain a strong brand culture.",
        links: [
          { text: "Patagonia", url: "https://www.patagonia.com" },
          { text: "Zappos", url: "https://www.zappos.com" }
        ]
      }
    ]
  },
  {
    title: "Level 14: Legacy Building and Exit Strategy",
    objectives: [
      {
        text: "Establish a long-term legacy plan.",
        links: [
          { text: "Wealthfront", url: "https://www.wealthfront.com" },
          { text: "Vanguard", url: "https://www.vanguard.com" }
        ]
      },
      {
        text: "Evaluate exit options (IPO, acquisition, etc.).",
        links: [
          { text: "Flippa", url: "https://www.flippa.com" },
          { text: "BizBuySell", url: "https://www.bizbuysell.com" }
        ]
      },
      {
        text: "Pass on leadership or ownership.",
        links: [
          { text: "Succession Planning", url: "https://www.inc.com/guides/2010/06/defining-your-succession-plan.html" },
          { text: "Harvard Business Review", url: "https://hbr.org" }
        ]
      }
    ]
  }
];

let currentLevelIndex = 0;

function displayLevel(levelIndex) {
  const level = levels[levelIndex];
  document.getElementById("levelTitle").innerText = level.title;
  const objectivesList = document.getElementById("objectivesList");
  objectivesList.innerHTML = ""; // Clear previous list

  level.objectives.forEach((objective, index) => {
    const objectiveDiv = document.createElement("div");
    objectiveDiv.classList.add("objective");
    objectiveDiv.innerHTML = `
      <span>${objective.text}</span>
      <p>Resources:</p>
      <ul>
        ${objective.links.map(link => `<li><a href="${link.url}" target="_blank">${link.text}</a></li>`).join('')}
      </ul>
      <button class="complete-btn" id="btn${index}" onclick="markComplete(${index})">Mark as Complete</button>
    `;
    objectivesList.appendChild(objectiveDiv);
  });

  // Update progress tracker
  const progressText = `Level ${currentLevelIndex + 1} of ${levels.length}`;
  document.getElementById("progressTracker").innerText = progressText;

  // Update progress bar
  const progressBar = document.getElementById("progressBar");
  const progressValue = ((currentLevelIndex + 1) / levels.length) * 100;
  progressBar.value = progressValue;

  document.getElementById("nextLevelBtn").disabled = true; // Disable Next Level button until all objectives are completed
}

function markComplete(objectiveIndex) {
  const btn = document.getElementById(`btn${objectiveIndex}`);
  btn.disabled = true; // Disable button once completed

  // Check if all objectives are completed
  const allObjectivesCompleted = Array.from(document.querySelectorAll(".complete-btn"))
    .every(button => button.disabled);

  // Enable the Next Level button when all objectives are completed
  if (allObjectivesCompleted) {
    document.getElementById("nextLevelBtn").disabled = false;
  }
}

function nextLevel() {
  if (currentLevelIndex < levels.length - 1) {
    currentLevelIndex++;
    displayLevel(currentLevelIndex);
  } else {
    alert("Congratulations! You've reached the end of the game.");
    document.getElementById("nextLevelBtn").disabled = true; // Disable next button after final level
  }
}

// Initialize the first level
displayLevel(currentLevelIndex);

