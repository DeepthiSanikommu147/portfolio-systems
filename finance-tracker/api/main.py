from fastapi import FastAPI

app = FastAPI(title="Finance Tracker API")

@app.get("/")
def root():
    return {"message": "Finance Tracker API is live"}

@app.get("/expenses")
def get_expenses():
    return [
        {"id": 1, "category": "Food", "amount": 20.5},
        {"id": 2, "category": "Transport", "amount": 15.0}
    ]
