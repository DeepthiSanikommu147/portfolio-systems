# Portfolio Systems — Scalable, Distributed, Cloud-Ready

## Overview
This repository contains production-style system design projects that demonstrate backend engineering, distributed systems, and cloud fundamentals.

## Tech Stack
- **Backend:** Java 21 (Spring Boot), Node.js 20 (Express + Kafka), Python 3.11 (FastAPI)
- **Datastores:** PostgreSQL, Redis, MongoDB, DynamoDB (single-table design)
- **Frontend:** React (TypeScript) + Chart.js
- **Infrastructure:** Docker, Nginx, AWS (EC2, S3, RDS, Lambda, Amplify)
- **Tooling:** GitHub Actions (CI/CD), k6 (load testing)

## Projects

### 1) Scalable Online Marketplace — Spring Boot + PostgreSQL (+ React planned)
- REST endpoints with validation & pagination; containerized Postgres
- Roadmap: Redis caching, JWT auth, admin product CRUD, load tests  
**Directory:** `marketplace/`

### 2) Event-Driven Food Delivery — Node microservices + Kafka + MongoDB
- Asynchronous flow: order → driver assignment → restaurant update
- Roadmap: idempotency keys, retries/backoff, DLQ, tracing  
**Directory:** `food-delivery/`

### 3) Serverless Personal Finance Tracker — FastAPI + React
- API + charting UI; serverless-ready design
- Roadmap: Lambda/API Gateway, Cognito auth, DynamoDB single-table, Amplify deploy  
**Directory:** `finance-tracker/`

## Repository Structure
- `marketplace/` — Spring Boot API + React (planned)
- `food-delivery/` — Node microservices (order, driver, restaurant)
- `finance-tracker/` — FastAPI backend, React frontend, docs

## Contr
# Portfolio Systems — Scalable, Distributed, Cloud-Ready

## Overview
Production-style system design projects demonstrating backend, distributed systems, and cloud fundamentals.

## Tech Stack
- Java 21 + Spring Boot • Node 20 + Kafka • Python 3.11 + FastAPI
- Datastores: PostgreSQL, Redis, MongoDB, DynamoDB (single-table)
- Frontend: React (TypeScript) + Chart.js
- Infra/Tooling: Docker, Nginx, AWS (EC2/S3/RDS/Lambda/Amplify), GitHub Actions, k6

## Projects
1) Scalable Online Marketplace — Spring Boot + PostgreSQL (+ React planned)
   • REST endpoints with validation & pagination; containerized Postgres
   • Roadmap: Redis caching, JWT auth, admin CRUD, load tests
   Directory: marketplace/

2) Event-Driven Food Delivery — Node microservices + Kafka + MongoDB
   • Asynchronous flow: order → driver assignment → restaurant update
   • Roadmap: idempotency, retries/backoff, DLQ, tracing
   Directory: food-delivery/

3) Serverless Personal Finance Tracker — FastAPI + React
   • API + charting UI; serverless-ready design
   • Roadmap: Lambda/API Gateway, Cognito, DynamoDB single-table
   Directory: finance-tracker/

## Repository Structure
marketplace/ (api, web) • food-delivery/ (services: order, driver, restaurant) • finance-tracker/ (api, web, docs)

## Contributors
- Sai Charan Vemuri
- Deepthi Sanikommu
