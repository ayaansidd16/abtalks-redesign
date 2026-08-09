import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";

const challenges = [
  { day: 10, title: "Build a responsive card", status: "done" },
  { day: 11, title: "Create a navigation bar", status: "done" },
  { day: 12, title: "Design a student profile", status: "today" },
  { day: 13, title: "Build a pricing section", status: "locked" },
];

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="logo">
        AB<span>Talks</span>
      </Link>

      <nav>
        <Link
          className={location.pathname === "/" ? "active" : ""}
          to="/"
        >
          Home
        </Link>

        <Link
          className={location.pathname === "/dashboard" ? "active" : ""}
          to="/dashboard"
        >
          Dashboard
        </Link>
      </nav>

      <div className="avatar">AS</div>
    </header>
  );
}

/* ---------------- LANDING PAGE ---------------- */

function Landing() {
  return (
    <div className="page">
      <Header />

      <main>
        <section className="hero">
          <div className="badge">60-DAY CODING CHALLENGE</div>

          <h1>
            Build every day.
            <br />
            <span>Show your growth.</span>
          </h1>

          <p className="hero-text">
            ABTalks helps Indian college students build consistently,
            share their work and turn daily coding into visible progress.
          </p>

          <div className="hero-actions">
            <Link to="/dashboard" className="primary-btn">
              Start the challenge →
            </Link>

            <a href="#how-it-works" className="secondary-btn">
              How it works
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>60</strong>
              <span>Days</span>
            </div>
            <div>
              <strong>01</strong>
              <span>Build / day</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Progress</span>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="section-label">HOW IT WORKS</div>

          <h2>Small builds. Real consistency.</h2>

          <div className="steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Pick a track</h3>
              <p>
                Choose something you want to improve and commit to building
                every day.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Build daily</h3>
              <p>
                Complete the day's challenge and keep your learning streak
                alive.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Share your work</h3>
              <p>
                Submit proof through GitHub and LinkedIn and make your
                progress visible.
              </p>
            </div>
          </div>
        </section>

        <section className="highlight-section">
          <div>
            <div className="section-label">WHY ABTALKS?</div>
            <h2>Your learning should be visible.</h2>
            <p>
              Don't just learn quietly. Build a public trail of your progress
              that you can look back on and show to recruiters.
            </p>
          </div>

          <div className="highlight-card">
            <div className="mini-icon">✦</div>
            <strong>Consistency over perfection.</strong>
            <span>
              One meaningful build every day can become something much bigger.
            </span>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-label">READY?</div>
          <h2>Start building today.</h2>
          <p>Your first day is only one click away.</p>

          <Link to="/dashboard" className="primary-btn">
            Open my dashboard →
          </Link>
        </section>
      </main>

      <footer>
        <span>ABTalks © 2026</span>
        <span>Build. Learn. Share.</span>
      </footer>
    </div>
  );
}

/* ---------------- DASHBOARD ---------------- */

function Dashboard() {
  return (
    <div className="page">
      <Header />

      <main className="dashboard">
        <section className="dashboard-intro">
          <div>
            <div className="section-label">STUDENT DASHBOARD</div>
            <h1>Keep the streak alive.</h1>
            <p>Good morning, Ayaan. Here's what needs your attention today.</p>
          </div>

          <div className="profile-chip">
            <div className="avatar large">AS</div>
            <div>
              <strong>Ayaan Siddiqui</strong>
              <span>Frontend Track</span>
            </div>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="streak-card">
            <span className="card-label">CURRENT STREAK</span>
            <div className="streak-number">
              12 <span>days</span>
            </div>
            <p>🔥 You're building a strong habit.</p>
          </div>

          <div className="progress-card">
            <span className="card-label">CHALLENGE PROGRESS</span>
            <div className="progress-number">12 / 60</div>

            <div className="progress-bar">
              <div style={{ width: "20%" }}></div>
            </div>

            <p>20% completed</p>
          </div>
        </section>

        <section className="today-card">
          <div className="today-top">
            <div>
              <div className="section-label">TODAY'S TASK</div>
              <h2>Day 12 — Design a student profile</h2>
              <p>
                Create a clean student profile card showing skills,
                achievements and current learning progress.
              </p>
            </div>

            <div className="day-badge">DAY 12</div>
          </div>

          <div className="task-meta">
            <span>⚡ Medium</span>
            <span>◷ ~45 min</span>
            <span>● Frontend</span>
          </div>

          <Link to="/day/12" className="primary-btn">
            Open today's challenge →
          </Link>
        </section>

        <section className="progress-section">
          <div className="section-heading">
            <div>
              <div className="section-label">YOUR JOURNEY</div>
              <h2>Challenge progress</h2>
            </div>

            <span className="completion">12 of 60 completed</span>
          </div>

          <div className="challenge-list">
            {challenges.map((challenge) => (
              <div
                className={`challenge-row ${challenge.status}`}
                key={challenge.day}
              >
                <div className="challenge-day">
                  {challenge.status === "done"
                    ? "✓"
                    : challenge.day}
                </div>

                <div className="challenge-info">
                  <strong>Day {challenge.day}</strong>
                  <span>{challenge.title}</span>
                </div>

                <span className="challenge-status">
                  {challenge.status === "done"
                    ? "Completed"
                    : challenge.status === "today"
                    ? "Today"
                    : "Locked"}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="achievement-card">
          <div className="achievement-icon">✦</div>
          <div>
            <div className="section-label">ACHIEVEMENT</div>
            <h3>12 Day Builder</h3>
            <p>
              You've shown up for 12 consecutive days. Keep going.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------- DAY PAGE ---------------- */

function ChallengeDay() {
  return (
    <div className="page">
      <Header />

      <main className="day-page">
        <Link to="/dashboard" className="back-link">
          ← Back to dashboard
        </Link>

        <section className="day-header">
          <div className="day-badge">DAY 12</div>
          <div className="section-label">TODAY'S CHALLENGE</div>

          <h1>Design a student profile.</h1>

          <p>
            Create a profile experience that helps a student present their
            skills, achievements and learning journey clearly.
          </p>
        </section>

        <section className="challenge-info-grid">
          <div className="info-card">
            <span>DIFFICULTY</span>
            <strong>Medium</strong>
          </div>

          <div className="info-card">
            <span>EST. TIME</span>
            <strong>45 min</strong>
          </div>

          <div className="info-card">
            <span>TRACK</span>
            <strong>Frontend</strong>
          </div>
        </section>

        <section className="task-card">
          <div className="section-label">YOUR TASK</div>

          <h2>What needs to be built?</h2>

          <p>
            Build a responsive student profile card containing:
          </p>

          <ul>
            <li>Student name and short introduction</li>
            <li>Skills or technologies</li>
            <li>Achievements or certificates</li>
            <li>Current challenge progress</li>
            <li>A clear call-to-action</li>
          </ul>

          <div className="tip-box">
            <strong>💡 Think mobile-first</strong>
            <span>
              Most ABTalks students use the platform on their phones.
              Keep the experience simple, readable and easy to tap.
            </span>
          </div>
        </section>

        <section className="proof-card">
          <div className="section-label">PROOF OF WORK</div>

          <h2>Ready to submit?</h2>

          <p>
            Complete your build and share your work with the community.
          </p>

          <div className="proof-actions">
            <button className="primary-btn">Submit GitHub proof</button>
            <button className="secondary-btn">Share on LinkedIn</button>
          </div>

          <p className="muted">
            Submission is mocked for this redesign prototype.
          </p>
        </section>
      </main>
    </div>
  );
}

/* ---------------- APP ---------------- */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/day/12" element={<ChallengeDay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;