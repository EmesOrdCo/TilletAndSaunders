# Contract Monitoring System - Development Brief

## Objective

Build a program that automatically monitors UK government and public sector contract portals to identify relevant contract opportunities for a web/app development business. The system should filter contracts that are for **new product/application builds with ongoing support potential**, and notify when new matching contracts are found.

## Requirements

### What We're Looking For

The system should identify contracts that match these criteria:

**MUST HAVE (Inclusive Filters):**
- Keywords: "software development", "application development", "product development", "bespoke software", "custom application", "website development", "digital platform", "app development"
- Contract type: New product/app builds (not just maintenance)
- Categories: Software development, IT services, web development
- Notice type: "Contract Notice", "Invitation to Tender", "Prior Information Notice" (NOT "Award Notice" - already awarded)

**MUST NOT HAVE (Exclusion Filters):**
- Skip if ONLY about "maintenance", "support", "system administration" (unless part of a product build)
- Skip if ONLY "consultancy" without product development focus
- Skip "Award Notice" (already awarded contracts)
- Skip contracts that are clearly just ongoing maintenance of existing systems

### Target Portals (Priority Order)

1. **Public Contracts Scotland** (HIGHEST PRIORITY)
   - API: `https://api.publiccontractsscotland.gov.uk/v1`
   - Format: OCDS (JSON/XML), REST API
   - Access: Free, publicly accessible
   - Documentation: Available on their website
   - Status: START HERE - easiest to implement

2. **Find a Tender (FTS)** (HIGH PRIORITY)
   - API: REST API, OCDS JSON format
   - Access: Requires API key (CDP API Key) - need to register
   - Documentation: https://www.find-tender.service.gov.uk/Developer/Documentation
   - Status: Free, but requires registration

3. **Sell2Wales** (MEDIUM PRIORITY)
   - API: No public API available
   - Alternative: Bulk downloads available (XML, JSON, XLSX, CSV)
   - Access: Check their Open Contracting Transparency Data page
   - Status: Implement automated file downloads, not scraping

4. **Contracts Finder** (LOW PRIORITY - if still active)
   - Status: Legacy site, likely replaced by Find a Tender
   - Check if bulk data exports available

5. **eTendersNI** (LOW PRIORITY)
   - Status: Unknown if API available
   - Contact or implement scraping as last resort

## Technical Specifications

### Data Schema

Normalize all contract data to this standard format:

```json
{
  "title": "string",
  "description": "string",
  "buyer": "string",
  "value": "number (GBP, excluding VAT)",
  "deadline": "ISO date string",
  "published_date": "ISO date string",
  "categories": ["array of CPV codes"],
  "notice_type": "string",
  "url": "string",
  "portal": "string (source portal name)",
  "ocds_id": "string (if available)",
  "relevance_score": "number (0-100)"
}
```

### Core Functionality

1. **Data Retrieval Module**
   - Implement API clients for Public Contracts Scotland and Find a Tender
   - Implement bulk download handler for Sell2Wales
   - Each portal should have its own module
   - Handle errors, retries, and rate limiting
   - Normalize all data to standard schema

2. **Filtering Engine**
   - Implement keyword matching (case-insensitive, smart matching)
   - Category code matching (CPV codes for software development)
   - Exclusion logic (skip award notices, maintenance-only, etc.)
   - Relevance scoring (rank matches by how well they fit criteria)
   - Return only contracts that pass all filters

3. **Storage System**
   - Store contracts in database (SQLite for simple deployment, PostgreSQL if more robust needed)
   - Track: seen contracts, last checked date, relevance scores
   - Prevent duplicate notifications
   - Store historical data for analysis

4. **Notification System**
   - Email alerts for new matching contracts (SMTP configuration)
   - Include: Title, Buyer, Value, Deadline, Description summary, Direct URL
   - Option for daily digest or immediate alerts
   - Simple web dashboard (optional but recommended)

5. **Scheduler**
   - Run checks daily (or configurable frequency)
   - Use cron or task scheduler
   - Log all activities

### Technology Stack Recommendations

- **Language**: Python (excellent for APIs, data processing, web scraping)
- **Libraries**:
  - `requests` or `httpx` for API calls
  - `beautifulsoup4` or `lxml` for HTML parsing (if scraping needed)
  - `playwright` or `selenium` only if JavaScript-heavy sites need scraping
  - `sqlalchemy` or `sqlite3` for database
  - `apscheduler` or `schedule` for task scheduling
  - `python-dotenv` for configuration
- **Database**: SQLite (simple) or PostgreSQL (production)
- **Optional Web Interface**: FastAPI/Flask with simple HTML dashboard

### Configuration Requirements

The system should support configuration via environment variables or config file:

```
# API Keys
FTS_API_KEY=your_api_key_here

# Database
DATABASE_URL=sqlite:///contracts.db

# Email notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_password
NOTIFICATION_EMAIL=your_notification_email@gmail.com

# Scheduling
CHECK_FREQUENCY_HOURS=24

# Filtering
MIN_VALUE_GBP=50000  # Optional: minimum contract value
```

## Filtering Logic Details

### Keyword Matching (Inclusive)

Search in: title, description, abstract fields

**Inclusive Keywords (ANY match = relevant):**
- software development
- application development
- product development
- bespoke software
- custom application
- website development
- digital platform
- app development
- web application
- software product

**Smart Matching:**
- Case-insensitive
- Handle plurals/variations
- Consider word boundaries (don't match "software" in "hardware")

### Exclusion Rules (Skip if...)

1. **Notice Type = "Award Notice"** (already awarded)
2. **Description contains ONLY maintenance/support keywords** without development keywords
3. **Value is extremely low** (< £10k might indicate small maintenance tasks - configurable)

### Relevance Scoring

Score each contract 0-100 based on:
- Keyword matches (more matches = higher score)
- Category codes (software development categories = higher score)
- Contract value (higher = potentially more relevant)
- Contract duration (longer = ongoing support potential)

## Expected Output

For each matching contract, the system should provide:

1. **Email Notification** with:
   - Contract title
   - Buyer name
   - Contract value
   - Deadline date
   - Brief description/summary
   - Direct link to full notice
   - Relevance score

2. **Database Record** with:
   - All contract fields (standard schema)
   - Date first found
   - Last checked date
   - Notification sent flag

3. **Optional Dashboard** showing:
   - Recent matches
   - Search/filter interface
   - Statistics

## Error Handling & Maintenance

- Log all API errors, network issues
- Implement retry logic with exponential backoff
- Handle API rate limits gracefully
- Alert if a portal becomes unavailable
- Store failed requests for manual review

## Deployment

- Should be runnable locally or on a cloud server
- Docker containerization recommended for easy deployment
- Include clear setup instructions
- Include example configuration files

## Testing Requirements

- Test with real API responses
- Test filtering logic with sample contracts
- Test notification system
- Test error handling (network failures, API errors)
- Test duplicate detection

## Documentation

Include:
- Setup instructions
- Configuration guide
- How to register for API keys
- How to customize filters
- Troubleshooting guide

## Phase 1 Implementation (MVP)

Start with:
1. Public Contracts Scotland API integration (free, no registration)
2. Basic filtering logic
3. Database storage
4. Email notifications
5. Daily scheduler

Then add:
- Find a Tender API (after registration)
- Sell2Wales bulk downloads
- Web dashboard
- Advanced filtering/scoring

## Notes

- All government contract data is under Open Government Licence (free to use)
- Be respectful of API rate limits
- Focus on accuracy over speed (better to miss none than to get false positives)
- The user wants product/app builds with ongoing support, NOT just maintenance contracts

## Success Criteria

The system is successful if it:
1. Identifies relevant product/app development contracts
2. Filters out maintenance-only contracts
3. Provides timely notifications
4. Requires minimal manual intervention
5. Can run reliably 24/7

---

**Start building with Public Contracts Scotland API first** - it's the easiest entry point with free public access.




