import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

type Expense = { id: number; category: string; amount: number };

const api = axios.create({ baseURL: "http://127.0.0.1:8000" });

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState<number>(10);

  useEffect(() => {
    api.get<Expense[]>("/expenses").then((r) => setExpenses(r.data));
  }, []);

  const summary = useMemo(() => {
    const m: Record<string, number> = {};
    for (const e of expenses) m[e.category] = (m[e.category] || 0) + e.amount;
    return m;
  }, [expenses]);

  const chartData = useMemo(
    () => ({
      labels: Object.keys(summary),
      datasets: [{ data: Object.values(summary) }],
    }),
    [summary]
  );

  async function addExpense() {
    const payload = {
      category: category || "Other",
      amount: Number.isFinite(amount) ? amount : 0,
    };
    const { data } = await api.post<Expense>("/transactions", payload);
    setExpenses((prev) => [...prev, data]);
  }

  return (
    <div style={{ padding: 24, maxWidth: 820, margin: "0 auto", fontFamily: "ui-sans-serif, system-ui" }}>
      <h1 style={{ marginBottom: 12 }}>Finance Tracker</h1>

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
        <input
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: 8 }}
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          style={{ padding: 8, width: 140 }}
        />
        <button onClick={addExpense} style={{ padding: "8px 12px", cursor: "pointer" }}>
          Add
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ background: "#fff", padding: 16, borderRadius: 12, boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
          <h3 style={{ marginTop: 0 }}>Summary</h3>
          {Object.keys(summary).length === 0 ? (
            <p>No data yet.</p>
          ) : (
            <ul>
              {Object.entries(summary).map(([cat, sum]) => (
                <li key={cat}>
                  {cat}: ${sum.toFixed(2)}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div style={{ background: "#fff", padding: 16, borderRadius: 12, boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
}
