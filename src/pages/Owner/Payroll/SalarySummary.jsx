import { summaryCards } from "./payrollData";
import "./Payroll.css";

const SalarySummary = () => {
  return (
    <div className="summary-grid">
      {summaryCards.map((card) => {
        const Icon = card.icon;

        return (
          <div className="summary-card" key={card.id}>
            <div
              className="summary-icon"
              style={{
                background: card.bg,
                color: card.color,
              }}
            >
              <Icon size={28} />
            </div>

            <div className="summary-content">
              <h5>{card.title}</h5>
              <h2>{card.value}</h2>
              <span>{card.subtitle}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SalarySummary;