from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Dict

app = FastAPI(title="Finance Tracker API")

origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
    "http://127.0.0.1:5174",
    "http://localhost:5174",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TransactionIn(BaseModel):
    category: str = Field(min_length=1)
    amount: float = Field(gt=0)

class TransactionOut(TransactionIn):
    id: int

_db: List[TransactionOut] = [
    TransactionOut(id=1, category="Food", amount=20.5),
    TransactionOut(id=2, category="Transport", amount=15.0),
]
_next_id = 3

@app.get("/")
def root():
    return {"message": "Finance Tracker API is live"}

@app.get("/expenses", response_model=List[TransactionOut])
def get_expenses():
    return _db

@app.post("/transactions", response_model=TransactionOut)
def create_transaction(txn: TransactionIn):
    global _next_id
    item = TransactionOut(id=_next_id, category=txn.category, amount=txn.amount)
    _db.append(item)
    _next_id += 1
    return item

@app.get("/summary")
def get_summary() -> Dict[str, float]:
    summary: Dict[str, float] = {}
    for t in _db:
        summary[t.category] = summary.get(t.category, 0.0) + t.amount
    return summary
