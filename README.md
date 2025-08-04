# url-shortener

# URL Shortener Service

A simple and efficient URL shortener service built using **Node.js**, **Express.js**, and **MongoDB**.

## Features
- **Shorten URLs** into unique short IDs.
- **Redirect to original URLs** while tracking clicks.
- **Analytics** for each short URL including:
  - Original URL
  - Total click count
  - Creation time
  - Last accessed time
- **Direct original URL retrieval** without redirection.
- **Rate limiting**: Maximum 100 requests per tab to prevent abuse.

---

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Testing Tools:** Postman for API testing, Artillery for load testing

---

## API Endpoints
- check post man for deatils about this
- https://sushanthmusham.postman.co/workspace/Sushanth-Musham-'s-Workspace~5cf67755-4b9d-4983-841c-43633de9cbd5/collection/46269459-e430954d-2809-4ccf-a124-bfbdbc46fba3?action=share&source=copy-link&creator=46269459

## Rate Limiting
- Maximum **100 requests per tab** to prevent abuse.  
- Implemented using custom Express middleware.

---

## Load Testing
- **Tool:** Artillery  
- **Results:**
  - **Total Requests:** 300  
  - **HTTP 200 Responses:** 100  
  - **HTTP 429 Responses (Rate Limited):** 200 
  - **Request Rate:** 10/sec  
  - **Response Time:** Min: 0 ms, Max: 604 ms, Mean: 33.5 ms, Median: 1 ms  
  - **p95:** 85.6 ms, **p99:** 347.3 ms  
- **Outcome:** All 300 virtual users completed successfully.

 <img width="827" height="507" alt="Screenshot 2025-08-04 at 6 23 07 PM" src="https://github.com/user-attachments/assets/0bd71771-9876-431d-b244-a5d31b4ed42f" />

<img width="815" height="141" alt="Screenshot 2025-08-04 at 6 24 03 PM" src="https://github.com/user-attachments/assets/87840082-8806-4995-868a-2a4f7e510744" />

- or you can use npm run dev if you have dev environment in scripts

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- Artillery (for load testing)
- Postman (for API testing)

---

## Author
**Sushanth Musham**




