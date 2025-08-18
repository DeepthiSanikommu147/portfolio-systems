# Serverless Personal Finance Tracker — FastAPI + React

Overview:
FastAPI backend (UI with React planned). Designed for a serverless lift (AWS Lambda + API Gateway) and DynamoDB single-table later.

Run the API (local):
1) cd finance-tracker/api
2) python3 -m venv venv && source venv/bin/activate
3) pip install -r requirements.txt
4) uvicorn main:app --reload --port 8000

Endpoints:
- GET /  → health message
- GET /expenses → sample data

Roadmap:
- POST /transactions, GET /summary
- React dashboard (Chart.js)
- Optional: AWS Lambda/API Gateway, Cognito, DynamoDB
