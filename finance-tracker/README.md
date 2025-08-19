# Serverless Personal Finance Tracker — FastAPI + React

## Overview
FastAPI backend with a React frontend (planned). Designed for a serverless lift (AWS Lambda + API Gateway) and DynamoDB single-table later.

## Run the API (local)
```bash
cd finance-tracker/api
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Endpoints
- **GET /** → health message
- **GET /expenses** → sample data

## Roadmap
- POST /transactions, GET /summary
- React dashboard (Chart.js)
- Optional: AWS Lambda/API Gateway, Cognito auth, DynamoDB single-table
